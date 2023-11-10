let winCondition= {
    "rock":"scissors",
    "paper":"rock",
    "scissors":"paper"
    
}

function getComputerChoice () {
    arr=["rock","paper","scissors"];
    return arr[(Math.floor(Math.random() * arr.length))];
}



function playRound(playerSelection,computerSelection){
    if (winCondition[playerSelection]==computerSelection){
        return ("Player Wins");
    } else if(playerSelection==computerSelection){
        return ("It is a Tie");
    } else {
        return ("Computer Wins")
    }
}

const playerSelection="paper";
const computerSelection= getComputerChoice();
console.log(`computer selected: ${computerSelection}`);
console.log(playRound(playerSelection,computerSelection));