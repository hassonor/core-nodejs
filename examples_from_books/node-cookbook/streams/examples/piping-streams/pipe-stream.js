import fs from 'fs';

const rs = fs.createReadStream('file.txt');

rs.pipe(process.stdout, { end: false });

rs.on('end', () => {
  console.log('\nEnd of stream pipe :)');
});
