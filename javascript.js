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
    PlayerSelection = (playerSelection.substring(0, 1).toUpperCase() + playerSelection.substr(1).toLowerCase()).replace( /\s/g, '')

    // Winning conditions for the player
    if (PlayerSelection === "Rock" && computerSelection === "Scissors" 
        || PlayerSelection === "Paper" && computerSelection === "Rock"
        || PlayerSelection === "Scissors" && computerSelection === "Paper") {
            return `You won! You chose ${PlayerSelection}, which beats ${computerSelection}`
        } 

    // Winning conditions for the computer
        else if (PlayerSelection === "Rock" && computerSelection === "Paper" 
        || PlayerSelection === "Paper" && computerSelection === "Scissors"
        || PlayerSelection === "Scissors" && computerSelection === "Rock") {
            return `You lose! The computer picked ${computerSelection}, which beats ${PlayerSelection}.`
        }
        else {
            return `Are you sure that's a valid move? ${PlayerSelection} isn't rock, paper, or scissors!`
        }

}


console.log(playRound("Rock", "Paper"))