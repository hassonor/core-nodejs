const fs = require("fs");
const util = require("util");

/*
    promisify the fs.readFile function to return promise.
    Then in line 12 line , consume that promise with async-await pattern

 */
const readFile = util.promisify(fs.readFile);

async function main() {
  const data = await readFile(__filename);
  console.log("File data is", data);
}

main();

console.log("Test");