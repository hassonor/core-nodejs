# Express Basics and Routing Fundamentals

---

## Table of Contents

1. [Route](#route)
2. [Route Parameters](#route-parameters)
3. [HTTP Methods](#http-methods)
4. [HTTP Messages](#http-messages)
5. [Response Methods](#response-methods)
6. [Middlewares](#middlewares)
7. [Security Concerns and Best Practices](#security-concerns-and-best-practices)

---

## Route

A route defines how an application responds to a client request to a particular endpoint, which consists of a path and an HTTP request method.

[Back to top](#table-of-contents)

---

## Route Parameters

Route parameters are segments of a URL used to capture values specified at specific positions within the URL.

[Back to top](#table-of-contents)

---

## HTTP Methods

HTTP methods represent actions taken on a specific resource, often corresponding to create, read, update, and delete (CRUD) operations.

- **GET**: Retrieves data from the server. Example: Get all items currently on your grocery list.
- **POST**: Sends data to the server and creates a new resource. Example: Add a new item to your grocery list.
- **PUT**: Updates an existing resource. Example: Change the quantity of an existing item on your grocery list.
- **DELETE**: Deletes an existing resource. Example: Remove an item from your grocery list.

[Back to top](#table-of-contents)

---

## HTTP Messages

- **Requests**: Sent by the client to trigger an action on the server
- **Responses**: Answers from the server

[Back to top](#table-of-contents)

---

## Response Methods

The methods on the response object are responsible for transmitting information to the client.

- **.json()**: Sends a JSON response.
- **.send()**: Sends the HTTP response.
- **.download()**: Transfers the file as an attachment
- **.redirect()**: Redirects the user to the specified path

[Back to top](#table-of-contents)

---

## Middlewares

### Built-In Middleware Functions

- **express.static**: Serves static assets
- **express.json**: Parses incoming requests with JSON payloads
- **express.urlencoded**: Parses incoming requests with URL-encoded payloads

[Back to top](#table-of-contents)

---

## Security Concerns and Best Practices

- Make sure you are using the most up-to-date version of Express
- Use Transport Layer Security (TLS)
- Use [Helmet](https://helmetjs.github.io/)
- Use cookies securely
- Prevent brute-force attacks against authorization
- Ensure your dependencies are secure

[Back to top](#table-of-contents)

