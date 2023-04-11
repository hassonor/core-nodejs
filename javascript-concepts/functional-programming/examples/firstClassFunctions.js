// Arrow Function in ES6

const sayHello2 = () => console.log('Or Hasson was here');

const getData = () => ({
  name: 'Or Hasson',
  job: 'Software Engineer',
});

const myArrowFunction = (arg1, arg2) => arg1 + arg2;

/// ////////////////////////////////////////////////////////////////////////

// Functions as data
const DEVELOPMENT = true;

const fetchDataReal = () => {
  // time-intensive operations here!
};

const fetchDataFake = () => ({
  name: 'Someone',
  age: 33,
});

const fetchData = DEVELOPMENT ? fetchDataFake : fetchDataReal;

/// ////////////////////////////////////////////////////////////////////////

// Passing functions as argument

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

const combine2and3 = (func) => func(2, 3);

console.log(combine2and3(add)); // -> 2 + 3
console.log(combine2and3((x, y) => x + y));
console.log(combine2and3(subtract)); // -> 2 - 3

console.log(combine2and3(Math.max)); // -> 3

/// ////////////////////////////////////////////////////////////////////////

// Returning functions

const createMultiplier = (y) => (x) => x * y;

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(3));

/// ////////////////////////////////////////////////////////////////////////

// Closure

const createPrinter = () => {
  const myFavoriteNumber = 42;

  return () => console.log(`My favorite number is ${myFavoriteNumber}`);
};

const printer = createPrinter();
printer();

/// ////////////////////////////////////////////////////////////////////////

// Implement private variable

const Person = ({ name, age, job }) => {
  let _name = name;
  let _age = age;
  let _job = job;

  return {
    getName: () => _name,
    getAge: () => _age,
    getJob: () => _job,
    // eslint-disable-next-line no-return-assign
    setName: (newName) => _name = newName,
    // eslint-disable-next-line no-return-assign
    setAge: (newAge) => _age = newAge,
    // eslint-disable-next-line no-return-assign
    setJob: (newJob) => _job = newJob,
  };
};

const me = Person({ name: 'Or Hasson', age: 25, job: 'Developer' });

console.log(me.getName());
console.log(me.getAge());
console.log(me.getJob());

me.setName('Name Update');
me.setAge(me.setAge(27));
me.setJob(me.setJob('Senior Developer'));

console.log(me.getName());
console.log(me.getAge());
console.log(me.getJob());

/// ////////////////////////////////////////////////////////////////////////

// Higher-order functions
const divide = (x, y) => x / y;

const secondArgumentIsntZero = (func) => (...args) => {
  if (args[1] === 0) {
    console.log('Error: dividing by zero');
    return null;
  }

  return func(...args);
};

const divideSafe = secondArgumentIsntZero(divide);

console.log(divideSafe(9, 0));
console.log(divideSafe(9, 3));

/// ////////////////////////////////////////////////////////////////////////
