"use strict";
(function() {

  // let person1 = {
  //   firstName: "Or",
  //   lastName: "Hasson",
  //   age: 33
  // };
  //
  // let healthStats = {
  //   height: 68,
  //   weight: 120
  // };
  //
  // //Object.assign() example with no side effects using the first el "{}"
  // function mergeHealthStates(person, healthStats) {
  //   return Object.assign({}, person, healthStats);
  // }
  //
  // let mergedPerson = mergeHealthStates(person1, healthStats);
  // display(mergedPerson);
  //
  //
  // function Person(firstName, lastName, age) {
  //   this.firstName = firstName;
  //   this.lastName = lastName;
  //   this.age = age;
  // }
  //
  // let person = new Person("Or", "Hasson", 33);
  // display(person);
  // display(person["firstName"]);
  //
  //
  // for (let propertyName in person) {
  //   display(propertyName + ": " + person[propertyName]);
  // }
  //
  //
  // // Object.create() demo
  // let person_object = Object.create(
  //   Object.prototype,
  //   {
  //     firstName: { value: "Or", enumerable: true, writable: true, configurable: true },
  //     lastName: { value: "Hasson", enumerable: true, writable: true, configurable: true },
  //     age: { value: 33, enumerable: true, writable: true, configurable: true }
  //   }
  // );
  //
  // display(person_object);
  //
  //
  // let person2 = {
  //   name: {
  //     firstName: "Or",
  //     lastName: "Hasson"
  //   },
  //   age: 33
  // };


  // display(Object.getOwnPropertyDescriptor(person2, "firstName")); //
  //
  // Object.defineProperty(person2, "name", { writable: false });


  // person2.name.firstName = "Orr";

  // Use freeze
  // Object.freeze(person2.name);
  // person2.name.firstName = "Orr2";
  // display(person2);


  // let person3 = {
  //   firstName: "Or3",
  //   lastName: "Hasson3",
  //   age: 33
  // };
  //
  // Object.defineProperty(person3, "firstName", { enumerable: false });
  //
  // for (let propertyName in person3) {
  //   display(propertyName + ": " + person3[propertyName]);
  // }
  //
  // display(Object.keys(person3));
  //
  // display(JSON.stringify(person3));


  let person4 = {
    firstName: "Or4",
    lastName: "Hasson4",
    age: 33
  };

  Object.defineProperty(person4, "firstName", { configurable: false });

  //Object.defineProperty(person4, "firstName", { enumerable: false }); // error
  //Object.defineProperty(person4, "firstName", { configurable: true }); // error
  //Object.defineProperty(person4, "firstName", { writable: true }); // no error :)

  // delete person4.firstName; // error
  display(person4);

  let person5 = {
    name: {
      firstName: "Or5",
      lastName: "Hasson5"
    },
    age: 33
  };

  Object.defineProperty(person5, "fullName",
    {
      get: function() {
        return this.name.firstName + " " + this.name.lastName;
      },
      set: function(value) {
        const nameParts = value.split(" ");
        this.name.firstName = nameParts[0];
        this.name.lastName = nameParts[1];
      }
    });

  person5.fullName = "Fred Jones";

  display(person5.fullName);
  display(person5.name.firstName);
  display(person5.name.lastName);


})();