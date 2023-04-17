function calculateSquare(number) {
    const promise = new Promise(function (resolve, reject) {
        setTimeout(function () {
            if (typeof number !== 'number') {
                return reject(new Error('Argument of type number is expected'))
            }
            const result = number * number;
            resolve(result);
        }, 800);
    })
    return promise;
}

// calculateSquare(2).then(value=>{
//     console.log('Success: ' + value);
// }, error =>{
//     console.log('Error: ' + error);
// })
//
// calculateSquare('2').then(value=>{
//     console.log('Success: ' + value);
// }, error =>{
//     console.log('Error: ' + error);
// })

calculateSquare(1).then(value1 => {
    console.log(value1);
    return calculateSquare(2);
}).then(value2 => {
    console.log(value2);
}, error => {
    console.log('Error: ' + error);
});

calculateSquare(1).then(value1 => {
    console.log(value1);
    return calculateSquare(2);
})
    .then(value2 => {
        console.log(value2);
    })
    .catch(error => {
        console.log('Error: ' + error);
    })
