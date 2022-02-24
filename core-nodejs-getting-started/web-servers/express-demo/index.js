const express = require('express')
const server = express();


server.get('/', (req, res) => {
    res.send('Hello Express')
})

server.get('/about', (req, res) => {
    res.send('About Page...')
})

server.listen(4422, () => {
    console.log('Express Server is Running...');
})