'use strict';
(function () {

    // demo-1
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    display(Person.prototype);
    let orh = new Person("Or", "Hasson");
    display(orh.__proto__);

    display(Person.prototype === orh.__proto__); // true


    // demo-2
    Person.prototype.age = 34;
    let orh2 = new Person('Or2', 'Hasson2');
    orh2.__proto__.age = 32;

    display(orh.__proto__);
    display(orh2.__proto__);

    display(orh.hasOwnProperty('age')) // false


    // demo-3
    function Person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        Object.defineProperty(this, 'fullName', {
            get: function () {
                return this.firstName + ' ' + this.lastName
            },
            enumerable: true
        });
    }

    function Student(firstName, lastName, age) {
        Person.call(this, firstName, lastName, age);
        this._enrollerdCourses = [];
        this.enroll = function (courseId) {
            this._enrollerdCourses.push(courseId);
        };

        this.getCourses = function () {
            return this.fullName + "'s enrolled courses are: " +
                this._enrollerdCourses.join(',');
        }
    }

    // Most Important 2 lines here
    Student.prototype = Object.create(Person.prototype);
    Student.prototype.constructor = Student;


    let or_student = new Student('Or', 'Hasson', 32);

    or_student.enroll('CS');
    or_student.enroll('Mathematica');
    display(or_student.getCourses());
    display(or_student);
    display(or_student.__proto__); // Student
    display(or_student.__proto__.__proto__); // Person

})