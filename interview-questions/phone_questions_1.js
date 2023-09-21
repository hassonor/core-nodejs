// JavaScript file with explanations and examples for Object.assign(), slice(), and splice()

// ==========================
// 1. Object.assign() Example
// ==========================

// Initialize target and source objects
const target = {a: 1, b: 2};
const source1 = {b: 4, c: 5};
const source2 = {d: 6};

// Use Object.assign to copy properties from source1 and source2 to target
// This will overwrite properties in the target object if they have the same name as those in the source objects.
const returnedTarget = Object.assign(target, source1, source2);

// Log the modified target and returned target
// Both will be the same since Object.assign modifies the target object and also returns it.
console.log("Modified target object:", target);  // Output: { a: 1, b: 4, c: 5, d: 6 }
console.log("Returned target object:", returnedTarget);  // Output: { a: 1, b: 4, c: 5, d: 6 }

// ================
// 2. slice() Example
// ================

// Initialize an array
const originalArray1 = [1, 2, 3, 4, 5];

// Use slice to take elements from index 1 to index 4 (non-inclusive) from the original array
// This will not modify the original array.
const newArray = originalArray1.slice(1, 4);

// Log the new and original arrays
console.log("New array:", newArray);  // Output: [2, 3, 4]
console.log("Original array after slice:", originalArray1);  // Output: [1, 2, 3, 4, 5]

// ==================
// 3. splice() Example
// ==================

// Initialize another array
const originalArray2 = [1, 2, 3, 4, 5];

// Use splice to remove elements from index 1 and replace them with 'a' and 'b'
// This will modify the original array.
const removedItems = originalArray2.splice(1, 2, 'a', 'b');

// Log the removed items and the modified original array
console.log("Removed items:", removedItems);  // Output: [2, 3]
console.log("Original array after splice:", originalArray2);  // Output: [1, 'a', 'b', 4, 5]