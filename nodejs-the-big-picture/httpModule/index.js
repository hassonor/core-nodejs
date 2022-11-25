// HTTP MODULE
const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return;
  console.log(req.url);
  const myURL = new URL(req.url, "http://localhost:5000");
  console.log(myURL);

  res.writeHead(200, { "Context-Type": "text/html" });
  res.end("<h1>Hey Or Hasson</h1>");
});

server.listen(5000);