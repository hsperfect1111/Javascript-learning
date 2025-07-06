//          Higher order function/Method
// forEach is HOFunction /HOMethod : woh fun jo dusre function ko as a parameter le lete h yaa kisi function ko return kr rahe hote h

// chatGPT
// 🔹 What is a Higher-Order Function (HOF)?

// A Higher-Order Function is a function that does at least one of the following:
//     1. Takes another function as an argument, or
//     2. Returns a function as its result

// ✅ Examples of Higher-Order Functions in JavaScript:
// forEach is a HOF:

// javascript
// const nums = [1, 2, 3];

// nums.forEach(function(num) {
//     console.log(num);
// });

// ⊚ forEach is not just a method — it is a higher-order function.
// ⊚ It takes another function as a parameter — that callback you give (function(num) {...}).

// 🔹 Function vs Method vs HOF:
// Term	    Description	                                            Example
// Function	A reusable block of code	                            function greet() {}
// Method	    A function that's a property of an object	            obj.sayHello = function () {}
// HOF	        A function that takes/returns another function	        arr.map(), setTimeout(), etc.

// ✅ Another HOF Example – setTimeout
// javascript

// setTimeout(function () {
//     console.log("Delayed message");
// }, 1000);
// setTimeout takes a function as input → ✅ HOF.

// 🔁 Final Summary (in your words):
// "Higher-Order Function ya Method woh hota hai jo kisi aur function ko as a parameter le ya return kare."


// Let's Practice
// Qs . 
// let nums = [2,3,4,5,6];
// nums.forEach((num)=> {
//     console.log(num * num);
// });

// let nums = [67,52,39];
// nums.forEach((num)=> {
//     console.log(num * num);
// });

// another way of writing callback
// let nums = [67,52,39];
// let calcSquare = (num)=> {
//     console.log(num * num);
// };
// nums.forEach(calcSquare);


// let arr = [1,2,3,4,5];
// arr.forEach(function(val){
//     console.log(val*val)
// });
