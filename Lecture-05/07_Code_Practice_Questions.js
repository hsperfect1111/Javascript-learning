// ✅ Code Practice Questions
// (Level: Beginner to Intermediate)

// 🧪 1. Function to add two numbers
// js
function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // Output: 8

// 🧪 2. Function to check if number is even or odd
js
Copy
Edit
function isEven(num) {
  return num % 2 === 0;
}
console.log(isEven(4)); // Output: true

// 🧪 3. Function to find factorial of a number
js
Copy
Edit
function factorial(n) {
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  return fact;
}
console.log(factorial(5)); // Output: 120

// 🧪 4. Function to reverse a string
js
Copy
Edit
function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // Output: "olleh"

// 🧪 5. Method inside an object to greet a user
js
Copy
Edit
const user = {
  name: "Aman",
  greet: function () {
    console.log(`Hello, ${this.name}`);
  },
};
user.greet(); // Output: Hello, Aman
