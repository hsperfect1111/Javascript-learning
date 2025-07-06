// Agar id exist nhi karti to o/p null aayega
// let heading = document.getElementById("heading");
// console.dir(heading);   // null


let button = document.getElementById("myId");
console.dir(button);

// Selection by class 
// Jb class wala element exist nhi krta to : empty HTML Collection aata h
let headings = document.getElementsByClassName("myClass");
console.dir(headings);
console.log(headings);

// Note :  getElementsByClassName return HTML collection 
