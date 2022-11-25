const func = (delay) => {
    console.log('Hello from Or Hasson After ' + delay + ' seconds');
}

// For: func(arg1, arg2, arg3, ...)
// We can user: set Timeout(func, delay, arg1,arg2,arg3 .
setTimeout(func, 1000, 1)
setTimeout(func, 2000, 2)
setTimeout(func, 3000, 3)

