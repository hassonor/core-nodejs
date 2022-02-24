const timerId = setTimeout(
    () => console.log("This one will not printed :)"),
    0
);

// setImmediate will do the same as setTimeout with zero.

clearTimeout(timerId);

// clearInterval clears setInterval
// clearImmediate clears setImmediate