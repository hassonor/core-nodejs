const fs = require("fs");

/*
    This pattern is using readFile method from the built-in fs module.
    This callback function is always the last argument of the host function.
    The event loop will make this callback function executed when the operation is ready with the data for us.
 */
fs.readFile(__filename, function cb(err, data) {
  console.log("File data is", data);
});

console.log("Test");