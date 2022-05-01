const express = require('express')
const bodyParser = require('body-parser')

const userRoute = require('./routes/userRoutes')

const app = express()
const port = 3000

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

userRoute(app)

app.get('/', (req, res) => res.send('Olá mundo, pelo Express!'))

app.listen(port, () => console.log('API Rodando na porta 3000'))