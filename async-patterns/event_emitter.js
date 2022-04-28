const EventEmitter = require("events");

let myEventEmitter = new EventEmitter();

//
// myEventEmitter.on("wroteCode", () => {
//   console.log("Somebody wrote some code!");
// });
//
// myEventEmitter.on("wroteCode", () => {
//   console.log("Busy building Node apps!");
// });
//
// myEventEmitter.emit("wroteCode");


myEventEmitter.on("wroteCode", (language) => {

});

myEventEmitter.emit("wroteCode", "JavaScript");
