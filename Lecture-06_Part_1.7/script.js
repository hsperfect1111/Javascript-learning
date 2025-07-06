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
let allEl = document.querySelectorAll(".myClass");
console.dir(allEl);

let firstEl = document.querySelector("#myId");
console.dir(firstEl);
