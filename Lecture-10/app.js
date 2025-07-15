let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const randIdx = Math.floor(Math.random() * 3);
    return options[randIdx];
};

// const drawGame = () => {
//     console.log("Game was draw.");
//     // msg k innerText ko change to You lose!, You win!, and Game was draw.
//     msg.innerText = "Game was Draw. Play again."
//     msg.style.backgroundColor = "#081b31";
// };

const drawGame = () => {
    // msg k innerText ko change to You lose!, You win!, and Game was draw.
    msg.innerText = "Game was Draw. Play again."
    msg.style.backgroundColor = "#081b31";
};

// const showWinner = (userWin, userChoice, compChoice) => {
//     if(userWin){
//         console.log("you win");
//         // msg k innerText ko change to You lose!, You win!, and Game was draw.
//         msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
//         msg.style.backgroundColor = "green";
//     } else {
//         console.log("you lose");
//         // msg k innerText ko change to You lose!, You win!, and Game was draw.
//         msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
//         msg.style.backgroundColor = "red";
//     }
// };

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin){
        userScore++;
        userScorePara.innerText = userScore;
        // msg k innerText ko change to You lose!, You win!, and Game was draw.
        msg.innerText = `You win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        // msg k innerText ko change to You lose!, You win!, and Game was draw.
        msg.innerText = `You lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

// random choice generate by computer
// const playGame = (userChoice) => {
//     console.log("user choice", userChoice);
//     // Generate computer choice
//     const compChoice = genComChoice();
//     console.log("comp choice", compChoice);

//     if(userChoice === compChoice){
//         // Draw Game
//         drawGame();
//     } else {
//         let userWin = true;
//         if(userChoice === "rock"){
//             // scissors, paper
//             userWin = compChoice === "paper"? false : true;
//         } else if(userChoice == "paper"){
//             // rock, scissors
//             userWin = compChoice === "scissors"? false : true;
//         } else {
//             //rock, paper
//             userWin = compChoice === "rock"? false : true;
//         }
//         showWinner(userWin, userChoice, compChoice);
//     }
// };

// random choice generate by computer
const playGame = (userChoice) => {
    // Generate computer choice
    const compChoice = genComChoice();

    if(userChoice === compChoice){
        // Draw Game
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock"){
            // scissors, paper
            userWin = compChoice === "paper"? false : true;
        } else if(userChoice == "paper"){
            // rock, scissors
            userWin = compChoice === "scissors"? false : true;
        } else {
            //rock, paper
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
};


// const choices = document.querySelectorAll(".choice");
// choices.forEach((choice) => {
//     console.log(choice);    // yaha pr har ek individual choice print krva rahe h mtlb har ek individual choice wala div print krva rahe h
//     choice.addEventListener("click", () => {
//         console.log("choice was clicked");
//     })
// });

// Upar likha h :
// const choices = document.querySelectorAll(".choice");
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        // console.log("clicked on ", userChoice);
        playGame(userChoice);
    });
});

