// method and function key difference:

// 🔹 Function:
// A function is a block of code designed to perform a specific task. It can exist independently, outside of any object.

// ✅ Example:
// javascript

// function greet() {
//     console.log("Hello!");
// }
// greet();  // Output: Hello!

// Or with arrow function:

// javascript

// const greet = () => {
//     console.log("Hello!");
// };
// greet();  // Output: Hello!

// 🔹 Method:
// A method is a function that is a property of an object. When a function is defined inside an object, it becomes a method of that object.

// ✅ Example:
// javascript

// const person = {
//     name: "Alice",
//     greet: function () {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };
// person.greet();  // Output: Hello, my name is Alice

// 🧠 So the key difference:

// Feature	            Function	    Method
// Belongs to	        Stands alone	Belongs to an object
// Called by	        Function name	Object + dot + method name
// Example call	    greet()	        person.greet()

// 🔁 Quick Summary:
// Function: Independent block of reusable code.

// Method: Function inside an object (used with this often).


//              forEach Loop in Arrays
// forEach is a method bco2 it is associate with array
// Array.forEach(callBackFunction)

// function can be passed as parameter in JS.
// function abc(){
//     console.log("hello");
// }

// function myFunc(abc){
//     return abc;
// }

// *A callback is a function paased as an argument to another function

// let arr = [1,2,3,4,5,6];
// arr.forEach(function printVal(val){ // forEach arr k ek ek element ko value ki tarha uthayega aur is internal function paas karega (val) ko // val : value at each idx
//     console.log(val);
// })


// forEach using arrowFun
// let arr = [1,2,3,4,5,6];
// arr.forEach((val) => {
//     console.log(val);
// });


// let arr = ["pune", "delhi", "mumbai"];
// arr.forEach((val) => {
//     console.log(val);
// });


// let arr = ["pune", "delhi", "mumbai"];
// arr.forEach((val) => {
//     console.log(val.toUpperCase());
// });


// 3 parameters in callback function 
// val  , idx , arr
// item , pos , arr

// let arr = ["pune", "delhi", "mumbai"];
// arr.forEach((val, idx) => {
//     console.log(val.toUpperCase(), idx);
// });

let arr = ["pune", "delhi", "mumbai"];
arr.forEach((val, idx, arr) => {
    console.log(val.toUpperCase(), idx, arr);
});

// forEach is only used with array not for string 
