### Summary Of Chapter 4: Resource Scope And Hierarchy

* Resource layout refers to the arrangement and relationship between resources in an API.
* While it might be tempting to connect every resource in an API, fight the urge and only store relationships if they
  provide important functionality to the API.
* Sometimes it makes sense to store a separate resource for concept. Other times it's better to in line that data and
  leave the concept as a data type. The decision depends on whether you need to atomically interact with that concept.
* Avoid overly deep hierarchical relationships as they can be difficult to comprehend and manage.