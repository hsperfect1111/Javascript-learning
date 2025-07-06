// Another way to check condition :
// By using switch :
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch

// 📘 Syntax :

// switch (expression) {
//   case value1:
//     // code block
//     break;
//   case value2:
//     // code block
//     break;
//   ...
//   default:
//     // default code block
// }


// ✅ Example :
// let day = 3;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   default:
//     console.log("Another day");
// }


// 🟢 Output:
// Wednesday


// const exp = "Papaya";
// switch (exp) {
//     case "Orange":
//         console.log("Orange");
//         break;
//     case "Mango":
//     case "Banana":
//         console.log("Banana");
//         break;
//     case "Papaya":
//         console.log("Papaya");
//         break;
//     default:
//         console.log("not matched");
// }


// ⚠️ Without break (fall-through)
// js

// let fruit = "apple";

// switch (fruit) {
//   case "apple":
//     console.log("Apples are red");
//   case "banana":
//     console.log("Bananas are yellow");
//   default:
//     console.log("Unknown fruit");
// }

// 🟡 Output:

// Apples are red  
// Bananas are yellow  
// Unknown fruit

// Because there are no break statements, it runs all cases after the match. Be careful!

// 🗒️ When to use switch:
// When checking one variable against multiple values.
// When readability and organization are important.
