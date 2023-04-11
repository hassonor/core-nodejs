## Maps and Sets - JavaScript

### Map vs. Object

---

#### How They are the Same

- Both contain key-value pairs
- Both allow you to set, get, delete, and check for key-value pairs

#### Key Differences

- Map does not contain default keys; they must be set
- Map keys can be anything
- Map size property
- Map does not allow for duplicate keys

### Map

---

#### Map(): Get Method (`mapObject.get(someKeyValue)`)

If the **key** exists, the associated **value** is returned. If the **key** does not exist, **undefined** is returned.  
Example: `mapObject.get(someKeyValue) -> return valueOfKey / undefined`

#### Map(): Has Method (`mapObject.has(someKeyValue)`)

Returns true or false based on whether the value of the provided key exists.  
Value associated with key? **True**. No value associated with key? **False**  
Example: `mapObject.has(someKeyValue) -> return True/False`

#### Map(): Determine map size (`mapObject.size`)

- Map properties do not have parentheses
- Return the number of key-values pairs  
  Example: `mapObject.size`

#### Map(): Delete Method (`mapObject.delete(key)`)

- Removes a key-value pair from an existing Map Object
- Returns true if the key-value pairs were successfully deleted
- Returns false if the key did not exist in the Map()

#### Map(): Clear Method (`mapObject.clear()`)

- Removes all elements from a Map object
- Returns undefined

---

### Iterator

- An object which defines a sequence and potentially returns a value upon its termination

#### Map(): Keys Method (`mapObject.keys()`)

- Returns an Iterator object with the keys in their insertion order  
  Example: `const keys = mapObject.keys(); const firstKey = keys.next().value;`

#### Map(): Values Method (`mapObject.values()`)

- Returns an Iterator object with the values in their insertion order.  
  Example: `const values = mapObject.values(); const firstValue = values.next().value;`

#### Map(): Entries Method (`mapObject.entries()`)

- Returns an Iterator object that contains the key-value pairs for each element  
  Example: `const entries = mapObject.entries(); const firstEntries = entries.next().value;`

#### Map(): ForEach Method (`mapObject.forEach(value, key, map, thisArg)`)

- Execute a provided callback function for each key-value pair in the Map object  
  Example: `mapObject.forEach((value, key) => { console.log(`Hello Or Hasson ${key} for ${value}`)})`

### WeakMap

---

- WeakMap's keys must be objects
- WeakMap does not have all methods and properties as Map, including the ability to iterate over the object or get its
  size.
- WeakMap() Methods:
    - `set`
    - `get`
    - `has`
    - `delete`

#### WeakMap(): Set Method (`weakMapObject.set(key, value)`)

#### WeakMap(): Get Method (`weakMapObject.get(key)`)

#### WeakMap(): Has Method (`weakMapObject.has(key)`)

#### WeakMap(): Delete Method (`weakMapObject.delete(key)`)

### Set

____

* Object type introduced with ES2015
* Collection of unique values
* What Makes Set Unique?
    * No duplicate values --- all values are unique!
    * Set values can be anything
    * Several methods: add, has, clear, delete, entries, forEach, values
    * Size property

#### Set(): Add Method (`setObject.add('someUniqueEmailForSe')`)

#### Set(): Has Method (`setObject.has('someUniqueEmailForSe')`)

* Returns true of false depending on whether a value is contained in a Set object
* Set has the value? **True**. No value in the Set? **False**

#### Set(): Size Property (`setObject.size`)

* Returns a number representing the number of elements in a Set

#### Set(): Delete Method (`setObject.delete('someUniqueEmailForSe')`)

#### Set(): Clear Method (`setObject.clear()`)

* Removes all elements from a Set object

### Iterator

* An object which defines a sequence and potentially return a value upon its termination

#### Set(): Values Method (`setObject.values()`)

* Return an Iterator object with the values in their insertion order
* e.g: `const values = setObject.values(); const firstValue = values.next().value;`

#### Set(): Entries Method (`setObject.entries()`)

* Return an Iterator object that contains an array [value, value] in insertion order
* e.g: `const objectEntries = setObject.entries(); const firstEntry = objectEntries.next().value;`

#### Set(): ForEach Method (`setObject.forEach(value1,value2,set,thisArg)`)

* Executes a provided callback function for each value in the Set object
* e.g: `setObject.forEach((value)=> if (value.startsWith('q'){console.log(value)});`

### WeakSet

___

#### WeakSet vs Set

* How there are the same
    * Both store unique values
    * Both allow you to add delete, and check values
* Key Differences
    * WeakSet's values must be objects
    * WeakSet does not have all the same methods and property as Set, including the ability to iterate over the
      object or get its size.
#### WeakSet() Methods: 
* add
* has
* delete

#### WeakSet(): Add Method (`weakSetObject.add(objectValue)`)
#### WeakSet(): Has Method (`weakSetObject.has(objectValue)`)
#### WeakSet(): Delete Method (`weakSetObject.delete(objectValue)`)