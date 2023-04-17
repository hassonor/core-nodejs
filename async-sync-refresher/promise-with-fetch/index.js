const fetch = require("node-fetch")


fetch('http://www.omdbapi.com/?s=batman&y=2018&apikey=ed4903dc')
.then(resp => resp.json()).then(data => console.log(data));
