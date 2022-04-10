import express from 'express';
import path from 'path';


const app = express();

const PORT = 3003 | process.env.PORT;

app.use(express.static(path.join(__dirname, './static')))


app.get('/', (request, response) => {
    response.sendFile(path.join(__dirname, './static/index.html'));
});

app.get('/speakers', (request, response) => {
    response.sendFile(path.join(__dirname, './static/speakers.html'));
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))