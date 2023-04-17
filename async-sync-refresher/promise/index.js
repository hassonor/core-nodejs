const myPromise = new Promise(function(resolve,reject){
    resolve('Hello world');
});

myPromise.then(value => {
    console.log('This is inside the onFulfilled function');
})

console.log('This is written after my Promise.then');
