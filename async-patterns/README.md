# Async-Patterns-in-Node.js

### Generator functions

* Functions that can be paused and resumed
    * State of the function ist stored while paused
* Return generators
    * Implement the iterator protocol
* Lazy execution
    * Values computed on demand

### async/await

* Built with promises and generators
* Reads more like synchronous code
* Data returned from async functions is automatically wrapped in a promise
* Using the await keyword will automatically extract data from a promise

### EventEmitters
