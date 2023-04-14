import fs from 'fs';

const rs = fs.createReadStream('./file.txt');

rs.on('data', (data) => {
  console.log('Read chunk:', data);
});

rs.on('end', () => {
  console.log('No more data :)');
});
