// 📢 alert() in JavaScript
// The alert() function is used to show a popup dialog box with a message to the user.

// ✅ Syntax
// js
// alert("Your message here");

// 📌 Example

// js
// alert("Welcome to my website!");
// 🟢 This will show a popup box with the message:

// Output:
// Welcome to my website!

// 🧠 Key Points
// alert() is synchronous — it stops code execution until the user clicks "OK".

// It works only in browsers (not in Node.js).


// "What is alert() in JavaScript?"
// "What is the difference between alert(), prompt(), and confirm()?"

// "What happens to JS execution when an alert() is triggered?"
// → It pauses the script until the user clicks OK.

// "Should we use alert() for debugging?"
// ❌ Not recommended. Use console.log() instead.


// ✅ Sample Interview Q&A
// Q1. What is the use of alert() in JavaScript?
// A: It shows a popup dialog box with a message to the user and pauses script execution until OK is clicked.

// Q2. Can we use alert() in backend JavaScript (Node.js)?
// A: No, alert() is part of the browser’s window object and works only in browsers.

// Q3. What are better alternatives to alert() for debugging?
// A: console.log(), console.warn(), or browser dev tools.


// 🔁 Related Functions
// alert("msg") – just shows a message

// prompt("msg") – takes user input

// confirm("msg") – asks for Yes/No


// ❓ Q: What is the difference between alert(), prompt(), and confirm()?
// Function	Purpose	Takes Input?	Returns Value	Use Case Example
// alert()	Displays a message	❌ No	undefined	Show a warning or notification
// prompt()	Asks user for input	✅ Yes	string or null	Ask user to enter name/age etc.
// confirm()	Asks for confirmation (OK/Cancel)	❌ No (Click)	true (OK), false (Cancel)	Confirm a delete or logout action


// let name = prompt("Hello!");
// console.log(name);

