const https = require("https");
const services = require("../services");
const url = require("url");
const jsonBody = require("body/json");
const fs = require("fs");

const server = https.createServer({
  key: fs.readFileSync("./key.pem"),
  cert: fs.readFileSync("./cert.pem")
});
server.on("request", (request, response) => {
  const parsedUrl = url.parse(request.url, true);

  if (request.method === "GET" && parsedUrl.pathname === "/metadata/") {
    const { id } = parsedUrl.query;
    const metadata = services.fetchImageMetadata(id);
    console.log(metadata);
    console.log(request.headers);
  }
  // const body = [];
  // request.on("data", (chunk) => {
  //   body.push(chunk);
  // }).on("end", () => {
  //   const parsedJSON = JSON.parse(Buffer.concat(body));
  //   const userName = parsedJSON[0]["userName"];
  //   console.log(userName);
  //   services.createUser(userName);
  // });

  jsonBody(request, response, (err, body) => {
    if (err) {
      console.log(err);
    } else {
      services.createUser(body["userName"]);
    }
  });

  response.end("This was served with https!");

});

server.listen(443);