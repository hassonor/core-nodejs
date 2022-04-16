### The HTTP Module

___

* Node comes with a built-in HTTP module
* Provides a flexible, robust API
* Allows us to:
    * Create a server
    * Work with streamed data
    * Make API calls
* No external dependencies

### Working with the Request Body

___

#### Request Object Properties

* request.url
* request.method
* request.headers

#### Recap

* Our request headers, URL, and method are available to us immediately
* We need to fully receive a request body
* Buffers are like small packages of information
* The "request" object makes use of two interfaces
    * _ReadableStream_
    * _EventEmitter_

### Managing HTTP Responses

___

#### Creating a Response

* Set status code
* Set headers
* Write data
* Close connection

#### The Benefits of Streamed Data

* We can operate on our data one piece at a time
* Memory Efficiency
* Time Efficiency

#### The "Error" Class

* `error.code`
* `error.message`
* `error.stack`

### Handling File Uploads with Formidable

#### Benefits

* Fast (~500mb/sec)
* Automatically write to disk
* Low memory footprint
* Graceful error handling
* Very high test coverage

### The "axios" Package

* Well-maintained
* Works Client and Server-side
* Streaming
* Promise Based API
* Automatic Transformation of Data into JSON


