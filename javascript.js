"Use strict";

let playerScore = 0;
let computerScore = 0;

let playerScoreTracker = document.querySelector("#playerScore")
let computerScoreTracker = document.querySelector("#computerScore")

function getComputerChoice() {
    let rand = Math.floor(Math.random() * 3)

    if (rand === 0) {
        return "Rock"
    } else if (rand === 1) {
        return "Paper"
    } else if (rand === 2) {
        return "Scissors"
    }
}

function playRound(playerSelection, computerSelection) {
    playerSelection = (playerSelection.substring(0, 1).toUpperCase() + playerSelection.substr(1).toLowerCase()).replace( /\s/g, '')

    // Winning conditions for the player
    if (playerSelection === "Rock" && computerSelection === "Scissors" 
        || playerSelection === "Paper" && computerSelection === "Rock"
        || playerSelection === "Scissors" && computerSelection === "Paper") {
            playerScore = playerScore + 1
            playerScoreTracker.textContent = `Player: ${playerScore}`
            return `You won! You chose ${playerSelection}, which beats ${computerSelection}`
        } 

    // Winning conditions for the computer
        else if (playerSelection === "Rock" && computerSelection === "Paper" 
        || playerSelection === "Paper" && computerSelection === "Scissors"
        || playerSelection === "Scissors" && computerSelection === "Rock") {
            computerScore = computerScore + 1
            computerScoreTracker.textContent = `Computer: ${computerScore}`
            return `You lose! The computer picked ${computerSelection}, which beats ${playerSelection}.`
        }

    // Returns the tie condition
        else if (playerSelection === "Rock" && computerSelection === "Rock" 
        || playerSelection === "Paper" && computerSelection === "Paper"
        || playerSelection === "Scissors" && computerSelection === "Scissors") {
            return `You tied! Both you and the computer chose ${computerSelection}!`
        }

    // Returns an invalid string if playerSelection is not eligible
        else {
            return `Are you sure that's a valid move? ${playerSelection} isn't rock, paper, or scissors!`
        }
}

let buttons = document.querySelectorAll("button")
let resultContainer = document.querySelector("#resultContainer")
let round = document.querySelector("#round")
let roundTotal = 0

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        playGame(button.id)
    })
})

function playGame(input) {
    // Creates required elements
    const resultText = document.createElement("p")
    const finalResultText = document.createElement("p")
    finalResultText.style.fontWeight = "Bolder"

    // Takes input and generates computer choice
    playerInput = input
    console.log(playerInput)
    computerInput = getComputerChoice();

    // Plays the round
    let result = playRound(playerInput, computerInput)

    // Displays result
    resultText.textContent = result
    resultContainer.appendChild(resultText)

    // Adds one to round total
    roundTotal = roundTotal + 1
    round.textContent = `Current round: ${roundTotal}`

    // Displays a final score if a player reaches 5 wins
    if (playerScore === 5) {
        finalResultText.textContent = `Congratulations! You've taken the win against the computer. ${playerScore} to ${computerScore}, to be exact!`
        resultContainer.appendChild(finalResultText)
    } else if (computerScore === 5) {
        finalResultText.textContent = `Ouch! The computer takes the win. ${computerScore} to ${playerScore}. You hate to see it.`
    }
};



// Plays five games

// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         playerInput = prompt("Rock, Paper, or Scissors?");
//         computerInput = getComputerChoice();

//         console.log(playRound(playerInput, computerInput))
//     }
// }

