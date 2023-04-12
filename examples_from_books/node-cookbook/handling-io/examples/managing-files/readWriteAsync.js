import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'hello.txt');

// eslint-disable-next-line consistent-return
fs.readFile(filePath, 'utf8', (err, contents) => {
  if (err) {
    return console.log(err);
  }
  console.log('File Contents:', contents);
  const upperContents = contents.toUpperCase();

  setTimeout(() => updateFile(filePath, upperContents), 10);
});
const updateFile = (filePath, contents) => {
  fs.writeFile(filePath, contents, (err) => {
    if (err) throw err;
    console.log('File updated.');
  });
};

setInterval(() => process.stdout.write('**** \n'), 1).unref();
