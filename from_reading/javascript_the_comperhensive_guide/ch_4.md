## Objects

___

### Preventing Changes to Objects

___
In some cases, it may be useful to protect objects from changes that is,
to prevent new properties or methods from being added to an object.
JavaScript offers three different ways to do this:

* Preventing extensions to objects
* Sealing Objects
* Freezing Objects

#### Preventing Extensions to Objects

The first way to protect objects from changes is to use the `Object.preventExtensions` method.
As the name suggests, if you pass an object to this method, it will no longer be possible to extend the object.
In other words, no new properties and methods can be added.
<Br><br>
Values of existing properties and methods can be changed, though.<br><br>
The `Object.isExtensible()` method enables you to check whether an object is extensible or not.

```javascript
const developer = {
    firstName: 'Or',
    lastName: 'Hasson'
}

console.log(Object.isExtensible(developer)); // true

developer.age = 32; // define a new property
Object.preventExtensions(developer); // prevent extensions

console.log(Object.isExtensible(developer)); // false
developer.firstName = "Orr" // premitted: change existing property

console.log(developer.firstName); // "Orr"
console.log(Object.getOwnPropertyDescriptor(developer, 'firstName').enumerable) // true

Object.defineProperties(developer, 'firstName', { // permitted: change property attributes
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(developer, 'firstName').enumerable) // false
developer.weight = 80; // TypeError: Can't add property weight. object is not extensible.
```

#### Sealing Objects

The second way to prevent changes to an object is to use the `Object.seal()` method, which can be used to "seal"
objects.
Like object for which `Object.preventExtensions()` has been called,
sealed objects are not extensible, but in addition, their existing properties are not configurable either.

```javascript
const developer = {
    firstName: 'Or',
    lastName: 'Hasson'
}

console.log(Object.isExtensible(developer)); // true
console.log(Object.isSealed(developer)); // false

developer.age = 32; // define a new property
console.log(developer.age) // 32

Object.seal(developer); // seal object
console.log(Object.isExtensible(developer)) // false
console.log(Object.isSealed(developer)); // true

developer.firstName = 'Orr' // premitter: change exisiting property
console.log(developer.firstName) // "Orr"

console.log(Object.getOwnPropertyDescriptor(developer, 'firstName').enumerable); // true

Object.defineProperty(developer, 'firstName', {
    enumerable: false
}); // Uncaught TypeError: Cannot redefine property: firstName
```

`Sealed Objects Are Not Expandable`: Because sealed objects are also non-extensible,
the `Object.isExtensible(developer)` method returns false.

#### Freezing Objects

The `Object.freeze()` method goes one step further than the previously shown options.
It freezes objects: like `Object.preventExtensions()`,
it ensures that objects cannot be extended by new properties and methods, and like the `Object.seal()` method,
it ensures that property attributes cannot be changed,
but in addition, values of existing properties (and methods) cannot be changed.
The `Object.isFrozen()` method can be used to determine whether an object is frozen or not.

```javascript
const developer = {
    firstName: 'Or',
    lastName: 'Hasson'
}

console.log(Object.isExtensible(developer)); // true
console.log(Object.isSealed(developer)); // false
console.log(Object.isFrozen(developer)); // false

developer.age = 32; // new property
console.log(developer.age); // 32

Object.freeze(developer); // freeze object
console.log(Object.isExtensible(developer)); // false
console.log(Object.isSealed(developer)); // true
console.log(Object.isFrozen(developer)); // true

developer.firstName = 'Orr'; // TypeError: Cannot assign to read only peroperty 'firstName' of #<Object>

```

## Arrays

___
An overview of the most important methods of arrays:

* `concat()` - Appends elements or arrays to an existing array
* `filter()` - Filters elements from the array based on a filter criterion passed in the form of a function
* `forEach()` - Applies a passed function to each element in the array
* `join()` - Convert an array into a string
* `map()` - Maps the elements of an array to new elements based on a passed conversion function
* `pop()` - Removes the last element of an array
* `push()` - Inserts a new element at the end of the array
* `unshift()` - Inserts a new element at the beginning of the array
* `reduce()` - Combines the elements of an array into one value based on a passed function
* `reverse()` - Reverses the order of the elements in the array
* `shift()` - Removes the first element of an array
* `slice()` - Cuts individual elements from an array
* `splice()` - Adds new elements at any position in the array
* `sort()` - Sorts the array, optionally based on a passed comparison function

