let winCondition = {
    "rock": "scissors",
    "paper": "rock",
    "scissors": "paper"

}

var player_score=0;
var computer_score=0;

function getComputerChoice() {
    arr = ["rock", "paper", "scissors"];
    return arr[(Math.floor(Math.random() * arr.length))];
}

function playerWin (){
    return ++player_score;
}
function computerWin (){
    return ++computer_score;
}

function chooseWinner(player_score,computer_score){
    if (player_score > computer_score) { return "Grand Winner: Player Wins";}
    else if (computer_score>player_score) {return "Grand Winner: Computer Wins";}
    else {return "Grand Winner: Tie";}
}

function playRound(playerSelection, computerSelection) {
    if (winCondition[playerSelection] == computerSelection) {
        playerWin();
        return ("Player Wins");
    } else if (playerSelection == computerSelection) {
        playerWin();
        computerWin();
        return ("It is a Tie");
    } else {
        computerWin();
        return ("Computer Wins");
    }
}

function game() {
    
    for(let i=1;i<=5;i++){
        const playerSelection = prompt("choose your selection");
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection.toLowerCase(),computerSelection));
        
    }
    return console.log(chooseWinner(player_score,computer_score));
}

game();