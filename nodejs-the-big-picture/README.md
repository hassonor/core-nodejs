# Core Node.js: The Big Picture
___

## What is Node.js?

As an asynchronous event-driven JavaScript runtime, Node.js is designed to build scalable network applications.

## Where is Node.js Commonly Found?

- [Microservices and APIs](#microservices-and-apis)
- [Serverless Cloud Functions](#serverless-cloud-functions)
- [Command Line Applications](#command-line-applications)
- [Desktop Applications](#desktop-applications)

### Node.js: A Better Way to JavaScript
___

- No more browser incompatibility or polyfills!
- Adjust to changes in Node.js versions
- Possibly OS-aware

### A Brief History of Node.js
___

- **2009**: Ryan Dahl demonstrates Node.js at a JS conference
- **2010**: Joyent sponsors Node.js, npm package manager released
- **2011**: Microsoft collaborates on Windows support
- **2014**: Frustration with Joyent's governance caused a fork of Node to emerge (a project called io.js)
- **2015**: io.js and Node.js are merged, Node Foundation created

### What is the Release Cadence Today?
___

- New major versions released every 6 months
- Even-numbered major releases covered by long-term support (LTS)
- No more than two active LTS releases at a time

## Streams
___

- [Readable Streams](#readable-streams)
- [Read / Write Streams (Duplex, Transform)](#read-write-streams)
- [Writable Streams](#writable-streams)

### Readable Streams

- **Events**: readable, data, end, error
- **Methods**: read, pause, resume, destroy
- **Properties**: readable, readableLength

See more at: [https://nodejs.org/api/stream.html#readable-streams](https://nodejs.org/api/stream.html#readable-streams)

### Writable Streams

- **Events**: drain, close, finish, error
- **Methods**: write, destroy, end
- **Properties**: writable, writableLength

See more at: [https://nodejs.org/api/stream.html#writable-streams](https://nodejs.org/api/stream.html#writable-streams)

### Streams in the Node.js API

- fs.ReadStream
- fs.WriteStream
- http.ClientRequest
- http.IncomingMessage
- http.ServerResponse
- zlib.createGzip()

### Example Streams Use Case

```javascript
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Encoding', 'gzip')
    fs.createReadStream(path.join(__dirname, 'lorem.txt'))
        .pipe(zlib.createGzip())
        .pipe(res)
})
```


## Testing Node.js Applications
__________
* **Mocha** (Test Framework): https://mochajs.org
* **Chai** (Assertion Library): https://chaijs.com
* **Sinon** (Spies, Stubs and Mocks): https://sinonjs.org







