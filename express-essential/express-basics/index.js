import express from "express";
import data from './data/data.json';

const app = express();


const PORT = 3003 | process.env.PORT;

// Using the public folder at the root of the project
app.use(express.static('public'));

// Using the images' folder at the route /images
app.use('/images', express.static('images'));

// GET
app.get('/', (request, response) => {
    response.json(data)
});

// GET - download method
app.get('/download', (request, response) => {
    response.download("images/mountains_2.jpeg");
});

// GET - redirect method
app.get('/redirect', (request, response) => {
    response.redirect("https://orhasson.vercel.app/");
});

app.route("/class").get((request, response) => {
    response.send("Retrieve class info");
}).post((request, response) => {
    response.send('Create class info');
}).put((request, response) => {
    response.send('Update class info');
});
;


// GET with next()
app.get('/next', (request, response, next) => {
    console.log("The response will be sent by the next function");
    next();
}, (request, response) => {
    response.send("I just set up a route with a second callback.")
});

// GET with Routing
app.get('/class/:id', (request, response) => {
    const studentId = Number(request.params.id);
    const student = data.filter(student => student.id === studentId);
    response.json(student)
});


app.delete('/delete', (request, response) => {
    response.send('This is a DELETE request at /delete');
});

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}...`)
})
