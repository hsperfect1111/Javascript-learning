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
