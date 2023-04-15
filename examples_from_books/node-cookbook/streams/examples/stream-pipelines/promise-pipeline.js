import fs from 'fs';
import stream from 'stream';
import util from 'util';

const pipeline = util.promisify(stream.pipeline);

const uppercase = new stream.Transform({
  transform(chunk, encoding, callback) {
    // Data processing
    callback(null, chunk.toString().toUpperCase());
  },
});

async function run() {
  await pipeline(
    fs.createReadStream('./file.txt'),
    uppercase,
    fs.createWriteStream('./newFile.txt'),
  );
  console.log('Pipeline succeeded.');
}

run().catch((err) => {
  console.error('Pipeline failed.', err);
});
