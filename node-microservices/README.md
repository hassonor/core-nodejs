#### Basic Principles of Microservices

* One microservice should only do one task, like fetching a customer from a back end
* It should be possible to develop and deploy a microservice completely independent from
  all other parts of an application
* Microservices should communicate using standard HTTP methods

#### Benefits of Using Microservices

* New developers don't have to understand the whole application
* Services can be developed and deployed by independent teams
* Services can be developed with the language that does a given task best
* If a service fails, the whole application does not have to fail+

#### Drawbacks of Using Microservices

* Possible code redundancies
* Harder to roll out new versions
* Harder to test
* Complexity is moved to the network layer