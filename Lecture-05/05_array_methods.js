// Some more array methods 
// Map : similar to forEach, return newArray
// Array.map(callbackFun(value, indexed, array))

// let nums = [67,52,39];
// nums.map((val) => {
//     console.log(val);
// });


// let nums = [67,52,39];
// let newArr = nums.map((val) => {
//     return val;
// });
// console.log(newArr);


// let nums = [67,52,39];
// let newArr = nums.map((val) => {
//     return val*val;
// });
// console.log(newArr);


// original array will be same 
// let nums = [67,52,39];
// let newArr = nums.map((val) => {
//     return val*val;
// });
// console.log(newArr);
// console.log(nums);


// let nums = [67,52,39];
// let newArr = nums.map((val) => {
//     return val*2;
// });
// console.log(newArr);


// Filter
// let arr = [1,2,3,4,5,6,7];
// let evenArr = arr.filter((val) => {
//     return val%2 === 0;
// });
// console.log(evenArr);


// let arr = [1,2,3,4,5,6,7];
// let evenArr = arr.filter((val) => {
//     return val%2 !== 0;
// });
// console.log(evenArr);


// let arr = [1,2,3,4,5,6,7];
// let evenArr = arr.filter((val) => {
//     return val > 3;
// });
// console.log(evenArr);


// original array will be same 
// let arr = [1,2,3,4,5,6,7];
// let evenArr = arr.filter((val) => {
//     return val > 3;
// });
// console.log(evenArr);


// Reduce method : reduce the array to single value
// Syntax : array.reduce(accumulator, currentValue)
// let arr = [1,2,3,4];
// const output = arr.reduce((res, curr) => {
//     return res + curr;
// });
// console.log(output);


// Find Largest Element
// let arr = [5,6,2,1,3];
// const output = arr.reduce((prev, curr)=>{
//     return prev>curr ? prev : curr;
// })
// console.log(output);


// let arr = [5,6,2,1,101,3];
// const output = arr.reduce((prev, curr)=>{
//     return prev>curr ? prev : curr;
// })
// console.log(output);


// let arr = [5,6,2,1,3];
// const output = arr.reduce((prev, curr)=>{
//     return prev<curr ? prev : curr;
// })
// console.log(output);


// let marks = [97,64,32,49,99,96,86];
// let toppers = marks.filter((val)=>{
//     return val > 90;
// });
// console.log(toppers);


// Qs . 
let n = prompt("Enter a number");
let arr = [];
for(let i=1; i<=n; i++)
{
    arr[i-1] = i;
}
console.log(arr);

let sum = arr.reduce((res, curr) => {   // reduce: Ye method array ke har element par ek callback function chalata hai.
    return res + curr;  // res (accumulator): Ye woh value hai jo har iteration ke baad carry forward hoti hai. // curr (current): Ye array ka current element hai jisko process kiya ja raha hai.
});
console.log(sum);


let factorial = arr.reduce((res, curr) => {
    return res * curr;
});
console.log("factorial = ", factorial);
