let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;   // playerX, playerO

// 2D-Array
// let arr2 = [["apple","litchi"], ["potato","mushroom"], ["pants","shirts"]];
// console.log(arr2);
// console.log(arr2[0]);
// console.log(arr2[0][0]);
// console.log(arr2[0][1]);
// console.log(arr2[1][0]);

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
]

const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

// boxes.forEach((box) => {
//     box.addEventListener(("click"), () => {
//         console.log("box was clicked");
//         box.innerText = "Abcd";
//     });
// });

boxes.forEach((box) => {
    box.addEventListener(("click"), () => {
        // console.log("box was clicked");
        
        // Check whose turn it is // If it's O's turn, mark the box with 'O' and switch to X's turn
        if(turnO){
            box.innerText = "O";    // Display 'O' in the box
            turnO = false;  // Next turn will be for X 
        } else {
            // If it's X's turn, mark the box with 'X' and switch to O's turn
            box.innerText = "X";
            turnO = true;   // Next turn will be for O
        }
        box.disabled = true;    // Disable the box so it can't be clicked again.

        checkWinner();
    });
});

// const checkWinner = () => {
//     for(let pattern of winPatterns){
//         // console.log(pattern);
//         console.log(pattern[0], pattern[1], pattern[2]);
//     }
// };

// const checkWinner = () => {
//     for(let pattern of winPatterns){
//         // console.log(pattern);
//         console.log(pattern[0], pattern[1], pattern[2]);
//         // boxes ki value aa gai isse
//         console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);
//     }
// };


// const checkWinner = () => {
//     for(let pattern of winPatterns){
//         // console.log(pattern);
//         console.log(pattern[0], pattern[1], pattern[2]);
//         // boxes k andar ki value print krni h to use innerText
//         console.log(boxes[pattern[0]].innerText, boxes[pattern[1]].innerText, boxes[pattern[2]].innerText);
//     }
// };

const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");  // It removes the CSS class hide from the element msgContainer.
    disableBoxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns){

        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                // console.log("winner", pos1Val);
                // winner dikhane k liye ek naya function bana rahe h
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

// solve : Practice Question and leetcode 1275 Find winner on a Tic Tac Toe Game 

// 🔹 classList in JavaScript – Explained Simply
// classList is a built-in property of DOM elements in JavaScript that gives you an easy way to add, remove, toggle, or check CSS classes on an element.

// 🔸 Common methods of classList:
// Method	What it does
// element.classList.add("x")	Adds class x to the element
// element.classList.remove("x")	Removes class x from the element
// element.classList.toggle("x")	Adds class x if not present, removes if it is
// element.classList.contains("x")	Returns true if class x is present


