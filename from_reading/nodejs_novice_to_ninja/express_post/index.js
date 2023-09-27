// Import essential modules
import express from 'express'; // Framework for web applications
import compression from 'compression'; // Middleware for compressing HTTP responses

// Import utilities for file and directory paths in ES modules
import {fileURLToPath} from 'url'; // Convert a module URL to a file path
import {dirname, sep} from 'path'; // Extract directory name and get platform-specific path separator


// Determine the directory paths for various resources in the app
const __dirname = dirname(fileURLToPath(import.meta.url)) + sep,
    cfg = {
        port: process.env.PORT || 3000, // Set the server port
        dir: {
            root: __dirname,
            static: __dirname + 'static' + sep,
            views: __dirname + 'views' + sep,
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

// body parsing
app.use(express.urlencoded({extended: true}));

// Apply response compression to reduce data transfer sizes
app.use(compression());

// Serve static files (like images, stylesheets, and scripts) from the specified directory
app.use(express.static(cfg.dir.static));

// render form
// use .all to handle initial GET and POST
app.all('/', (req, res, next) => {

    if (req.method === 'GET' || req.method === 'POST') {

        res.render('form', {
            title: 'Parse HTTP POST data',
            data: req.body
        });

    } else {
        next();
    }

});


// Handle 404 errors for unhandled routes
app.use((req, res) => {
    res.status(404).render('message', {title: 'Not found'});
});

// Start the Express server on the designated port
app.listen(cfg.port, () => {
    console.log(`Server listening at http://localhost:${cfg.port}`);
})

// Make the configuration and app instance available for imports in other modules
export {cfg, app};
