const fs = require("fs");


const files = ["./1-loop.js", "./dsfq.js", "./2-try.js"];

files.forEach(file => {
  try {
    const data = fs.readFileSync(file, "utf-8"); // read the files synchronously  with 'utf-8' encoding
    console.log("File data is", data);
  } catch (err) {
    if (err.code === "ENOENT") { //catch ENOENT error
      console.log("File not found");
    } else {
      throw err;
    }

  }

});