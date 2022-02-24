const http = require('http')

const requestListener = (req, res) => {
    res.write('Hello World\n')
    res.end();
};

const server = http.createServer();
server.on('request', requestListener)

server.listen(4321, () => {
    console.log('Server is running.... on port 4321')
})