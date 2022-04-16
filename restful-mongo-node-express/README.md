#### The _Uniform_ Interface

Resources(n):

* GET
* POST
* PUT / PATCH
* DELETE

Hypermedia as the Engine of Application State <br><br>
__(HATEOAS)__

#### Top Five Security Threats

___

1. Injection attacks
2. Broken authentication
3. Sensitive data exposure
4. XML entities
5. Broken access control <br>
   See more at: [OWASP Foundation link](https://www.owasp.org)

__________________________________

#### Set up MongoDB with Docker

1. `docker pull mongo`
2. `docker run --name mongodb -p 37017:27017 -d mongo`
3. Verify with `docker ps`
