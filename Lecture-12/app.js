// Sync in JS 

// ============ Synchronous =============
// console.log("one");
// console.log("two");
// console.log("three");


// ============ ASynchronous =============

// setTimeout : Ye kisi ek function ko execute krta h, pr woh kb execute hoga usko hum decide kr skte h 

// function hello() {
//     console.log("hello");
// }

// setTimeout(hello, 2000);    // timeout : 2sec = 2000 milisec

// setTimeout(hello, 4000);


// ------- By using Arrow Function --------

// setTimeout(() => {
//     console.log("hello");
// }, 4000);


// ==========================================

// statement (40-41) "three" or "four" wait nhi karegi setTimeout se phele hi execute ho jayegi

// console.log("one");
// console.log("two");

// setTimeout(() => {
//     console.log("hello");
// }, 4000);

// console.log("three");
// console.log("four");

// o/p:
// one
// two
// three
// four
// hello

// ------------- Callbacks ---------------

// callback is a function passed as an argument to another function.

// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// calculator(1, 2, sum);

// ✅ Now Flow of Execution
// Tumne calculator(1, 2, sum) call kiya.
// calculator function m sumCallback parameter ko sum function mila.
// sumCallback(a, b) ka matlab hua sum(1, 2).
// Aur sum function ne 1 + 2 = 3 print kar diya.

// =======================================

// Jb bhi hum callback ko paas krte h to callback lo parenthesis k sath paas nhi krna 

// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// Jb bhi hum callback ko paas krte h to callback "sum()" ko parenthesis k sath paas nhi krna 
// calculator(1, 2, sum());    // sumCallback is not a function 

// NOTE : callback ko name k sath paas krna hota h without any parenthesis
// Like this : calculator(1, 2, sum());

// =======================================

// arrow function bhi hum paas kr skte h 

// function sum(a, b){
//     console.log(a + b);
// }

// function calculator(a, b, sumCallback){
//     sumCallback(a, b);
// }

// // arrow function bhi hum paas kr skte h 
// calculator(1, 2, (a, b) => {
//     console.log(a + b);
// });

// ========================================

// setTimeout : callback leta h 
// const hello = () => {
//     console.log("hello");
// };

// setTimeout(hello, 3000);


// ========== Callback Hell ==============
// Nested callbacks

// nested if-else
// let age = 19;
// if(age >= 18) {
//     if(age >=60){
//         console.log("senior");
//     } else {
//         console.log("middle");
//     }
// } else {
//     console.log("child");
// }

// nested loop
// for(let i=0; i<5; i++){
//     let str="";
//     for(let j=0; j<5; j++){
//         str = str + j;
//     }
//     console.log(i, str);
// }

// ---

// 2-3 time to watch this callback Hell to understand 

// function getData(dataId){
//     console.log("data", dataId);
// }

// // console.log(getData);
// getData();  // data undefined
// getData(123); // data 123
// getData(1);   // data 1+*6+


// ---

// function getData(dataId){
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000);
// }

// getData(456);
// getData(1);

// ---

// hume data1,data2,data3 chahiye ek sath 

// function getData(dataId){
//     setTimeout(() => {
//         console.log("data", dataId);
//     }, 2000);
// }

// getData(1);
// getData(2);
// getData(3);


// hume data1,data2,data3 chahiye but ek sath nahi kuch sec baad 
// individual delay using callback

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         getNextData();
//     }, 2000);
// }

// getData(1, getData(2)); // getNextData is not a function
// getData(2) : is tarike se hum callback paas nhi kr skte kyuki yaha function k sath parenthesis lg gaya to woh immidiately execute ho jayega 
// isiliye o/p: data 2 phele execute ho gaya 


// ----

// ✅ "When we need to pass arguments, we should define the callback as an arrow function."
// "Jab humein arguments pass karne hote hain, tab humein callback ko arrow function ke form mein define karna chahiye."

