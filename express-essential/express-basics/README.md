## Express Basic and Routing Fundamentals

___

#### Route

How an application responds to a client<br>
request to a particular endpoint, which <br>
is a path and an HTTP request method.

#### Routes: Parameters

Segments of a URL that are used to <br>
capture values specified at positions <br>
within the URL

#### HTTP Methods

Action taken on a specific resource,<br>
ofter corresponding to create, read, <br>
update, and delete (CRUD) operations. <br>

* __GET__: Retrieves data from the server. Example: Get all items currently on your grocery list.
* __POST__: Sends data to the server and created a new resource. Example: Add a new item to your grocery list.
* __PUT__: Updated an existing resource. Example: Change the quantity of an existing item on your grocery list.
* __DELETE__: Deletes an existing resource. Example: Remove an item from your grocery list.

#### HTTP Messages

* Requests: sent by the client to trigger an action on the server
* Responses: Answers from the server

### Response Methods

___
The methods on the response object <br>
that are responsible for transmitting<br>
information to the client

#### Response Methods

* __.json():__ Sends a JSON response.
* __.send():__ Sends the HTTP response.
* __.download():__ Transfers the file as an attachment
* __.redirect():__ Redirects the user to the specified path