#### Some slice use examples:

```javascript
const sliced1 = arr.slice(-2) // the last two elements
const sliced2 = arr.slice(1, -1) // the second element from the beginning to the second element from the end
const sliced3 = arr.slice(1, -2) // the second element from the beginning to the third element from the end
const sliced4 = arr.slice(1, -3) // the second element from the beginning to the fourth element from the end
```

### Sorting Arrays

___
Sorting data an array is relatively simple.
Two methods are available for this purpose: `reverse()` and `sort()`.
The former simply reversed the order of the elements in the array;
the latter allows sorting the elements according to specific individual criteria.

```javascript
const someRandomArray = ['Or', 'Hasson', 'Was', 'Here']
someRandomArray.reverse();
console.log(someRandomArray); // Output: Here, Was, Hasson, Or
```

#### Sorting the Elements in an Array According to Specific Criteria

The `sort()` method provided more flexibility
because it enables you the optionally define your own sort criterion to influence the order.
The sort criterion is specified in the form of a comparison function,
which is passed as an argument to the `sort()` method.
The comparison function, in turn,
has two parameters and is internally invoked in pairs for values of the array when `sort()` is called.
The return value of the function determines which of two values is greater than the other:

* The return value `-1` means that the first value is smalled than the second value.
* The return value `1` means that the first value is greater than the second value.
* The return value `0` means that both values are equal.

```javascript
const compare = (value1, value2) => {
    if (value1 < value2) {
        return -1; // The first value is smaller than the second value.
    } else if (value1 > value2) {
        return 1; // The first value is greater than the second value.
    } else {
        return 0; // Both values are of equal size.
    }
}

const values = [9, 6, 4, 8, 7, 2, 4];
values.sort(compare);
console.log(values); // 2,4,4,6,7,9
```

#### Sorting Objects in Arrays

A slightly more complex example of using the `sort()` method is will show next.

```javascript
const contacts = [
    {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@javascripthandbuch.de'
    },
    {
        firstName: 'James',
        lastName: 'Dean',
        email: 'superjames@javascripthandbuch.de'
    },
    {
        firstName: 'Peter',
        lastName: 'Dickens',
        email: 'dickens@javascripthandbuch.de'
    }
];

function compareByFirstName(contact1, contact2) {
    return contact1.firstName.localeCompare(contact2.firstName);
}

function compareByLastName(contact1, contact2) {
    return contact1.lastName.localeCompare(contact2.lastName);
}

function compareByEmail(contact1, contact2) {
    return contact1.email.localeCompare(contact2.email);
}

contacts.sort(compareByFirstName); // sort by first name
console.log(contacts[0].firstName); // James
console.log(contacts[1].firstName); // John
console.log(contacts[2].firstName); // Peter
contacts.sort(compareByLastName); // sort by last name
console.log(contacts[0].firstName); // James
console.log(contacts[1].firstName); // Peter
console.log(contacts[2].firstName); // John
contacts.sort(compareByEmail); // sort by email address
console.log(contacts[0].firstName); // Peter
console.log(contacts[1].firstName); // John
console.log(contacts[2].firstName); // James
```

#### Converting Arrays to Strings

To convert arrays into a string, you have several options.
On the one hand, you can use the `toString()`, `toLocaleString()`, and `valueOf()` methods.
On the other hand, arrays offer the `join()` method,
which can be used to join the individual elements of an array into a string.
In this case, it's possible to specify a string as a parameter that is to be used as a separator.

```javascript
const names = ['Or', 'Hasson', 'Peter'];
const nameString = names.toString();
console.log(nameString); // Output: Or,Hasson,Peter

const namesLocaleString = names.toLocaleString();
console.log(namesLocaleString); // Output: Or,Hasson,Peter

const namesValue = names.valueOf();
console.log(namesValue); // Output: ["Or","Hasson","Peter"]

const namesJoined = names.join('-');
console.log(namesJoined); // Output: Or-Hasson-Peter
```
