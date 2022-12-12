//DECLARING VARIABLES
let playerScore = 0;
let computerScore = 0;
let roundWinner = ''



function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'        
    }
}
console.log(getComputerChoice());

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }
    if (
       (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
       (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
       (playerSelection === 'PAPER' && computerSelection === 'ROCK')
    ) {
        playerScore++
        roundWinner = 'player'
    }
    if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK') 
    ) {
        computerScore++
        roundWinner = 'computer'
    }
    updateScoreMessage(roundWinner, playerSelection, computerSelection)
    
    console.log(playRound(playerSelection, computerSelection))
}