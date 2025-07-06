// Arrow functions : Compact way of writing a function
// sum function
// function sum(a,b){
//     return a+b;
// }


// const arrowSum = (a,b) => {
//     console.log(a+b);   // Ye function sirf console.log(a + b) karta hai — yani a + b ka output screen par dikhata hai, return nahi karta.
// };
// console.log(arrowSum)   // [Function: arrowSum]
// arrowSum(3,4);


// const arrowSum = (a, b) => {
//     return a + b;
// };


// Guess the o/p
// const arrowSum = (a,b) => {
//     console.log(a+b);   // Ye function sirf console.log(a + b) karta hai — yani a + b ka output screen par dikhata hai, return nahi karta.
// };
// console.log(arrowSum)   // [Function: arrowSum]
// console.log(arrowSum(3,4)); // arrowSum() kuch return nahi karta, uska return value hota hai undefined

// multiplication function
// function mul(a, b){
//     return a*b;
// };

// const mulArrow = (a,b) => {
//     console.log(a*b);
// };
// console.log(mulArrow);
// mulArrow(3,4);


// const mulArrow = (a,b) => {
//     return a*b;
// }
// console.log(mulArrow);
// console.log(mulArrow(3,4));


// const printHello = () => {
//     console.log("Hello");
// };
// printHello();


// const printHello = () => {
//     console.log("Hello");   // Hello
// };
// console.log(printHello());  // undefined


// const printHello = () => {
//     return "Hello";
// };
// console.log(printHello()); // Output: Hello


// single line code 
// const printHello = () => console.log("Hello");   // Hello
// printHello();  // undefined


// Qs. base
// function countVowels(str) {
//     for(const char of str){
//         console.log(char);
//     }
// }
// countVowels("ApnaCollege");


// Qs . Actual Question is this 
// function countVowels(str) {
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U" )
//         {
//             count++;
//         }
//     }
//     return count;
// }
// const result = countVowels("ApnaCollege");
// console.log(`Number of vowels in the string is ${result}`);



// const vowelsFun = (str) => {
//     let count = 0;
//     for(let val of str){
//         if(val === "a" || val === "e" || val === "i" || val === "o" || val === "u" || val === "A" || val === "E" || val === "I" || val === "O" || val === "U" )
//         {
//             count++;
//         }
//     }
//     return count;
// }
// const result = vowelsFun("Himanshu");
// console.log(`Number of vowels in the string is ${result}`);


// wrong code due to this learn from this code and understand the mistake : You're using str[val], assuming val is an index — but in your loop:
// javascript
// for (let val of str)
// val is already a character, not an index.
// So str[val] is wrong — it tries to do str["H"], str["i"], etc., which gives undefined.
// const vowelsFun = (str) => {
//     let count=0;    // count initialize function ke bahar
//     for(let val of str){        // val har character hai
//         if(str[val]==="a" || str[val]==="e" || str[val]==="i" || str[val]==="o"|| str[val]==="u" || str[val]==="A" || str[val]==="E" || str[val]==="I" || str[val]==="O"|| str[val]==="U"){ // wrong
//             count++;
//         }
//     }
//     return count;   // loop ke baad count return karo
// };

// const result = vowelsFun("Himanshu");
// console.log(`Number of vowels in the string is ${result}`);


// using arrowFun
// const countVow = (str) => {
//     let count = 0;
//     for(const char of str){
//         if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" || char === "A" || char === "E" || char === "I" || char === "O" || char === "U"){
//             count++;
//         }
//     }
//     return count;
// }

// const result = countVow("ApnaCollege");
// console.log(`Number of vowels in the string is ${result}`);
