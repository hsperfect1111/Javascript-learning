// Comparison Operators

// ❓ Q: What is the difference between == and === in JavaScript?
// ✅ == → Loose Equality (Abstract Comparison)
// Compares values only

// Performs type conversion (coercion) if types are different

// ✅ === → Strict Equality
// Compares values and types

// No type conversion is done

// 🔍 Example:
// javascript
// 5 == "5"     // true  → value matches, JS converts "5" to number
// 5 === "5"    // false → number ≠ string (type mismatch)

// null == undefined   // true   → loosely equal
// null === undefined  // false  → different types

// 0 == false    // true  → both are falsy
// 0 === false   // false → number ≠ boolean

// " " == 0      // true  → empty string converted to 0
// " " === 0     // false → string ≠ number
// 🧠 Best Practice:
// ✅ Always use === (strict equality) unless you have a specific reason to use ==. It avoids unexpected bugs caused by type coercion.

// Comparison Operators :  ==, ===, != , !==, >, >=, <, <=

// let a = 5;
// let b = "5";
// console.log("a == b", a==b);    // true

// jb ek string k andar number hota h js is string ko phele number k andar convert karegi aur fir is convertednumber (b) ko number (a) ki sath compare karegi
// == check value only

// let a = 5;
// let b = "5";
// console.log("a === b", a===b);
// === check value & datatype also

// Strict Not Equal To
let a = 5;
let b = "5";
console.log("a !== b", a!==b);  // true
