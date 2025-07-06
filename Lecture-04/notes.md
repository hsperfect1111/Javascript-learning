📒 Short Notes – Arrays in JavaScript
✅ Introduction
Array: A data structure used to store multiple values in a single variable.

Arrays in JavaScript are mutable, indexed, and can hold elements of different data types.

js
Copy
Edit
let fruits = ["apple", "banana", "mango"];
✅ Creating Arrays
js
Copy
Edit
let arr = [1, 2, 3];               // Using literal syntax (preferred)
let arr2 = new Array(4, 5, 6);     // Using constructor (not recommended)
✅ Accessing Array Elements
Index starts from 0.

js
Copy
Edit
console.log(arr[0]); // 1
✅ Modifying Array Elements
js
Copy
Edit
arr[1] = 100;
console.log(arr); // [1, 100, 3]
✅ Array Length
js
Copy
Edit
console.log(arr.length); // 3
✅ Important Array Methods
Method	Description	Example
push()	Add at end	arr.push(4) → [1, 2, 3, 4]
pop()	Remove from end	arr.pop() → [1, 2, 3]
unshift()	Add at start	arr.unshift(0) → [0, 1, 2, 3]
shift()	Remove from start	arr.shift() → [1, 2, 3]
includes()	Check if value exists	arr.includes(2) → true
indexOf()	Get index of value	arr.indexOf(2) → 1
slice(start, end)	Returns subarray (non-destructive)	arr.slice(1, 3) → [2, 3]
splice(start, deleteCount, items...)	Add/remove items	arr.splice(1, 1, 9) → modifies array
join()	Convert to string with separator	arr.join("-") → "1-2-3"
reverse()	Reverse array	arr.reverse() → [3, 2, 1]

✅ Looping Through Arrays
js
Copy
Edit
// For loop
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// For...of loop
for (let element of arr) {
  console.log(element);
}
✅ Array of Mixed Types
js
Copy
Edit
let mix = [1, "hello", true, null];
❓ Conceptual Q&A
Q1. What is an array in JavaScript?
A: An array is a data structure that holds a collection of items in a single variable, accessible by index.

Q2. How are array indexes defined in JavaScript?
A: Indexing starts from 0, i.e., the first element is at index 0.

Q3. Difference between push() and unshift()?
A: push() adds element at the end; unshift() adds at the beginning.

Q4. What does splice() do?
A: It changes the original array by adding/removing/replacing elements at specified indexes.

Q5. Is JavaScript array size fixed?
A: No, arrays in JS are dynamic; they can grow or shrink in size.

Q6. Can arrays hold different data types in JavaScript?
A: Yes, JS arrays can store multiple data types together (string, number, boolean, etc.).

Q7. What is the difference between slice() and splice()?
A: slice() returns a new array without modifying the original; splice() modifies the original array.

Q8. How to check if an element exists in an array?
A: Using includes() or indexOf().

Q9. What will arr.length = 0 do?
A: It will empty the array completely.

Q10. What is the output?

js
Copy
Edit
let arr = [1, 2, 3];
arr.splice(1, 1, 99);
console.log(arr);
A: [1, 99, 3] (replaces 2 with 99)
