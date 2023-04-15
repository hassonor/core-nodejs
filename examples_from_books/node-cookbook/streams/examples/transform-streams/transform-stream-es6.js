import fs from 'fs';
import { Transform } from 'stream';

const rs = fs.createReadStream('file.txt');

const newFile = fs.createWriteStream('new-file.txt');

class Uppercase extends Transform {
  // eslint-disable-next-line no-underscore-dangle
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

rs.pipe(new Uppercase()).pipe(newFile);
