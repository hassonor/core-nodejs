import express from 'express';
import formidable from 'formidable';
import compression from 'compression';
import {fileURLToPath} from 'url';
import {dirname, parse, sep} from 'path';
import cron from 'node-cron';
import fs from 'fs';

const app = express();
const __dirname = dirname(fileURLToPath(import.meta.url));

// Configuration
const cfg = {
    port: process.env.PORT || 3000,
    dir: {
        root: __dirname,
        uploads: `${__dirname}/uploads${sep}`,
        views: `${__dirname}/views${sep}`
    }
};

// Middleware Setup
app.disable('x-powered-by');
app.set('view engine', 'ejs');
app.set('views', cfg.dir.views);
app.use(compression());
app.use(express.static(cfg.dir.uploads));

// Route to handle form submission and display
app.all('/', (req, res, next) => {
    if (['GET', 'POST'].includes(req.method)) {
        const form = formidable({uploadDir: cfg.dir.uploads, keepExtensions: true});

        form.parse(req, (err, data, files) => {
            if (err) return next(err);

            if (files?.image?.size > 0) {
                data.imageurl = '/' + parse(files.image.path).base;
            }

            res.render('form', {title: 'Parse HTTP POST file data', data});
        });
    } else {
        next();
    }
});

// Handle 404 errors
app.use((req, res) => {
    res.status(404).render('message', {title: 'Not found'});
});

// Cron job to delete files older than 24 hours
cron.schedule('0 0 * * *', () => {
    const oneDay = 24 * 60 * 60 * 1000;
    const now = Date.now();

    fs.readdir(cfg.dir.uploads, (err, files) => {
        if (err) return console.error(`Error reading directory: ${err}`);

        files.forEach(file => {
            const filePath = `${cfg.dir.uploads}${file}`;

            fs.stat(filePath, (err, stats) => {
                if (err) return console.error(`Error fetching file stats: ${err}`);

                if (now - stats.mtime.getTime() > oneDay) {
                    fs.unlink(filePath, err => {
                        if (err) return console.error(`Error deleting file: ${err}`);
                        console.log(`Deleted old file: ${file}`);
                    });
                }
            });
        });
    });
});

// Start the server
app.listen(cfg.port, () => {
    console.log(`Server listening at http://localhost:${cfg.port}`);
});
