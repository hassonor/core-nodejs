import fs from 'fs';
import http from 'http';

const index = fs.readFileSync('public/index.html');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.end(index);
});

server.listen(5000);
