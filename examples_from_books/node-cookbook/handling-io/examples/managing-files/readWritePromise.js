import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'hello.txt');

async function run() {
  try {
    const contents = await fs.promises.readFile(filePath, 'utf8');
    console.log('File Contents:', contents);
  } catch (error) {
    console.error(error);
  }
}

run();
