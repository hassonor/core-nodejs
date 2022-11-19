const EventEmitter = require("events");

// Streams are Event Emitters
// process.stdin, process.stdout


const myEmitter = new EventEmitter();


/*
    This will be invoked after the rest of this programs is executed.
    I put it in setImmediate instead moving it to last line of the file.
 */
setImmediate(() => {
  myEmitter.emit("TEST_EVENT");
});

myEmitter.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was fired");
});

myEmitter.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was fired");
});

myEmitter.on("TEST_EVENT", () => {
  console.log("TEST_EVENT was fired");
});



