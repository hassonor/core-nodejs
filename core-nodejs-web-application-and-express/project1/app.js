const path = require('path');
const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, '/public/')));

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index', {title: 'Or Hasson Site!', data: ['a', 'b', 'c']})
})

const PORT = process.env.PORT || 3003

app.listen(3003, () => {
    console.log(`Listening on ${PORT}...`)
});