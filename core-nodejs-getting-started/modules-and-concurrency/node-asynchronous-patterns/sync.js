const fs = require("fs");

/*
  Synchronously read file.
  The whole program here doesn't go through the event loop.
  We are directly using the operating system synchronous file reading API.
 */
const data = fs.readFileSync(__filename);

console.log("File data is", data);

console.log("Test");