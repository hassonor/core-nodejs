## JavaScript Objects, Prototypes and Classes

___

#### Creating and Using JavaScript Objects:

* Object Literals
* Constructor Functions
* Classes

#### JavaScript Equality Operators

* `==` -> Should be avoided. Useful only in rare cases.
* `===` -> Most common. Should be used in almost all cases.
* `Object.is()` -> Less common. Like === except for a few mathematical differences.

1) Equality Operator: `==`
    1) Not type-safe:
        * "32" == 42 -> `true`
        * 0 == false -> `true`
        * null == undefined -> `true`
        * "" == 0 -> `true`
        * [1,2] == "1,2" -> `true`
2) Equality Operator: `===`
    1) Type-safe
    2) Convenient / Concise
    3) NaN not equal to NaN
    4) +0 equals -0
3) `Object.is()`
    1) Type-safe
    2) Verbose
    3) NaN equals NaN
    4) +0 does not equal -0

### Prototype and interfaces

___

* __A Function's Prototype__ is the object __instance__ that will become the prototype for all objects created
  using this function as a constructor
* __An Object's Prototype__ is the object __instance__ from which the object is inherited

### Built in JavaScript Objects

___

* Math
* Date
* Regex

#### Regex

___

```text
let regex = new Regex(expression, flags);
let regex = /expression/flags;

let result = regex.text(stringToSearch);

let result = regex.exec(stringToSearch);
while(result !== null){
    result = regex.exec(stringToSearch);
}
```
