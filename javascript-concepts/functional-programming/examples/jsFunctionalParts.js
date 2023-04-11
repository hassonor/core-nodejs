// The spread operator

const person = {
  name: 'John Doe',
  age: 33,
  hairColor: 'Brown',
  eyeColor: 'Blue',
};

const careerData = {
  title: 'Developer',
  company: 'Alfa Software',
};

const personWithCareerData = {
  ...person, ...careerData,
};

const numbers = [1, 2, 3, 4, 5];
const newNumbers = [0, ...numbers, 6];

/// ////////////////////////////////////////////////////////////////////////

// Mapping

const numbers2 = [1, 2, 3, 4, 5];

const double = (x) => x * 2;
const doubleNumbers = numbers2.map(double);

console.log(doubleNumbers);

/// ////////////////////////////////////////////////////////////////////////

// Filtering

const numbers3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

const isEven = (x) => x % 2 === 0;

const evenNumbers = numbers3.filter(isEven);

console.log(evenNumbers);

const words = ['Hapoel', 'Maccabi', 'Tel-Aviv'];

const createLengthTest = (minLength) => (word) => word.length > minLength;

const longWords = words.filter(createLengthTest(7));

console.log(longWords);

/// ////////////////////////////////////////////////////////////////////////

// Every and Some

const employees = [{
  name: 'John Doe',
  salary: 40000,
}, {
  name: 'John Doe 2',
  salary: 50000,
},
{
  name: 'John Doe 3',
  salary: 60000,
}];

const makesMoreThan50000 = (employee) => employee.salary > 50000;

const result = employees.some(makesMoreThan50000);

console.log(result);

const forValues = [
  'Or',
  'Hasson',
  'Maine',
  '',
];

const isNotEmpty = (string) => !!string;

const allFieldsFilled = forValues.every(isNotEmpty);

console.log(allFieldsFilled);

/// ////////////////////////////////////////////////////////////////////////

// Slicing

const numbers4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(numbers4.slice().reverse()); // copy the array and reverse
console.log(numbers4);

/// ////////////////////////////////////////////////////////////////////////

// Sorting

const mixedUpNumbers = [13, 2, 3, 4, 45, 6, 7, 8, 9, 1];

const ascending = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const descending = (a, b) => {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
};

const sortedNumberAsc = mixedUpNumbers.slice().sort(ascending);
console.log(sortedNumberAsc);

const sortedNumberDesc = mixedUpNumbers.slice().sort(descending);
console.log(sortedNumberDesc);

/// ////////////////////////////////////////////////////////////////////////

// Reducing

const numbers5 = [13, 2, 3, 4, 45, 6, 7, 8, 9, 1];

const sum = numbers5.reduce((acc, x) => acc + x, 0);

console.log(sum);

const product = numbers5.reduce((acc, x) => acc * x, 1);

console.log(product);

/// ////////////////////////////////////////////////////////////////////////

// Combining functions

const employees2 = [{
  name: 'John Doe',
  age: 40,
  jobTitle: 'Developer',
  salary: 40000,
}, {
  name: 'John Doe 2',
  age: 31,
  jobTitle: 'Automation Engineer',
  salary: 25000,
},
{
  name: 'John Doe 3',
  age: 21,
  jobTitle: 'Developer',
  salary: 60000,
}];

const developers = employees2.filter((employee) => employee.jobTitle === 'Developer');

const developersSalaries = developers.map((developer) => developer.salary);

const totalDeveloperSalaries = developersSalaries.reduce((acc, x) => acc + x, 0);

const averageDeveloperSalary = totalDeveloperSalaries / developersSalaries.length;

console.log("Avg. Developers' Salaries: ", averageDeveloperSalary);

const nonDevelopers = employees2.filter((employees) => employees.jobTitle !== 'Developer');

const nonDevelopersSalaries = nonDevelopers.map((developer) => developer.salary);

const totalNonDeveloperSalaries = nonDevelopersSalaries.reduce((acc, x) => acc + x, 0);

const averageNonDeveloperSalary = totalNonDeveloperSalaries / nonDevelopersSalaries.length;

console.log("Avg. Non Developers' Salaries: ", averageNonDeveloperSalary);

const map = (arr, func) => arr.map(func);

// Another solution
const map2 = (arr, func) => arr.reduce((acc, x) => [
  ...acc,
  func(x),
], []);

// testing if it works:

// Should be [2,4,6]
console.log(map([1, 2, 3], (x) => x * 2));

// Should be [-5,-6,-7,-8,-9,-10]
console.log(map([5, 6, 7, 8, 9, 10], (x) => -x));

// Should be ['A','B','C','D']
console.log(map(['a', 'b', 'c', 'd'], (x) => x.toUpperCase()));
