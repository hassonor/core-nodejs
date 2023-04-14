import { Readable } from 'stream';

async function* generate() {
  yield 'Node.js';
  yield 'is';
  yield 'a';
  yield 'JavaScript';
  yield 'Runtime';
  yield '.';
  yield 'My';
  yield 'name';
  yield 'is';
  yield 'Or Hasson :)';
}

const readable = Readable.from(generate());

readable.on('data', (chunk) => {
  console.log(chunk);
});
