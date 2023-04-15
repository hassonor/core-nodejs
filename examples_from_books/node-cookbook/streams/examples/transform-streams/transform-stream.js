import fs from 'fs';
import { Transform } from 'stream';

const rs = fs.createReadStream('file.txt');

const newFile = fs.createWriteStream('new-file.txt');

const uppercase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  },
});

rs.pipe(uppercase).pipe(newFile);