// 🔥 Key Concept: This is an example of callback chaining → often called callback hell when nested deeply.

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){    // Call getNextData() only if it is defined (i.e., not undefined or null) //Agar ye function "getNextData()" exist krta ho tbhi is function ko call karo
//             getNextData();
//         }
//     }, 2000);
// };

// getData(1, () => {
//     getData(2);
// });

// ---

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){    // Call getNextData() only if it is defined (i.e., not undefined or null) //Agar ye function "getNextData()" exist krta ho tbhi is function ko call karo
//             getNextData();
//         }
//     }, 2000);
// };

// getData(1, () => {
//     getData(2, () => {
//         getData(3);
//     });
// });

// ---

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){    // Call getNextData() only if it is defined (i.e., not undefined or null) //Agar ye function "getNextData()" exist krta ho tbhi is function ko call karo
//             getNextData();
//         }
//     }, 2000);
// };

// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4);
//         });
//     });
// });

// ---

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("data", dataId);
//         if(getNextData){    // Call getNextData() only if it is defined (i.e., not undefined or null) //Agar ye function "getNextData()" exist krta ho tbhi is function ko call karo
//             getNextData();
//         }
//     }, 2000);
// };

// // callback hell
// getData(1, () => {
//     console.log("getting data2...");
//     getData(2, () => {
//         console.log("getting data3...");
//         getData(3, () => {
//             console.log("getting data4...");
//             getData(4);
//         });
//     });
// });


// ============= Promises ===================

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
// });

// console 
// I am a promise
// promises
// Promise {<pending>}
//     [[Prototype]]: Promise   // promise k paas ek Prototype hota h kyuki ye ek object h 
//     [[PromiseState]]: "pending"
//     [[PromiseResult]]: undefined

// ---

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve(123);
// });

// console 
// I am a promise
// promise
// Promise {<fulfilled>: 123}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: 123

// ---

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     resolve("success");
// });

// console 
// I am a promise
// promise
// Promise {<fulfilled>: success}
// [[Prototype]]: Promise
// [[PromiseState]]: "fulfilled"
// [[PromiseResult]]: "success"

// ---

// let promise = new Promise((resolve, reject) => {
//     console.log("I am a promise");
//     reject("some error occurred");
// });

// console
// I am a promise
// app.js:322 Uncaught (in promise) some error occurred
// promise
// Promise {<rejected>: 'some error occurred'}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "rejected"
//     [[PromiseResult]]: "some error occurred"

// Note : resolve & reject are callbacks provided by JS 

// ---

// API se data directly return nahi hota, balki ek "new Promise" return hoti hai.
// Promise ke andar ek arrow function hota hai jisme `resolve` aur `reject` hote hain.

// Example: API simulation using Promise
// function getData(dataId, getNextData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId); // Simulating delayed data fetch : setTimeout() ka use karke dikhana ki data kuch der baad milta hai — bilkul waise hi jaise actual API calls me hota hai.

//             // Optional chaining if another function needs to run after this
//             if(getNextData) {
//                 getNextData();
//             }

//             // NOTE: Promise yaha resolve/reject nahi kiya gaya — isliye promise pending hi rahega
//         }, 5000);
//     });
// }

// --- Console Execution Flow ---
// Call the function and store returned Promise
// let result = getData(123);
// Output: undefined (because variable assignment doesn't return anything)

// Check the value of 'result'
// result
// Output:
// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "pending"
//     [[PromiseResult]]: undefined

// After 5 seconds:
// Output in console:
// data 123

// Even now, if we check 'result', it will still be:
// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "pending"
//     [[PromiseResult]]: undefined

// ✅ NOTE:
// - Promise is still in pending state because we never called `resolve()` or `reject()` inside the function.
// - In real-world APIs, when data is successfully fetched, we call `resolve(data)` to mark the Promise as fulfilled.

// NOTE : IN next example : Generally API yaa function promise return kr raha hota h , aur successfuly hum data return kr dete h to hum last m apne promise ko resolve kr dete h 

// ❗Next Example:
// We'll add `resolve()` inside the setTimeout to simulate a complete and fulfilled Promise.


// ---

// NOTE : Generally API yaa function promise return kr raha hota h , Agar successfuly hum data return kr dete h to hum last m apne promise ko resolve kr dete h 

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){
//                 getNextData();
//             }
//         }, 10000);
//     });
// }

// console
// Step 1: Call the function getData(123), which returns a Promise
// let promise = getData(123);
// undefined → Because variable declaration doesn't return a value

// Step 2: Immediately log the 'promise' object
// promise
// Output: Promise {<pending>}
//     [[Prototype]]: Promise → The Promise is still waiting (pending state)
//     [[PromiseState]]: "pending"
//     [[PromiseResult]]: undefined

// Step 3: After 5 seconds, the setTimeout executes inside getData()
// data 123 → Logged from inside setTimeout in the function

// Step 4: Log 'promise' again after some time
// promise
// Promise {<fulfilled>: 'success'} → Now the Promise is resolved
//     [[Prototype]]: Promise
//     [[PromiseState]]: "fulfilled"
//     [[PromiseResult]]: "success"


// ---

// Agar API se data bhejne me koi dikkat aa jaye (e.g. server error, network failure),
// to hum apne Promise ko `reject()` karte hain — error message ke sath.

// Example: API simulation with error
// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             reject("error");    // Rejecting the promise due to error
//             if(getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// --- Console Execution Flow ---
// let promise = getData(123);
// Output: undefined → because assignment doesn't return any value

// Immediately checking `promise`
// Output:
// promise
// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "pending"
//     [[PromiseResult]]: undefined

// After 5 seconds:
// Output in console: 
// Uncaught (in promise) error -> because we didn't handle the rejection using `.catch()` or try-catch

// If we check the promise again:
// promise
// Promise {<rejected>: 'error'}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "rejected"
//     [[PromiseResult]]: "error"

// ✅ NOTE:
// - When an error occurs, `reject()` is called inside the Promise.
// - If we don’t handle that rejection using `.catch()` or `try...catch`, it will show "Uncaught (in promise) error".

// =========Promise use=============

// 2 function 
// .then()
// .catch()

// fulfilled hone pr : Promise.then((res) => {...})
// reject hone pr : Promise.catch((err) => {...})

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });

