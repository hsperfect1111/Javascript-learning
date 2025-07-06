// Template Literals in JS 
// let specialString = `This is a template literal`;
// console.log(specialString);


// let specialString = `This is a template literal`;
// console.log(typeof specialString);


// let obj = {
//     item: "pen",
//     price: 10,
// };
// console.log("the cost of", obj.item, "is", obj.price, "rupees");

// let obj = {
//     item: "pen",
//     price: 10,
// };
// console.log(`the cost of ${obj.item} is ${obj.price} rupees`);


// Template Literals humari string hoti h bs backtic se create krte h uske andar hum expression ko embedded kr skte h , jaise hi humne expression ko embedded kr liya yani placeholder daal diye jinki value run time pr calculate hokr aayegi ise String Interpolation kahete h

//          String Interpolation

// let specialString = `This is a template literal ${1+2+3}`;
// console.log(specialString);


// escape character \n , \t
// console.log("Apna\nCollege");
// console.log("Apna\tCollege");


// Guess the length
// let str = "Apna\tCollege";
// console.log(str.length);    // \t : count as single character


// String Methods in JS // str.toUpperCase(), str.toLowerCase(), str.trim()
// let str = "ApnaCollege";
// console.log(str.toUpperCase());


// Koi bhi method original string ko change nhi krta 
// method create newString with newValue
// Example : // Guess the o/p
// let str = "ApnaCollege";
// str.toUpperCase();
// console.log(str);


// let str = "ApnaCollege";
// let newStr = str.toUpperCase();
// console.log(str);
// console.log(newStr);


// let str = "ApnaCollege";
// str = str.toUpperCase();
// console.log(str);

// Strings are Immutable (can't change) in JS. 

// str.trim()
// let str = "     Apna College JS   ";
// console.log(str.trim());  // removes whitespaces from starting to ending


// str.slice(start, end?) // returns part of string , end is non-inclusive and optional.
// let str = "0123456";
// console.log(str.slice(1, 3));

// let str = "0123456";
// console.log(str.slice(1, 6));

// let str = "hello";
// console.log(str.slice(0, 3));

// end is optional means 
// let str = "hello";
// console.log(str.slice(1));  // end is optional means 

// let str = "hello";
// console.log(str.slice(3));


// str1.concat(str2) // joins str2 with str1
// let str1 = "Apna";
// let str2 = "College";
// let res = str1.concat(str2);
// console.log(res);

// let str1 = "Apna";
// let str2 = "College";
// let res = str2.concat(str1);
// console.log(res);

// let str1 = "Apna";
// let str2 = "College";
// let res = str1 + str2;
// console.log(res);

let str1 = "Apna";
let str2 = "College";
let res = "hello" + 123; // JS convert 123 in string first then concatinate
console.log(res);

// str.replace(searchVal, newVal)
// let str = "hello";
// console.log(str.replace("h","y"));


// let str = "hello";
// console.log(str.replace("lo","p"));


// let str = "hellololo";
// console.log(str.replace("lo","p"));


// let str = "hellololo";
// console.log(str.replaceAll("lo","p"));


// let str = "abcdefghi";
// let newStr = str.replace("ef","jk");
// console.log(newStr);


// str.charAt(idx)

// let str = "IloveJS";
// console.log(str.charAt(0));

// let str = "IloveJS";
// console.log(str.charAt(4));


// let str = "IloveJS";
// console.log(str[0]);


// Original string is immutable
// Example: Guess the o/p
// let str = "IloveJS";
// str[0] = "S";
// console.log(str);

// newString can be change but Original string is immutable
// let str = "IloveJS";
// let newStr = str.replace("I", "S");
// console.log(newStr);
// console.log(str);
