const { readFile } = require("fs").promises;

/*
    instead of create promise version of fs.readFile,
    We can get the promise version of fs.readFile. (line 1)
 */

async function main() {
  const data = await readFile(__filename);
  console.log("File data is", data);
}

main();

console.log("Test");