# Core Nodejs: The Big Picture 
___________
**Question**: What is Node.js?\
**Answer**: As an asynchronous event driven JavaScript runtime, 
Node is designed to build scalable network applications.

**Question**: Where is Node.js Commonly Found?\
**Answer**:  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Microservices and APIs\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Serverless Cloud Functions\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Command Line Applications\
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; - Desktop Applications

###Node.js: A Better Way to JavaScript
__________
* No more browser incompatibility or polyfills!
* Adjust to changes in Node.js versions 
* Possibly OS-aware

###A Brief History of Node.JavaScript
__________
**2009**: Ryan Dahl demonstrates Node.js at js conference\
**2010**: Joyent sponsors Node.js npm package manager released\
**2011**: Microsoft collaborates on Windows support\
**2014**: Frustration with Joyent's governance caused a fork of Node to emerge (a project called io.js)\
**2015**: io.js and Node.js are merged Node Foundation created

###What is the Release Cadence Today?
__________
* New major versions released every 6 months
* Even-numbered major releases covered by long-term support (LTS)
* No more than two active LTS releases at time

##Streams
__________
* Readable Streams  
* Read / Write Streams (Duplex, Transform)
* Writable Streams

#####Readable Streams:
* **Events**: readable, data, end,error
* **Methods**: read, pause, resume, destroy
* **Properties**: readable, readableLength\
See More at: https://nodejs.org/api/stream.html#readable-streams

#####Writable Streams:
* **Events**: drain, close, finish, error
* **Methods**: write, destroy, end
* **Properties**: writable, writableLength\
See More at: https://nodejs.org/api/stream.html#writable-streams

####Streams in the Node.js API
* fs.ReadStream
* fs.WriteStream
* http.ClientRequest
* http.IncomingMessage
* http.ServerResponse
* zlib.createGzip()

####Example Streams Use Case
```nodejs2html
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    res.setHeader('Content-Encoding','gzip')
    fs.createReadStream(path.join(__dirname, 'lorem.txt'))
        .pipe(zlib.createGzip())
        .pipe(res)
})
```

##Testing Node.js Applications
__________
* **Mocha** (Test Framework): https://mochajs.org
* **Chai** (Assertion Library): https://chaijs.com
* **Sinon** (Spies, Stubs and Mocks): https://sinonjs.org







