const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";

let playerScore = 0;
let computerScore = 0;

function computerPlay(){
    let computerGuess = Math.floor(Math.random() * 3);
    let computerChoice;
    if(computerGuess == '0'){
        computerChoice = rock;
    }
    else if (computerGuess == '1'){
        computerChoice = paper;
    }
    else{
        computerChoice = scissors;
    }
    return computerChoice;
}

function playRound(playerSelectionIs,computerSelection){
    let result;
    switch(playerSelectionIs){
        case rock:
            if(computerSelection == scissors){
                result = "You Win , Rock Beats Scissors ";
                playerScore += 1;
            }
            else if(computerSelection == paper){
                result = "Computer Wins , Paper Beats Rock"
                computerScore += 1;
            }
            else {
                result = "No Winners : ROCK AND ROCK";
            }
            break;
        case paper:
           if(computerSelection == scissors){
                result = "Computer Wins , Scissors Beats Paper";
                computerScore += 1;               
            }
            else if(computerSelection == rock){
                result = "You Win , Paper Beats Rock"
                playerScore += 1;
            }
            else {
                result = "No Winners , PAPER AND PAPER";
            }
            break;
        case scissors:
            if(computerSelection == rock){
                result = "Computer Wins , Rock Beats Scissors";
                computerScore += 1;                
            }
            else if(computerSelection == paper){
                result = "You Win , Scissors Beats Paper"
                playerScore += 1;
            }
            else {
                result = "No Winners , SCISSORS AND SCISSORS";
            }
            break;
        default:
            result = "Wrong Input please choose from (rock,paper,scissors)";
    }
    return result;
}

for(let i = 0; i<5 ; i++){
    let playerChoice = prompt().toUpperCase();
    console.log(playRound(playerChoice,computerPlay()));
    }


if (computerScore > playerScore){
    console.log(`Computer Wins , Your Score ${playerScore} and Computer Score ${computerScore}`);
}
else if (computerScore < playerScore){
    console.log(`You Win , Your Score ${playerScore} and Computer Score ${computerScore}`);
}
else {
    console.log("Equal each other no one WINS");
}
