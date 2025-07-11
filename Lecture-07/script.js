// =================Part1=======================

// Notes 
// DOM Manipulation
// Attribute 
//     • getAttribute(attr) // to get the attribute value 
//     • setAttribute(attr, value) // to set the attribute val th
// Style 
// • node.style  


// css                 ->     vs js 
// color               ->     color 
// background-color    ->     backgroundColor
// font-size           ->     fontSize 

// let div = document.querySelector("div");
// console.log(div);

let id = div.getAttribute("id");
console.log(id);

// =================Part2==================

// let div = document.querySelector("div");
// console.log(div);

// let name = div.getAttribute("name");
// console.log(name);

// =================Part3=======================

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// =================Part4=======================
// let para = document.querySelector("p");
// console.log(para.setAttribute("class","newClass"));

// =================Part5=======================

let div = document.querySelector("div");
console.log(div.style);

// =================Part6=======================
// let div = document.querySelector("div");
// console.log(div);

// ---

// let div = document.querySelector("div");
// console.log(div.style);

// =================Part7=======================

// change backgroundColor through js only 
// let div = document.querySelector("div");
// div.style.backgroundColor = "green";

// ---

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";

// ---

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";

// ---

// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.fontSize = "26px";
// div.innerHTML = "Hello!";

// ---

// visibility hidden property 
// let div = document.querySelector("div");
// div.style.backgroundColor = "green";
// div.style.backgroundColor = "purple";
// div.style.visibility = "hidden";
// div.style.fontSize = "26px";


// css                 ->     vs js 
// color               ->     color 
// background-color    ->     backgroundColor
// font-size           ->     fontSize 


// =================Part8=======================

// DOM Manipulation 
//  Insert Elements 
//      • node.append(el)   // adds at the end of node (inside)
//      • node.prepend(el)  // adds at the start of node (inside)
//      • node.before(el)   // adds before the node (outside)
//      • node.after(el);   // adds after the node (outside)


//  Delete Element 
//      • node.remove(el)   // removes the node



// How to add new element add
// 1. create element 
// 2. add element 

// To create element use :
// document.createElement("div");


// How to add new element add
// 1. create element    // 2. add element 
// let newBtn = document.createElement("button");
// console.log(newBtn);

// ---

// let newBtn = document.createElement("button");
// console.log(newBtn.innerText);  // ' ' -> completely empty


// ---

// let newBtn = document.createElement("button");
// newBtn.innerText = "click-me!";
// console.log(newBtn.innerText);  // ' ' -> completely empty


// ---

// I have created the button, but how do I display it on the screen?
// --> we want that inside this unorderlist div , after this my button should come
// Solution : I have to append it inside the div
// appending inside the div means add at the end of the node

// let newBtn = document.createElement("button");
// newBtn.innerText = "click-me!";
// console.log(newBtn.innerText);  // ' ' -> completely empty

// let div = document.querySelector("div");
// div.append(newBtn);


// ---

// let newBtn = document.createElement("button");
// newBtn.innerText = "click-me!";
// console.log(newBtn.innerText);  // ' ' -> completely empty

// let div = document.querySelector("div");
// div.prepend(newBtn);


// ---

// let newBtn = document.createElement("button");
// newBtn.innerText = "click-me!";
// console.log(newBtn.innerText);  // ' ' -> completely empty

// let div = document.querySelector("div");
// div.before(newBtn);

// ---

// let newBtn = document.createElement("button");
// newBtn.innerText = "click-me!";
// console.log(newBtn.innerText);  // ' ' -> completely empty

// let div = document.querySelector("div");
// div.after(newBtn);

// ---

// paragraph k baad access krna h button ko 
// let newBtn = document.createElement("button");
// newBtn.innerText = "click-me!";
// console.log(newBtn.innerText);  // ' ' -> completely empty

// let p = document.querySelector("p");
// p.after(newBtn);


// ---

// Create Heading on page k top pr 

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>"
// document.querySelector("body").prepend(newHeading);

// ---

// How to delete paragraph 
// let para = document.querySelector("p");
// para.remove();

// ---

// How to delete newHeading 

// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am new!</i>"
// document.querySelector("body").prepend(newHeading);

// newHeading.remove();

// https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
// https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild

// ---

// =================Part9=======================
// Lets Practice 
// Qs. 
// let newBtn = document.createElement("button");
// newBtn.innerText = "click-me!";
// give it background color red and text color white 
// how to give style 
// we write node.style.backgroundColor
// newBtn.style.color = "white";
// newBtn.style.backgroundColor = "red";
// document.querySelector("body").prepend(newBtn);


// =================Part10==================

// Qs. 
// Access para
// let para = document.querySelector("p");
// console.log(para);

// ---

// Access para k class ki value 
// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// ---

// let para = document.querySelector("p");
// console.log(para.getAttribute("class"));

// change name of the class 
// console.log(para.setAttribute("class", "newClass"));

// text color wapis se black ho gaya 
// purani class hat gai to uski styling bhi hat jati h 
// m nhi chahta ki iski purani styling hate 
// I want this element to get two classes
// setAttribute prop completely overwrite the class 

// ---

// class ka naam add krne k liye append krne k liye hum kabhi bhi setAttribute ko use nhi krte uske liye use classList
// https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
// let para = document.querySelector("p");
// console.log(para);
// console.log(para.classList);

// Notes:
// class Method => 1. add 2. remove
// para.classList.add("anotherclass");
// para.classList.remove("foo");

// ---

// let para = document.querySelector("p");
// console.log(para.classList.add("newClass"));

// ---

// let para = document.querySelector("p");
// console.log(para.classList.add("newClass"));
// console.log(para.classList);    // length=2 iska mtlb paragraph k andar 2 classes h ek content dusri newClass

// ---

let para = document.querySelector("p");
console.log(para.classList.add("newClass"));
console.log(para.classList);    // length=2 iska mtlb paragraph k andar 2 classes h ek content dusri newClass
console.log(para.classList.remove("newClass"));
console.log(para.classList);    // length=2 iska mtlb paragraph k andar 2 classes h ek content dusri newClass


// create new class in css and try to append this class to the <p> element 
// let para = document.querySelector("p");
// ab is paragraph k andar ek aur class add krni h 
// console.log(para.setAttribute("class","newContent"));