// output :
// I am a promise
// promise fulfilled

// ---

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });

// output:
// I am a promise
// Uncaught (in promise) error

// ---

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         reject("error");
//     });
// };

// let promise = getPromise();
// promise.then(() => {
//     console.log("promise fulfilled");
// });

// promise.catch(() => {
//     console.log("rejected");
// })

// output : 
// I am a promise
// rejected
// Uncaught (in promise) error


// ---

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         reject("network error");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });

// output:
// I am a promise
// rejected network error
// Uncaught (in promise) error

// ---

// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log("I am a promise");
//         resolve("success");
//     });
// };

// let promise = getPromise();
// promise.then((res) => {
//     console.log("promise fulfilled", res);
// });

// promise.catch((err) => {
//     console.log("rejected", err);
// });

// output:
// I am a promise
// promise fulfilled success

// =========Promise Chain===========

// Ye function asynchronous h kyuki jb bhi timeout us krte h to function asynchronous ho jata h 
// function asyncFunc() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1...");
// let p1 = asyncFunc();
// p1.then((res) => {
//     console.log(res);
// });

// output:
// fetching data1...
// data1
// success

// ===========================================

// Do async functions hain jo alag-alag data (data1, data2) ko 4 seconds ke delay ke baad return karti hain
// Hum dono functions ko ek sath (parallel me) call kar rahe hain
// Output 4 seconds baad ek sath console me print hoga
// Main point: Hum dono ko parallel me call kar rahe hain, isliye dono data almost ek sath console me print honge (after 4 sec).

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");   // Simulate API 1 ka response
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");   // Simulate API 2 ka response
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);   // 'success' print hoga jab data1 mil jaayega
// });


// console.log("fetching data2...");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);   // 'success' print hoga jab data2 mil jaayega
// });

// ===============================================

// Hume data1 pehle fetch karna hai, uske complete hone ke baad hi data2 fetch hoga
// Isme sequential execution ho raha hai using Promises chaining.

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");   // Simulate API 1 ka response
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");   // Simulate API 2 ka response
//             resolve("success");
//         }, 4000);
//     });
// }

// console.log("fetching data1...");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log("fetching data2...");
//     let p2 = asyncFunc2();
//     p2.then((res) => {});
// });

// output:
// fetching data1...
// data1
// fetching data2...
// data2

// ---

// isko symplyfy kr rahe h 

// function asyncFunc1() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data1");   // Simulate API 1 ka response
//             resolve("success");
//         }, 4000);
//     });
// }

// function asyncFunc2() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data2");   // Simulate API 2 ka response
//             resolve("success");
//         }, 4000);
//     });
// }

// // SYMPLIFY
// console.log("fetching data1...");
// asyncFunc1().then((res) => {
//     console.log("fetching data2...");
//     asyncFunc2().then((res) => {});
// });

// ==============================================

// callback hell using Promise chaining 

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//             if(getNextData){    // Call getNextData() only if it is defined (i.e., not undefined or null) //Agar ye function "getNextData()" exist krta ho tbhi is function ko call karo
//                 getNextData();
//             }
//         }, 5000);
//     });
// }

// // Promise chain
// // getData se data1 chahiye 
// let p1 = getData(1);
// p1.then((res) => {
//     console.log(res);
// });

// output:
// data 1
// success


// --- kyuki hum promises ko use kr rahe h hume callback use krne ki zarurat nhi 
// 1st data to humne le liya h pr, 2nd data kis tarike se le

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);
//     });
// }

// // Promise chain
// // getData se data1 chahiye 
// getData(1).then((res) => {
//     console.log(res);
//     getData(2).then(() => {    // 2nd data k liye hum yaha pr call lagayege
//         console.log(res);
//     });
// });

// output:
// data 1
// success
// data 2
// success

// ---

// ✅ Same Logic using async/await (Better & Cleaner Way):

// getData ek async function hai jo 3 seconds ke delay ke baad dataId ko console me print karta hai
// aur "success" resolve karta hai. Ye ek dummy API call jaisa hai.

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 3000);
//     });
// }

