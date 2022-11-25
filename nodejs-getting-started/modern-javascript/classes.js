class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hello ${this.name}!`)
    }
}

class Student extends Person {
    constructor(name, level) {
        super(name);
        this.level = level;
    }

    greet() {
        console.log(`Hello ${this.name} from ${this.level}`)
    }
}

const obj_1 = new Person("Or")
const obj_2 = new Student("Dor", "1st Grade")
const obj_3 = new Student("Gil", "2nd Grade")

obj_3.greet = () => console.log("I am special!")

obj_1.greet();
obj_2.greet();
obj_3.greet();