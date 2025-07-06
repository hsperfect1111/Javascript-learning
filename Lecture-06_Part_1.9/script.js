// https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
// https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild

console.dir(document.body.firstChild);

// Dom tree 
// 3 type of node 
//     : text node
//     : comment nodes 
//     : element nodes  (Imp)


console.dir(document.querySelector("div"));

console.log(document.querySelector("div"));

// https://developer.mozilla.org/en-US/docs/Web/API/Element/children
console.log(document.querySelector("div").children);


// DOM (Document Object Model) is a tree structure of your HTML document.

// 🔹 3 Types of Nodes:
// Element Nodes – HTML tags
// 👉 e.g. <div>, <p>, <h1>

// Text Nodes – Text inside elements
// 👉 e.g. "Hello" in <h1>Hello</h1>

// Comment Nodes – HTML comments
// 👉 e.g. <!-- This is a comment --></h1>
