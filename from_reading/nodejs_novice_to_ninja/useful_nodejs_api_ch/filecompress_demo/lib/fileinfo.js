// Import necessary constants and functions from the 'fs' module
import {constants as fsConstants} from 'fs';
import {access, stat} from 'fs/promises';

// Define an asynchronous function to get file information
export async function getFileInfo(file) {

    // Initialize an empty object to store file information
    const fileInfo = {};

    try {
        // Fetch file or directory stats
        const info = await stat(file);

        // Determine if the path is a file
        fileInfo.isFile = info.isFile();

        // Determine if the path is a directory
        fileInfo.isDir = info.isDirectory();
    } catch (e) {
        // If there's an error (e.g., file doesn't exist), return an object indicating it's a new file
        return {new: true};
    }

    try {
        // Check if the file is readable
        await access(file, fsConstants.R_OK);
        fileInfo.canRead = true;
    } catch (e) {
        // If there's an error, it means the file is not readable. No need to set 'canRead' as it defaults to undefined.
    }

    try {
        // Check if the file is writable
        await access(file, fsConstants.W_OK);
        fileInfo.canWrite = true;
    } catch (e) {
        // If there's an error, it means the file is not writable. No need to set 'canWrite' as it defaults to undefined.
    }

    // Return the collected file information
    return fileInfo;
}
