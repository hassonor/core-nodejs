"use strict";
(function() {

  let person1 = {
    firstName: "Or",
    lastName: "Hasson",
    age: 33,
    isAdult() {
      return this.age >= 18;
    }
  };

  let healthStats = {
    height: 68,
    weight: 120
  };

  //Object.assign() example with no side effects using the first el "{}"
  function mergeHealthStates(person, healthStats) {
    return Object.assign({}, person, healthStats);
  }

  let mergedPerson = mergeHealthStates(person1, healthStats);
  display(mergedPerson);

  function Person(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  let person = new Person("Or", "Hasson", 33);
  display(person);


  // Object.create() demo
  let person_object = Object.create(
    Object.prototype,
    {
      firstName: { value: "Or", enumerable: true, writable: true, configurable: true },
      lastName: { value: "Hasson", enumerable: true, writable: true, configurable: true },
      age: { value: 33, enumerable: true, writable: true, configurable: true }
    }
  );

  display(person_object);
})();