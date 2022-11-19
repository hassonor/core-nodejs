const api = require("./object");
const templateGenerator = require("./function");


console.log(api.language, api.direction, api.encoding);


const myTemplate = templateGenerator("Hello Or Hasson! Welcome Back! :)");

console.log(myTemplate);