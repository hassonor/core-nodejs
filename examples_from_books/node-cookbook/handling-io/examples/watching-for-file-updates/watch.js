// Import the `fs` module to watch a file for changes
import fs from 'fs';
// Import the `path` module to join the file path with the current working directory
import path from 'path';
// Import the `moment` module to format the timestamp
import moment from 'moment';

// Join the file path with the current working directory using `path.join()`
const filePath = path.join(process.cwd(), 'file.txt');

// Watch the file for changes using `fs.watch()`
fs.watch(filePath, (eventType, filename) => {
  // Get the current timestamp using the `moment()` function and format it
  const time = moment().format('MMMM Do YYYY, h:mm:ss a');
  // Log a message with the filename and timestamp
  console.log(`${filename} updated ${time}`);
});
