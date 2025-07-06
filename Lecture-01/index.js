// Welcome to JavaScript - Lecture 01: Variables & Data Types

// Variable declarations
let fullName = "Tony Stark";
console.log(fullName);

let age = 24;
console.log(age);

let price = 33.33;
console.log(price);

// Null vs Undefined
let x = null;
console.log(x); // null

let y;
console.log(y); // undefined

// Boolean
let isFollow = true;
console.log(isFollow);

// Dynamic Typing
let a = 10;
a = "Hello World";
a = true;
console.log(a);

// Case sensitivity
let name = "John";
let Name = "Doe";
console.log(name);
console.log(Name);

// let, const, var comparison
const PI = 3.14;
console.log(PI);

// const objects
const student = {
    fullName: "Himanshu Singh",
    age: 52,
    cgpa: "8.8",
    isPass: true,
};
student.age += 1;
console.log(student.age);
