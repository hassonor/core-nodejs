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




