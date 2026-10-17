function getComputerChoice() {
    const random = Math.random();
    if (random < 1/3) {
        return "rock";
    }
    else if (random < 2/3) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function getHumanChoice() {
    const userinput = prompt('enter rock , paper or scissors :');

    if (!userinput) {
    return 'pls enter correct choice';
    }
    const choice = userinput.trim().toLowerCase();
    if (choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        return 'pls enter correct choice';
    }
    else {
        return choice
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(ComputerChoice,HumanChoice) {
   if (ComputerChoice == 'rock') {
    if (HumanChoice == 'rock') {
        return 'its a tie';
    }
    if (HumanChoice == 'paper') {
        humanScore += 1;
        return 'human won';
    }
    if (HumanChoice == 'scissors') {
        computerScore += 1;
        return 'computer won';
    }
   }
   if (ComputerChoice == 'paper') {
    if (HumanChoice == 'rock') {
        computerScore += 1;
        return 'computer won';
    }
    if (HumanChoice == 'paper') {
        return 'its a tie';
    }
    if (HumanChoice == 'scissors') {
        humanScore += 1;
        return 'human won';
    }
   }

    if (ComputerChoice == 'scissors') {
    if (HumanChoice == 'rock') {
        humanScore += 1;
        return 'human won';
    }
    if (HumanChoice == 'paper') {
        computerScore += 1;
        return 'computer won';
    }
    if (HumanChoice == 'scissors') {
        return 'its a tie';
    }
   }
   return 'invalid input';
}


function playGame() {
    humanScore = 0;
    computerScore = 0;
    let round = 0;
    while (round < 5) {
     playRound(getComputerChoice(),getHumanChoice())
     round += 1 ;   
    }
    if (humanScore < computerScore) { 
        return [ 'computer won', `score ${computerScore}`];
    }
    else if (humanScore > computerScore) {
        return [ ' human won', `score ${humanScore}`];
    }
    else {
        return 'tie';
    }
}

console.log(playGame());