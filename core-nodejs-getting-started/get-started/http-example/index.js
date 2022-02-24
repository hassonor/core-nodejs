const http = require('http')

const server = http.createServer((req, res) => {
    res.end('Hello World\n')
});

server.listen(4321, ()=>{
    console.log('Server is running.... on port 4321')
})