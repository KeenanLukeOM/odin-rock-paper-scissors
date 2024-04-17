"Use strict";

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
            return `You won! You chose ${playerSelection}, which beats ${computerSelection}`
        } 

    // Winning conditions for the computer
        else if (playerSelection === "Rock" && computerSelection === "Paper" 
        || playerSelection === "Paper" && computerSelection === "Scissors"
        || playerSelection === "Scissors" && computerSelection === "Rock") {
            return `You lose! The computer picked ${computerSelection}, which beats ${playerSelection}.`
        }

    // Returns an invalid string if playerSelection is not eligible
        else {
            return `Are you sure that's a valid move? ${playerSelection} isn't rock, paper, or scissors!`
        }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playerInput = prompt("Rock, Paper, or Scissors?");
        computerInput = getComputerChoice();

        console.log(playRound(playerInput, computerInput))
    }
}

playGame()