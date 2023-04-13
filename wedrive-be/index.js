const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const db = require('./db')
const usuarioRouter = require('./routes/usuario-router')
const estiloRouter = require('./routes/estilo-router')

const app = express()
const apiPort = 3008

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/usuario', usuarioRouter)
app.use('/api/estilo', estiloRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))
