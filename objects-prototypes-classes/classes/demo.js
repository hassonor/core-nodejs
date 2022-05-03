'use strict';

(function () {
    class Person {
        constructor(firstName, lastName) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = 0;
        }

        get fullName() {
            return this.firstName + ' ' + this.lastName;
        }

        set fullName(fullName) {
            let nameParts = fullName.split(' ');
            this.firstName = nameParts[0];
            this.lastName = nameParts[1];
        }

        isAdult() {
            return this.age >= 18;
        }
    }

    class Student extends Person {
        constructor(firstName, lastName, age) {
            super(firstName, lastName, age);
            this._enrolledCourses = [];
        }

        static fromPerson(person) {
            return new Student(person.firstName, person.lastName, person.age);
        }

        enroll(courseId) {
            this._enrolledCourses.push(courseId);
        }

        getCourses() {
            return this.fullName + "'s enrolled courses are: " + this._enrolledCourses.join(', ');
        }
    }

    Object.defineProperty(Person.prototype, 'fullName', {enumerable: true});

    let orh = new Student('Or', 'Hasson', 34);

    display(orh);
    display(orh.fullName);

    orh.fullName = 'Orr Hasson';
    display(orh.fullName);

    orh.enroll('CS101');
    display(orh.getCourses());

    let orStudent = Student.fromPerson(orh);
    display(orStudent);
}());