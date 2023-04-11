# Node.js HTTP Module and Networking

## Table of Contents
1. [The HTTP Module](#the-http-module)
2. [Working with the Request Body](#working-with-the-request-body)
3. [Managing HTTP Responses](#managing-http-responses)
4. [Handling File Uploads with Formidable](#handling-file-uploads-with-formidable)
5. [The "axios" Package](#the-axios-package)

## The HTTP Module
Node.js comes with a built-in HTTP module that provides a flexible, robust API. It allows you to:

- Create a server
- Work with streamed data
- Make API calls

This is done without any external dependencies.

## Working with the Request Body

### Request Object Properties

- `request.url`
- `request.method`
- `request.headers`

**Recap**:

- Request headers, URL, and method are available immediately.
- The request body needs to be fully received.
- Buffers are like small packages of information.
- The "request" object utilizes two interfaces:
  - _ReadableStream_
  - _EventEmitter_

## Managing HTTP Responses

### Creating a Response

- Set status code
- Set headers
- Write data
- Close connection

### The Benefits of Streamed Data

- Operate on data one piece at a time
- Memory efficiency
- Time efficiency

### The "Error" Class

- `error.code`
- `error.message`
- `error.stack`

## Handling File Uploads with Formidable

### Benefits

- Fast (~500mb/sec)
- Automatically writes to disk
- Low memory footprint
- Graceful error handling
- Very high test coverage

## The "axios" Package

- Well-maintained
- Works client and server-side
- Streaming
- Promise-based API
- Automatic transformation of data into JSON
