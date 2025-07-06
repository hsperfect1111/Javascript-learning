// ✅ Video 5: Operators

// Arithmetic: +, -, *, /, %
// Comparison: ==, ===, !=, <, >
// Logical: &&, ||, !

// 🔸 React me conditional rendering me && ka kaafi use hota hai:

// jsx

// {isLoggedIn && <p>Welcome</p>}


// ✅ Video 5:
// Lecture 5: Functions & Methods | JavaScript Full Course

//              Functions in JS

// invoked : बुलाया गया


//              Function Definition

// Syntax :
// function functionName(){
//     // do some work
// }


// Function Definition
// function myFunction(){
//     console.log("Apna College");
//     console.log("love JS");
// }
// // Function Call
// myfunction();


// function myFunction(msg){   // msg -> function parameter
//     console.log(msg);
// }
// myFunction("love JS");  // love JS -> argument

// Note : Inside the function definition, we use parameters. When we call the function, the values we pass are called arguments.


// we can paas multiple arguments seprated by (,) comma
// function functionName(param1, param2,...){
//     // do some work
// }

// function myFunction(msg, n){   
//     console.log(msg*n);
// }
// myFunction("love JS", 100);


// Function -> 2 numbers, sum

// function sum(a, b){
//     console.log(a + b);
// }
// sum(5,6);


// function return the val
// function sum(x, y){  // (x, y) : local variable : A local variable is a variable that is declared inside a function or block and can only be accessed within that function or block.
//     s = x + y;
//     return s;
// }
// let val = sum(3,4);
// console.log(val);


// Guess the o/p
// function sum(x, y){  // (x, y) : local variable : A local variable is a variable that is declared inside a function or block and can only be accessed within that function or block.
//     s = x + y;
//     return s;
// }
// let val = sum(3,4);
// console.log(x);     // ReferenceError: x is not defined
// console.log(val);


// Guess the o/p
// function sum(x, y){  // (x, y) : local variable : A local variable is a variable that is declared inside a function or block and can only be accessed within that function or block.
//     s = x + y;
//     console.log(x); // 3
//     return s;
// }
// let val = sum(3, 4);
// console.log(x);     // ReferenceError: x is not defined
// console.log(val);

// Note : Function parameters are like local variables of the function. They have block scope and can only be accessed inside the function.
