const choices = ["rock", "paper", "scissors"];
const winners = [];

function game() {
    //play the game, play five rounds, console based
    for(let i =1; i <= 5; i++) {
        playRound(i);
    }
    logWinner();
    
}    

function playRound(round) {
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();
    //console.log(computerSelection);
    const winner = checkWinner(playerSelection, computerSelection);
    winners.push(winner);
    logRound(playerSelection,computerSelection,winner,round);
    
}

function playerChoice () {
    //get input from player
    let input = prompt("Type Rock, Paper or Scissors");
    while (input == null) {
        input = prompt("Type Rock, Paper or Scissors");
    }
    input = input.toLowerCase();
    let check = validateInput(input);
    while (check == false) {
        input = prompt("Type Rock, Paper or Scissors. Spelling needs to be exact, but capitalization doesent matter")
        while (input == null) {
            input = prompt("Type Rock, Paper or Scissors");
        }
        input = input.toLowerCase();
        check = validateInput(input);
        
    }
    return input;
}

function computerChoice() {
    //get random input for computer
    return choices[Math.floor(Math.random()*choices.length)]
}

function validateInput(choice) {
    if (choices.includes(choice)) {
        return true;
    } else {
        return false;
    }
}

function checkWinner(choicePlayer, choiceComputer) {
    if (choicePlayer === choiceComputer) {
        return "Tie";
    } else if (
        (choicePlayer === "rock" && choiceComputer === "scissors") ||
        (choicePlayer === "paper" && choiceComputer === "rock") ||
        (choicePlayer === "scissors" && choiceComputer === "paper") 
    ) {
        return "Player"
    } else {
        return "Computer"
    }
}

function logWinner(){
    let playerWins = winners.filter((item) => item == "Player").length;
    let computerWins = winners.filter((item) => item == "Computer").length;
    let ties = winners.filter((item) => item == "Tie").length;
    console.log("Results");
    console.log("Player Wins:", playerWins);
    console.log("Computer Wins:", computerWins);
    console.log("Ties:", ties)
}

function logRound(playerChoice, computerChoice, winner, round){
    console.log("Round:", round);
    console.log("Player Choose:",playerChoice);
    console.log("Computer Choose:", computerChoice);
    console.log(winner, "Won the Round");
    console.log("------------------------------------");
}

game();

