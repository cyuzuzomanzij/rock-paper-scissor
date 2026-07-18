const choices = ["rock", "paper", "scissor"];

const playerDisplay = document.getElementById("playDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");

const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");


let playerScore = 0;
let computerScore = 0;


function playGame(playerChoice){

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    let result = "";


    if(playerChoice === computerChoice){

        result = "Draw";

    }else{

        switch(playerChoice){

            case "rock":
                result = (computerChoice === "scissor") 
                ? "You win!" 
                : "You lose!";
                break;


            case "paper":
                result = (computerChoice === "rock") 
                ? "You win!" 
                : "You lose!";
                break;


            case "scissor":
                result = (computerChoice === "paper") 
                ? "You win!" 
                : "You lose!";
                break;
        }
    }


    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;


    resultDisplay.classList.remove("greenText","redText");


    if(result === "You win!"){

        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;

    }

    else if(result === "You lose!"){

        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;

    }

}