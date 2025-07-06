// -------------Part 1.4--------------

// Agar id exist nhi karti to o/p null aayega
// let heading = document.getElementById("heading");
// console.dir(heading);   // null


// let button = document.getElementById("myId");
// console.dir(button);

// Selection by class 
// Jb class wala element exist nhi krta to : empty HTML Collection aata h
// let headings = document.getElementsByClassName("myClass");
// console.dir(headings);
// console.log(headings);

// Note :  getElementsByClassName return HTML collection 


// ---------   Part 1.5   -----------

// Element access using tag name or Element selecting with tag
// let parahs = document.getElementsByTagName("p");
// console.dir(parahs);

// ---------   Part 1.6   -----------

// Element access using Query Selector
    // : document.querySelector("myId / myClass / tag")
    // return first element

    // : document.querySelectorAll("myId / myClass / tag")
    // return a NodeList

// paragraph
// let firstEl = document.querySelector("p");
// console.dir(firstEl);

// all paragraph
// let allEl = document.querySelectorAll("p");
// console.dir(allEl);

// class
// let firstEl = document.querySelector(".myClass");
// console.dir(firstEl);

// all class
// let allEl = document.querySelectorAll(".myClass");
// console.dir(allEl);

// let firstEl = document.querySelector("#myId");
// console.dir(firstEl);


// ---------   Part 1.7   -----------

// DOM Manipulation Properties : value (get) bhi kr skte h yaniki check, (set) bhi kr skte h yaniki change/update
// tagName :
// innerText :
// innerHTML :
// innerContent :

// let firstEl = document.querySelector("#myId");
// console.log(firstEl.tagName);

// let firstEl = document.querySelector("p");
// console.dir(firstEl);
// console.log(firstEl.tagName);


// ---------   Part 1.8   -----------

// https://developer.mozilla.org/en-US/docs/Web/API/Node/firstChild
// https://developer.mozilla.org/en-US/docs/Web/API/Node/lastChild

// console.dir(document.body.firstChild);

// Dom tree 
// 3 type of node 
//     : text node
//     : comment nodes 
//     : element nodes  (Imp)


// console.dir(document.querySelector("div"));

// console.log(document.querySelector("div"));

// https://developer.mozilla.org/en-US/docs/Web/API/Element/children
// console.log(document.querySelector("div").children);


// DOM (Document Object Model) is a tree structure of your HTML document.

// 🔹 3 Types of Nodes:
// Element Nodes – HTML tags
// 👉 e.g. <div>, <p>, <h1>

// Text Nodes – Text inside elements
// 👉 e.g. "Hello" in <h1>Hello</h1>

// Comment Nodes – HTML comments
// 👉 e.g. <!-- This is a comment --></h1>


// ---------   Part 1.9   -----------

// innerText : return text content of element and all its children

// let div = document.querySelector("div");
// console.dir(div);
// console.log("div.innerText");
// console.log(div.innerText); // // innerText returns only the visible (rendered) text, not the tags

// console.log(div.innerHTML); // innerHTML returns both text content and HTML tags


// let text = div.innerText = "abch"
// console.log(text);

// let div = document.querySelector("div");
// console.log(div.innerText = "abch");

// let div = document.querySelector("div");
// console.log(div.innerHTML = "<div>inner div</div>");


// let heading = document.querySelector("h1");
// console.log(heading);
// console.log(heading.innerText = "new Heading");

// innerHTML m hum tag bhi likh skte h
// console.log(heading.innerHTML = "<i>new Heading</i>");


// ----------   Part 1.10  -----------

// textContent : return textual content even for hidden elements
// let div = document.querySelector("div");
// console.dir(div);

// let heading = document.querySelector("h1");
// console.log(heading);
// console.log(heading.innerText); // ye show nhi karega kuch bhi

// show krne k liye textContent ka use krna padega
// console.log(heading.textContent);   // old Heading

// ----------   Part 1.11  -----------

// -- Let's Practice --

// Qs. 

// let h2 = document.querySelector("h2");
// console.dir(h2);
// console.dir(h2.innerText);

// console.log(h2.innerHTML = "abc"); // Hello JavaScript! se change hokr abc ho jayegi 

// console.log(h2.innerText = h2.innerText + "from Apna College students");    // concatenate


// ----------   Part 1.12  -----------

// -- Let's Practice --

// Qs. 


// let divs = document.querySelectorAll(".box");
// console.log(divs);
// console.log(divs[0]); // for accessing individual div
// console.log(divs[1]);
// console.log(divs[2]); 

// let divs = document.querySelectorAll(".box");
// divs[0].innerText = "new unique value 1";
// divs[1].innerText = "new unique value 2";
// divs[2].innerText = "new unique value 3";

// let divs = document.querySelectorAll(".box");
// for(div of divs){
//     // console.dir(div);
//     console.log(div.innerText);
// }

let divs = document.querySelectorAll(".box");
let idx = 1;
for(let div of divs){
    div.innerText = `new unique value is ${idx}`;
    idx++;
}