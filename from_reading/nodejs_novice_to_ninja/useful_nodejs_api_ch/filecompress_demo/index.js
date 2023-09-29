import path from 'path';
import {readFile, writeFile} from 'fs/promises';
import {getFileInfo} from './lib/fileinfo.js';

// Utility function to convert byte size to a readable format
function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return '0 Bytes';

    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
}

// Resolve input and output file paths from command line arguments
let
    input = path.resolve(process.argv[2] || ''),
    output = path.resolve(process.argv[3] || ''),
    [inputInfo, outputInfo] = await Promise.all([getFileInfo(input), getFileInfo(output)]),
    error = [];

// If the output is a writable directory and the input is a file,
// use the input file name as the output file name inside the directory
if (outputInfo.isDir && outputInfo.canWrite && inputInfo.isFile) {
    output = path.resolve(output, path.basename(input));
}

// Check for potential errors with input and output files
if (!inputInfo.isFile || !inputInfo.canRead) error.push(`cannot read input file ${input}`);
if (input === output) error.push('input and output files cannot be the same');

// If there are any errors, display usage and error messages, then exit
if (error.length) {
    console.log('Usage: ./filecompress.js [input file] [output file|dir]');
    console.error('\n  ' + error.join('\n  '));
    process.exit(1);
}

// Read the content of the input file
console.log(`processing ${input}`);
let content;

try {
    content = await readFile(input, {encoding: 'utf8'});
} catch (e) {
    console.log(e);
    process.exit(1);
}

let lengthOrigBytes = Buffer.from(content, 'utf8').length;
console.log(`file size ${formatBytes(lengthOrigBytes)}`);

// Compress the content by removing unnecessary spaces, comments, etc.
content = content
    .replace(/\n\s+/g, '\n')                // Trim leading space from lines
    .replace(/\/\/.*?\n/g, '')              // Remove inline // comments
    .replace(/\s+/g, ' ')                   // Remove excessive whitespace
    .replace(/\/\*.*?\*\//g, '')            // Remove /* ... */ comments
    .replace(/<!--.*?-->/g, '')             // Remove <!-- ... --> comments
    .replace(/\s*([<>(){}}[\]])\s*/g, '$1') // Remove space around brackets and other symbols
    .trim();

let lengthNewBytes = Buffer.from(content, 'utf8').length;

// Write the compressed content to the output file
console.log(`outputting ${output}`);
console.log(`file size ${formatBytes(lengthNewBytes)} - saved ${Math.round((lengthOrigBytes - lengthNewBytes) / lengthOrigBytes * 100)}%`);

try {
    await writeFile(output, content);
} catch (e) {
    console.log(e);
    process.exit(1);
}
