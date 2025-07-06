📘 Lecture 5: Functions & Methods
From Shradha Khapra’s JavaScript Full Course

📒 Short Notes (Bullet Format)
🔹 Functions
A function is a block of code designed to perform a particular task.

Defined using function keyword or arrow functions (=>).

Syntax:

js
Copy
Edit
function greet() {
  console.log("Hello!");
}
greet(); // function call
🔹 Function Parameters & Arguments
Parameters are variables listed in the function definition.

Arguments are values passed during the function call.

js
Copy
Edit
function add(a, b) {
  return a + b;
}
console.log(add(3, 4)); // 7
🔹 Return Keyword
return is used to send a value back from a function.

A function without return returns undefined.

🔹 Function Expressions
Functions can be stored in variables.

js
Copy
Edit
const greet = function () {
  console.log("Hi!");
};
🔹 Arrow Functions
Shorter syntax for writing functions.

js
Copy
Edit
const add = (a, b) => a + b;
🔹 Function Scope
Variables defined inside a function are local to that function (block scoped).

Cannot access them outside.

🔹 Methods
Functions that are part of an object.

Syntax:

js
Copy
Edit
const person = {
  name: "Ram",
  greet: function () {
    console.log("Hello, " + this.name);
  },
};
person.greet(); // Hello, Ram
❓ Conceptual Q&A
Q1. What is a function in JavaScript?
A function is a reusable block of code that performs a specific task.

Q2. What is the difference between parameters and arguments?
Parameters are defined in function definition; arguments are actual values passed to the function.

Q3. What does the return keyword do?
It sends a value back from the function to the place it was called.

Q4. What are function expressions?
Functions stored in a variable, can be anonymous (no name).

Q5. What are arrow functions?
Short-hand syntax for writing functions using =>.

Q6. What is the difference between a function and a method?
A function is standalone, while a method is a function inside an object.

Q7. What is scope of a variable declared inside a function?
It is local to that function only (block/function scope).
