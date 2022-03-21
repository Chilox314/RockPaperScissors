
let playerScore = 0; 
let computerScore = 0 ;
let playerInput;
let computerInput;
let computerSelection;
let playerSelection;
const input = document.querySelector("#input");

const score = document.querySelector("#score")
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");

rockButton.addEventListener("click", function() {
    playerInput = "rock"; game(playerInput);
}) 
paperButton.addEventListener("click", function() {
    playerInput = "paper"; game(playerInput);
})
scissorsButton.addEventListener("click", function() {
    playerInput = "scissors"; game(playerInput);
})

//buttoninput gets converted to string and saved in playerInput, then game(playerInput) gets called 

function computerPlay() {
    let randomNumber = Math.floor(Math.random()*3);
    if (randomNumber === 0) {
        return "rock";
    }
    else if (randomNumber === 1) {
        return "paper";
    }
    else if (randomNumber === 2) {
        return "scissors";
    }
    else {
        alert("error!")
    }
    // chooses rock, paper or scissors randomly
};

function play(playerSel) {
    playerSelection = playerSel.toLowerCase();
    
    computerSelection = computerPlay();
    
    if (playerSelection === computerSelection) {
        return "It's a draw!";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        playerScore++;
        return "You win! Rock beats scissors!"
    }
    else if (playerSelection === "rock" && computerSelection === "paper")  {
        computerScore++;
        return "You lose! Paper beats rock"
    }   
    else if (playerSelection === "scissors" && computerSelection === "paper") {
        playerScore++;
        return "You win! Scissors beats paper!"
    }   
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        computerScore++;
        return "You lose! Rock beats scissors!"
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        return "You win! Paper beats rock!"
    }
    else if (playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        return "You lose! Scissors beats paper!"
    }
    // compares the players selection and the computers selection
};

function game() {
    let result = play(playerInput);
    
    if (computerScore === 5) {
        score.textContent = `You've lost. Final Score: You ${playerScore}:${computerScore} Computer. Try again!`;
        computerScore = 0;
        playerScore = 0;
    }
    else if (playerScore === 5) {
        score.textContent = `You've won! Final Score: You ${playerScore}:${computerScore} Computer. Congratulations!`;
        computerScore = 0;
        playerScore = 0;
    }
    else {
        score.textContent = `Score: You ${playerScore}:${computerScore} Computer`;
        input.textContent = `You played: ${playerSelection}. The Computer played: ${computerSelection}. ${result}`
    }
    
    const reset = document.querySelector("#reset")
    reset.addEventListener("click", function() {
        playerScore = 0;
        computerScore = 0;
        input.textContent = "";
        score.textContent = "";
    });

    //To do: Announce Selections, announce winner and reset
}