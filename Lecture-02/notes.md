📒 Short Notes (Clean Bullet Points)
✅ Operators in JavaScript
Arithmetic Operators
+, -, *, /, %, ** (exponentiation), ++, --

Assignment Operators
=, +=, -=, *=, /=, %= etc.

Comparison Operators
== (loose equality), === (strict equality),
!=, !==, >, <, >=, <=

Logical Operators
&& (AND), || (OR), ! (NOT)

Unary Operator
e.g., typeof, !, ++, --

Ternary Operator
Syntax: condition ? true_value : false_value

🧠 Conditional Statements
if statement
Executes a block if condition is true.

if-else
Adds an alternative block if condition is false.

if-else if-else
Multiple conditions can be checked in sequence.

switch statement
Used for multiple possible values of a variable.

❓ Conceptual Q&A (Short & Simple)
Q1. What are the types of operators in JavaScript?
➡️ Arithmetic, Assignment, Comparison, Logical, Unary, and Ternary.

Q2. What is the difference between == and ===?
➡️ == checks value only; === checks value and type (strict).

Q3. What is a ternary operator?
➡️ It’s a shorthand for if-else. Syntax: condition ? val1 : val2.

Q4. How does switch work in JavaScript?
➡️ It checks a variable against multiple case values and runs matching code.

Q5. What is the use of typeof?
➡️ It tells the data type of a variable.

Q6. What happens if you divide by 0 in JavaScript?
➡️ Returns Infinity or -Infinity.

💬 Examples
js
Copy
Edit
// Arithmetic
let x = 10;
let y = 3;
console.log(x % y); // 1

// Comparison
console.log(5 == '5');   // true
console.log(5 === '5');  // false

// Logical
console.log(true && false); // false

// Ternary
let age = 18;
let canVote = (age >= 18) ? "Yes" : "No";
console.log(canVote); // Yes

// If-Else
if (age >= 18) {
  console.log("Adult");
} else {
  console.log("Minor");
}

// Switch
let fruit = "apple";
switch(fruit) {
  case "apple":
    console.log("Apple selected");
    break;
  case "banana":
    console.log("Banana selected");
    break;
  default:
    console.log("No match");
}


💼 Interview Questions – JavaScript Operators & Conditionals

1. What is the difference between == and ===?
➡️ == checks value (with type conversion); === checks both value and type.

2. What does typeof null return? Why?
➡️ "object" – it's a long-standing bug in JavaScript.

3. What is the output of 2 + "2" and why?
➡️ "22" – number 2 is converted to string due to type coercion.

4. What is the result of true + false?
➡️ 1 – because true is 1 and false is 0 in arithmetic.

5. Explain ++ and -- operators.
➡️ x++ (post-increment) returns old value, then increases; ++x (pre-increment) increases first, then returns.

6. Difference between a += b and a = a + b?
➡️ No difference in result; += is just shorthand.

7. Output of:

js

let x = 5;
console.log(x++); // ?
console.log(++x); // ?
➡️ First logs 5, then 7 (post-increment, then pre-increment).

🔀 Conditional Statements
8. How is switch different from multiple if-else?
➡️ switch is better for comparing the same variable with multiple values.

9. When is switch preferred over if-else?
➡️ When checking multiple exact matches for a single variable.

10. What is a ternary operator?
➡️ A shorthand for if-else: condition ? trueValue : falseValue.

11. Can we nest if statements?
➡️ Yes, it’s useful for checking multiple levels of conditions.

12. What will if (0), if (""), or if (null) do?
➡️ They are all falsy, so the if block won’t run.

13. What is short-circuiting in && and ||?
➡️ In &&, if the first condition is false, second isn't checked. In ||, if first is true, second isn't checked.
