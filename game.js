const rock = "ROCK";
const paper = "PAPER";
const scissors = "SCISSORS";

let playerChoice = prompt().toUpperCase();
console.log(playerChoice);
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
            }
            else if(computerSelection == paper){
                result = "Computer Wins , Paper Beats Rock"
            }
            else {
                result = "No Winners : ROCK AND ROCK";
            }
            break;
        case paper:
           if(computerSelection == scissors){
                result = "Computer Wins , Scissors Beats Paper";
            }
            else if(computerSelection == rock){
                result = "You Win , Paper Beats Rock"
            }
            else {
                result = "No Winners , PAPER AND PAPER";
            }
        case scissors:
            if(computerSelection == rock){
                result = "Computer Wins , Rock Beats Scissors";
            }
            else if(computerSelection == paper){
                result = "You Win , Scissors Beats Paper"
            }
            else {
                result = "No Winners , SCISSORS AND SCISSORS";
            }
    }
    return result;
}



 console.log(playRound(playerChoice,computerPlay()));
