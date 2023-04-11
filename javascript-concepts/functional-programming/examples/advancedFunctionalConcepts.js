import words from 'an-array-of-english-words';
// Partial Application

const add = (x, y, z) => x + y + z;

const addPartial = (x) => (y) => (z) => add(x, y, z);

const sum = addPartial(5)(6)(7);

console.log(sum);

// Recursion

const countUp = (x, max) => {
  if (x > max) return;
  console.log(x);
  countUp(x + 1, max);
};
countUp(0, 10);

// Functions as objects
const addDemo = (x, y, z) => x + y + z;
console.log(addDemo.length);
console.log(addDemo.toString());

const args = [1, 2, 3];
console.log(addDemo(...args));

// Challenge 1 - Convert Array

const arrayToConvert = ['Or', 'Dor', 'Gil', 'Dana', 'Shira', 'Or', 'Shira'];

const tallyVotes = (votes) => votes.reduce((acc, name) => ({
  ...acc,
  [name]: acc[name] ? acc[name] + 1 : 1,
}), {});

console.log(tallyVotes(arrayToConvert));

// Challenge 2 - Anagrams

const countOccurrences = (wordArray) => wordArray.reduce((acc, letter) => ({
  ...acc,
  [letter]: acc[letter] ? acc[letter] + 1 : 1,
}), {});

const hasSameLetterCount = (word1, word2) => {
  const word1Count = countOccurrences(word1.split(''));
  const word2Count = countOccurrences(word2.split(''));
  return Object.keys(word1Count).length === Object.keys(word2Count).length
      && Object.keys(word1Count).every((letter) => word1Count[letter] === word2Count[letter]);
};

const findAnagrams = (word, allWords) => allWords
  .filter((entry) => hasSameLetterCount(word, entry))
  .filter((anagram) => anagram !== word);

// console.log(findAnagrams('cinema', words));

// Challenge 3 - Error Messages

const currentInputValues = {
  firstName: 'Shaun', // Must be at least 2 characters
  lastName: '', // Must be at least than 2 characters
  zipCode: '12345', // Must be exactly 5 characters
  state: '', // Must be exactly 2 characters
};

const inputCriteria = {
  firstName: [
    (value) => (value.length >= 2
      ? ''
      : 'First name must be at least 2 characters'),
  ],
  lastName: [
    (value) => (value.length >= 2
      ? ''
      : 'Last name must be at least 2 characters'),
  ],
  zipCode: [
    (value) => (value.length === 5
      ? ''
      : 'Zip must be exactly 5 characters long'),
  ],
  state: [
    (value) => (value.length === 2
      ? ''
      : 'State must be exactly 2 characters long'),
  ],
};

const getErrorMessages = (inputs, criteria) => Object.keys(inputs).reduce((acc, fieldName) => [
  ...acc,
  ...criteria[fieldName].map((test) => test(inputs[fieldName])),
], []).filter((message) => message);

console.log(getErrorMessages(currentInputValues, inputCriteria));

/*
    Expected Output: [
        'First name must be at least 2 characters',
        'Last name must be at least 2 characters',
        'Zip code must be exactly 5 characters',
        'State must be exactly 2 characters',
    ]
*/
