// Import essential modules
import express from 'express'; // Framework for building web applications
import formidable from "formidable"; // For parsing form data, especially file uploads
import compression from 'compression'; // Middleware for compressing HTTP responses

// Import utilities for file and directory paths in ES modules
import {fileURLToPath} from 'url'; // Convert a module URL to a file path
import {dirname, parse, sep} from 'path'; // Extract directory name and get platform-specific path separator

// Determine the directory paths for various resources in the app
const __dirname = dirname(fileURLToPath(import.meta.url)) + sep;
const cfg = {
    port: process.env.PORT || 3000, // Set the server port
    dir: {
        root: __dirname,
        uploads: __dirname + 'uploads' + sep,
        views: __dirname + 'views' + sep
    }
};

// Display configuration details for debugging and verification
console.dir(cfg, {depth: null, color: true});

// Create an Express application instance
const app = express();

// Improve security by removing the header that identifies the server technology
app.disable('x-powered-by');

// Set up the view engine for server-side templating
app.set('view engine', 'ejs');
app.set('views', cfg.dir.views);

// Apply response compression to reduce data transfer sizes
app.use(compression());

// Serve static files (like images, stylesheets, and scripts) from the specified directory
app.use(express.static(cfg.dir.uploads));

// Render form
// Use .all to handle both initial GET and POST requests
app.all('/', (req, res, next) => {

    if (req.method === 'GET' || req.method === 'POST') {

        // Parse uploaded file data
        const form = formidable({
            uploadDir: cfg.dir.uploads,
            keepExtensions: true
        });

        form.parse(req, (err, data, files) => {

            if (err) {
                next(err);
                return;
            }

            // Check if an image file was uploaded and process its details
            if (files && files.image && files.image.size > 0) {
                data.filename = files.image.originalFilename;
                data.filetype = files.image.mimetype;
                data.filesize = Math.ceil(files.image.size / 1024) + ' KB';
                data.uploadto = files.image.filepath;
                data.imageurl = '/' + parse(files.image.filepath).base;
            }

            // Render the form with the provided data
            res.render('form', {title: 'Parse HTTP POST file data', data});

        });

    } else {
        next(); // Pass to the next middleware if not GET or POST
    }

});

// Handle 404 errors for unhandled routes
app.use((req, res) => {
    res.status(404).render('message', {title: 'Not found'});
});

// Start the Express server on the designated port
app.listen(cfg.port, () => {
    console.log(`Server listening at http://localhost:${cfg.port}`);
});

// Make the configuration and app instance available for imports in other modules
export {cfg, app};
