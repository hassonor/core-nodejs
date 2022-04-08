import express from 'express';

const app = express();

const PORT = 3003 | process.env.PORT;


app.get('/', (request, response) => {
    response.send('Hello Or Hasson');
});

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))