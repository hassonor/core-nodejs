const express = require('express');
const bodyParser = require('body-parser');

const login = require('./lib/login');
const logout = require('./lib/logout');
const {readProfile, saveProfile} = require('./lib/profile');

const app = express();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.post('/login', login);
app.get('/logout', logout);
app.get('/profile', readProfile);
app.post('/profile', saveProfile);

const proto = Object.prototype;
Object.freeze(proto);

const PORT = 3030;
app.listen(PORT, function () {
    console.log(`http://localhost:${PORT}`);
})
