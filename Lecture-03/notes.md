🎯 Lecture 3: Loops and Strings | JavaScript Full Course
By: Shradha Khapra (Apna College)

📒 Short Notes (Clean Bullet Points)
🔁 Loops in JavaScript
Loops are used to execute a block of code multiple times.

Types of Loops:

for loop → runs for a specific number of times.

while loop → runs while a condition is true.

do...while loop → runs at least once, then checks the condition.

for...of → used to loop through iterable objects like arrays and strings.

for...in → used to loop through object properties.

🧵 Strings in JavaScript
A string is a sequence of characters wrapped in quotes ("..." or '...').

Strings are immutable (cannot be changed directly).

Common String Methods:

.length → returns string length

.toUpperCase() / .toLowerCase()

.slice(start, end) → extracts part of string

.indexOf(substring) → returns index of substring

.replace(old, new) → replaces part of string

.trim() → removes whitespace

❓ Conceptual Interview Questions
What are loops in JavaScript?
➤ Loops allow you to repeat a block of code multiple times.

Difference between for and while loop?
➤ for is used when iteration count is known; while is better when the condition depends on runtime.

What is the use of do...while loop?
➤ It guarantees the loop runs at least once even if the condition is false.

What does for...of loop do?
➤ It iterates over elements of an iterable like an array or string.

Is string mutable in JavaScript?
➤ No, strings are immutable; any change returns a new string.

What is .slice() in strings?
➤ It extracts a part of the string without changing the original.

How is .replace() used?
➤ It replaces part of a string with a new substring.

💻 Mini Code Snippets (with Comments)
✅ For Loop Example:
js
Copy
Edit
for (let i = 1; i <= 5; i++) {
  console.log("Hello " + i);
}
✅ While Loop Example:
js
Copy
Edit
let count = 1;
while (count <= 3) {
  console.log("Count is " + count);
  count++;
}
✅ Do While Loop Example:
js
Copy
Edit
let num = 5;
do {
  console.log("Running at least once");
  num--;
} while (num > 5);
✅ For...of with String:
js
Copy
Edit
let name = "Himanshu";
for (let char of name) {
  console.log(char);  // prints each character
}
✅ String Methods Example:
js
Copy
Edit
let msg = "  Hello JavaScript  ";
console.log(msg.length);             // 21
console.log(msg.trim());            // "Hello JavaScript"
console.log(msg.toUpperCase());     // "  HELLO JAVASCRIPT  "
console.log(msg.slice(2, 7));       // "Hell"
console.log(msg.replace("Java", "ECMA")); // "  Hello ECMAScript  "


❓ 1. var, let, and const me kya difference hai?
Feature	var	let	const
Scope	Function-scoped	Block-scoped	Block-scoped
Redeclaration	Allowed	❌ Not Allowed	❌ Not Allowed
Reassignment	Allowed	Allowed	❌ Not Allowed
Hoisted	✅ Yes (initial value = undefined)	✅ Yes (but not initialized)	✅ Yes (but not initialized)

📌 Note:

Prefer let for values that change

Use const for values that should stay constant

Avoid var in modern JS

❓ 2. == aur === me kya fark hota hai?
Operator	Name	Checks	Example
==	Loose Equality	Value only (type conversion hoti hai)	5 == "5" ➝ true
===	Strict Equality	Value and Type dono	5 === "5" ➝ false

📌 Tip: Use === in most cases to avoid unexpected bugs.

❓ 3. Hoisting kya hoti hai?
Answer:
Hoisting ka matlab hai JavaScript ke variables aur functions ko memory me top pr utha lena (during compile phase), chahe aap unhe neeche define karo.

js
Copy
Edit
console.log(a); // undefined (not error!)
var a = 10;
var gets hoisted with undefined

let and const are hoisted too, but not initialized → accessing them before declaration gives ReferenceError

❓ 4. JavaScript synchronous ya asynchronous hoti hai?
Answer:
JavaScript is synchronous by default, but it also supports asynchronous behavior using:

setTimeout(), setInterval()

Promises

async/await

Event loop helps JS handle async code even though it's single-threaded.

📌 Example:

js
Copy
Edit
console.log("Start");
setTimeout(() => console.log("Inside setTimeout"), 1000);
console.log("End");
Output:

sql

Start
End
Inside setTimeout
