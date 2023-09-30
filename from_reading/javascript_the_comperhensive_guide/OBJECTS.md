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
<br><br>
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