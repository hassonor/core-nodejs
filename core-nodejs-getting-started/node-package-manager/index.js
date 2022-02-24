const express = require('express')
const server = express();


server.get('/', (req, res) => {
    res.send('Hello Express!')
});

const PORT = 5000
server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})