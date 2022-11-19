const http = require("http");

const requestListener = (req, res) => {
  // req, res are streams!!
  console.dir(req, { depth: 0 }); // depth = 0 means show only the first level of properties and any nested objects will not be printed here.
  res.write("Hello World\n");
  res.end();
};

const server = http.createServer();
server.on("request", requestListener);

server.listen(4321, () => {
  console.log("Server is running.... on port 4321");
});