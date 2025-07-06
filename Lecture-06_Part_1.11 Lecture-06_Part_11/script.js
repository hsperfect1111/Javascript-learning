// textContent : return textual content even for hidden elements
let div = document.querySelector("div");
console.dir(div);

let heading = document.querySelector("h1");
console.log(heading);
console.log(heading.innerText); // ye show nhi karega kuch bhi

// show krne k liye textContent ka use krna padega
console.log(heading.textContent);   // old Heading