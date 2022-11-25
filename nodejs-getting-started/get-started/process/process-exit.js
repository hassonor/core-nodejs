setTimeout(() => process.exit(), 2000)

process.on('exit', () => {
    console.log('Process will exit now. See you later bro!')
});

console.log("Hello There")