// // 👇 Ye part sequential data fetch kar raha hai using Promise chaining

// // Step 1: Pehle getData(1) ko call kar rahe hain
// getData(1).then((res) => {
//     // Step 2: Jab pehla resolve ho jaye, tab getData(2) ko call karte hain
//     return getData(2);
// }).then((res) => {
//     // Step 3: Jab doosra bhi resolve ho jaye, to uska result console me print karte hain
//     console.log(res);   // Output: "success"
// });

// output:
// data 1
// data 2
// success

// ---

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// // 👇 Ye part sequential data fetch kar raha hai using Promise chaining

// getData(1)
//     .then((res) => {
//     return getData(2);
//     })  
//     .then((res) => {
//     return getData(3);
//     })
//     .then((res) => {
//     console.log(res);
//     });

// ---

// function getData(dataId){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// // Promise Chain
// // same kaam humne callback se kiya same kaam humne promise chain se kiya, Promise chain is more understandable

// console.log("getting data1...");
// getData(1)
//     .then((res) => {
//         console.log("getting data2...");
//         return getData(2);
//     })  
//     .then((res) => {
//         console.log("getting data3...");
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });

// ---

// callback hell
// getData(1, () => {
//     console.log("getting data2...");
//     getData(2, () => {
//         console.log("getting data3...");
//         getData(3, () => {
//             console.log("getting data4...");
//             getData(4);
//         });
//     });
// });


// ==============Async-Await=====================

// async function hello() {
//     console.log("hello");
// }

// hello();

// ---

// Note : async function always returns a Promise. 
// await pauses the execution of its surrounding async function until the promise is settled.
// await ko async function k andar hi use kr skte h 

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);   // website success k liye number paas krti h , So, 200 represent a successful api call
//         }, 2000);
//     });
// }

// // api();  // Ye async call h isko execute hone m kuch time lagega to hum await ko use karege

// await api();    // Uncaught SyntaxError: await is only valid in async functions and the top level bodies of modules

// ---

// await is only valid in async functions

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);   // website success k liye number paas krti h , So, 200 represent a successful api call
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();
// }

// output on console :
// getWeatherData();
//     Promise {<pending>}
//         [[Prototype]]: Promise
//         [[PromiseState]]: "pending"
//         [[PromiseResult]]: undefined

// weather data

// getWeatherData();
//     Promise {<pending>}
//         [[Prototype]]: Promise
//         [[PromiseState]]: "fulfilled"
//         [[PromiseResult]]: undefined
// weather data


// Is API ko 2 baar call lagani h , Ist time data chahiye uske baad 2nd time data chahiye 

// function api() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("weather data");
//             resolve(200);   // website success k liye number paas krti h , So, 200 represent a successful api call
//         }, 2000);
//     });
// }

// async function getWeatherData() {
//     await api();    // phele first call complete hogi 
//     await api();    // uske baad second call complete hogi 
// }

// output:
// getWeatherData();
// Promise {<pending>}
// 2 weather data

// ===================================================

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// // Async-await
// async function getAllData() {
//     await getData(1);
//     await getData(2);
//     await getData(3);
// }

// output :
// getAllData();
// Promise {<pending>}
//     [[Prototype]]: Promise
//     [[PromiseState]]: "pending"
//     [[PromiseResult]]: undefined
// data 1
// data 2
// data 3

// ======================================================

// function getData(dataId) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("data", dataId);
//             resolve("success");
//         }, 2000);
//     });
// }

// // Async-await
// async function getAllData() {
//     console.log("getting data1...");
//     await getData(1);
//     console.log("getting data2...");
//     await getData(2);
//     console.log("getting data3...");
//     await getData(3);
//     console.log("getting data4...");
//     await getData(4);
//     console.log("getting data5...");
//     await getData(5);
// }


// output :
// getAllData();
// getting data1...
// Promise {<pending>}
// data 1
// getting data2...
// data 2
// getting data3...
// data 3
// getting data4...
// data 4
// getting data5...
// data 5


// ==== IIFE : Immediately Invoked Function Expression ====


// NOTE : async-await ko function k andar dalna pdta h aur fir us function ko call krna pdta h 
// is call se bachne ka tarika hota h IIFE : Immediately Invoked Function Expression

// Agar hume code immediately execute krana h aur ek hi baar usko use krna chahte h 

function getData(dataId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

// Async-await
(async function getAllData() {
    console.log("getting data1...");
    await getData(1);
    console.log("getting data2...");
    await getData(2);
    console.log("getting data3...");
    await getData(3);
    console.log("getting data4...");
    await getData(4);
    console.log("getting data5...");
    await getData(5);
})();

































































