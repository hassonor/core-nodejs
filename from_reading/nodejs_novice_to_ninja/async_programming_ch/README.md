### Promises

___
A `Promise` object represents the eventual completion or failure of a asynchronous operation with resulting value.
Promises provide a clearer syntax that makes it easier to chain asynchronous calls that runs in series. Developers can
also avoid the callback issues. <br><br>
Promises were introduced in `ES6/2015` and are syntactical sugar; callbacks are still used under the hood. To make a
function asynchronous, a `Promise` object must be return immediately. The `Promise` constructor is passed two callback
functions as parameters:<br>

* `resolve`: the function that's run when processing successfully completes
* `reject`: the function that's run when an error

```javascript
function pWait(ms) {
    ms = parseFloat(ms)
    return new Promise((resolve, reject) => {
        if (!ms || ms < 1 || ms > 3500) {
            reject(new RangeError('Invalid ms value'))
        } else {
            setTimeout(resolve, ms, ms);
        }
    });
}
```

#### util.promisify()

`util.promisify()` converts any callback-based function with an error as the first argument into a promise.

```javascript
import {promisify} from 'util';

// Convert call back function
const pWait = promisify(wait);
```

#### Anything that returns a promise can have:

* `then()` method, which is passed a function that takes the result from the previous `resolve()`
* `catch()` method, which is passed a function that runs when an error is returned from any `reject`
* a `finally()` method, which is called at the end regardless

```javascript
function pWait(ms) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(ms);
        }, ms);
    });
}

pWait(100)
    .then(ms => {
        console.log(`waited ${ms}ms`);
        return pWait(ms + 100);
    })
    .then(ms => {
        console.log(`waited ${ms}ms`);
        return pWait(ms + 100);
    })
    .then(ms => {
        console.log(`waited ${ms}ms`);
    })
    .catch(err => {
        console.log(err);
    })
    .finally(() => console.log("all done"));
```

### Parallel Promises

___

#### Promise.all()

`Promise.all()` , which takes an array of promises, runs each
in parallel, and returns a new outer promise where resolve() returns an array
of output values in the same order.

```javascript
// book data object
const bookData = {id: 123};
Promise.all([
    getBook(bookData.id),
    getStock(bookData.id),
    getPrice(bookData.id)
])
    .then(result => {
        bookData.title = result[0].title;
        bookData.author = result[0].author;
        bookData.description = result[0].description;
        bookData.stock = result[1];
        bookData.price = result[2];
    })
    .catch(err => {
        console.log(err);
    })
```

#### Promise.allSettled()

Runs all promises in the array and waits until every one has resolved or
rejected. Each item in the returned array is an object with a .status
property (either `fulfilled` or `rejected` ) and a .value property with
the returned value.

#### Promise.any()

Runs all promises in the array but resolves as soon as the first promise
resolves. A single value is returned.

#### Promise.race()

Runs all promises in the array but resolves or rejects as soon as the first
promise resolves or rejects. A single value is returned.

#### async/await

`ES 2017` introduced the `async` and `await` keywords, which enable asynchronous, promise-based behavior to be written
in a cleaner and clearer syntax. There are more syntactical sugar, but they make promises sweeter.<br>
Any function that contains one or `await` statements must have `async` prepended to indicate it's asynchronous. In
effect, this turns it into a promise-based function:

```javascript
async function waitSeries(ms) {
    try {
        const p1 = await pWait(ms);
        console.log(`waited ${p1} ms`)

        const p2 = await pWait(p1 + 100);
        console.log(`waited ${p2} ms`)

        const p3 = await pWait(p2 + 100);
        console.log(`waited ${p3} ms`)
    } catch (err) {
        console.log(err);
    }
}

// top-level await to run the async function
await waitSeries(100);
```