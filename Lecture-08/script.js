// https://developer.mozilla.org/en-US/docs/Web/Events
// https://developer.mozilla.org/en-US/docs/Web/API/Element#mouse_events

// part5

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };


// part6

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// let div = document.querySelector("div");
// div.onmouseover = () => {
//     console.log("you are inside div");
// };

// part7

// let btn1 = document.querySelector("#btn1");

// // <!-- // Agar humne event ko handle kr liya html m bhi aur JS m bhi to humara Js ka code hi chalega uski priority zyada hoti h  -->
// btn1.onclick = () => {
//     console.log("btn1 was clicked");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// Agar humne inline tarike se handle kiya hua h apne event ko (html m) , aur humne JS k andar handel kiya hua h apne event ko to unmese priority JS wale code ki hoti h inline handling ki nhi hoti 

// “If we handle an event using both inline HTML and JavaScript (in script), does the JavaScript event handler get higher priority than the inline one?”

// ✅ Correct Explanation:
// Actually, inline event handling has higher priority than JavaScript-assigned events if both are present — unless you overwrite it using addEventListener.

// part8
// Agar hume ek baar event ko handle kr liya to hum dobara se same event ko handle nhi kr skte . 
// Agar humne dobara se same line likhi to purane wala code (upar wala code) overwrite ho jayega .

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = () => {
//     console.log("HANDLER1");
//     let a = 25;
//     a++;
//     console.log(a);
// };

// btn1.onclick = () => {
//     console.log("HANDLER2");    // ye wala handler purane wale ko overwrite kr dega
// };


//part9
// Event Object : type, target, click , clientX, clientY

// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };


// part10
// mouseover pr evt ko use krna 
// let btn1 = document.querySelector("#btn1");

// btn1.onclick = (evt) => {
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

// let div = document.querySelector("div");
// div.onmouseover = (evt) => {       // // mouseover pr evt ko use krna 
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
//     console.log(evt.clientX, evt.clientY);
// };

// part11
// Event Listeners

// Event ko handle krne k 2 tarike 
// 1. inline handling : HTML code bulki ho jata h isme
// 2. Inside JS Node.event = () => {} : ek baar me ek hi  function ko likh kr apne event ko  handle kr skte h 
// 3. Event Listeners : 
// node.addEventListener(event, callback);
// node.removeEventListener(event, callback);

// callback : callback ek aisa function hota h jo dusre function m as a argument jata h
// is callback fun m jo bhi likha hota h woh execute ho jata h
// callback ko handler bhi kehte h 

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked");
// });

// let div = document.querySelector("div");

//      --------------------------

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked");
// });


// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked-handler2");
// });

//      --------------------------

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked");
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.target);
// });


// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked-handler2");
// });


//      --------------------------
// node.removeEventListener(event, callback)

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked - handler1");
// });


// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked - handler3");
// });


// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler4");
// });


//          ------- -----------
// we want to remove handler3
// NOTE : the callback refrence should be same to remove 

// let btn1 = document.querySelector("#btn1");

// btn1.addEventListener("click", (evt) => {
//     console.log("button1 was clicked - handler1");
// });


// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler2");
// });

// Jb hume lgta h ki kisi function ko baad m remove krna pd skta h to us fun ko kisi variable m store kra lete h
// const handler3 = () => {
//     console.log("button1 was clicked - handler3");
// };
// btn1.addEventListener("click", handler3);


// btn1.addEventListener("click", () => {
//     console.log("button1 was clicked - handler4");
// });

// btn1.removeEventListener("click", handler3);


// part11
// Let's Practice 

// let modeBtn = document.querySelector("#mode");
// modeBtn.addEventListener("click", () => {
//     console.log("you are trying to change mode");
// })

//          --------------------

// ab hume aisa button create krna h jo ek baar click krne pr dark mode m ho jaye aur dobara click krne pr light mode m 

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if(currMode === "light"){
//         currMode = "dark";
//     } else {
//         currMode = "light";
//     }
//     console.log(currMode);
// });


//          --------------------

// Ab mujhe currentmode ko dark banana h 

// let modeBtn = document.querySelector("#mode");
// let currMode = "light";

// modeBtn.addEventListener("click", () => {
//     if(currMode === "light"){
//         currMode = "dark";
//         document.querySelector("body").style.backgroundColor = "black";
//     } else {
//         currMode = "light";
//         document.querySelector("body").style.backgroundColor = "white";
//     }

//     console.log(currMode);
// });


//part12   --------------------

//  we can do the same thing with classes in style.css 

let modeBtn = document.querySelector("#mode");
let body = document.querySelector("body");
let currMode = "light";

modeBtn.addEventListener("click", () => {
    if(currMode === "light"){
        currMode = "dark";
        body.classList.add("dark");
        body.classList.remove("light");
    } else {
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("dark");
    }

    console.log(currMode);
});