import fs from 'fs';

const file = fs.createWriteStream('./file.txt');

for (let i = 0; i <= 10000; i += 1) {
  file.write(
    "Node.js is a JavaScript runtime built on Google Chrome's V8 JavaScript engine.\n",
  );
}
