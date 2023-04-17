
function logToConsole(somePromise){
    somePromise.then(value => console.log(value));
}



const value = 'string';
const promisifiedValue = Promise.resolve(value);

logToConsole(promisifiedValue);


const rejectedPromiseCustom = Promise.reject(new Error('Some Custom Error.'));

