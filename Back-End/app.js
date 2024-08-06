const express = require('express')
const morgan = require('morgan')
const port = 3000;

const app = express()

//usando o morgan com middleware
//Retornando o método, a URL e o tempo de resposta
app.use(morgan(':method :url :response-time'))

app.use(express.json())

//Rota GET que retorna como resposta "Hello World"
app.get('/',(req, res) => {
    res.send('Hello World')
})

//Rota Post que aceita um obj e retrona os dados recebidos.
app.post('/devorbital',(req, res) => {
    data = req.body;
    res.send(data);
})

app.listen(port, () => console.log(`Started at ${port}`))