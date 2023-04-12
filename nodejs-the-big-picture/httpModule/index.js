const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return;
  console.log(req.url);
  let myURL = new URL(req.url, "http://localhost:5000");
  console.log(myURL);

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("<h1>Welcome to My Node.js Server</h1>");
});

server.listen(5000, () => {
  console.log("Server listening on port 5000");
});