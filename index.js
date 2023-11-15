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
    if (player_score > computer_score) { 
        document.querySelector(".round-winner").innerHTML = ""
        return  document.querySelector(".grand-winner").innerHTML = "Grand Winner: Player Wins";
    }
    else if (computer_score>player_score) {
        document.querySelector(".round-winner").innerHTML = ""
        return  document.querySelector(".grand-winner").innerHTML="Grand Winner: Computer Wins"
    }
    else { 
        document.querySelector(".round-winner").innerHTML = ""
        return  document.querySelector(".grand-winner").innerHTML="Grand Winner: Tie";
    }
}

function playRound(playerSelection, computerSelection) {

    if (winCondition[playerSelection] == computerSelection) {
        playerWin();
        return document.querySelector(".round-winner").innerHTML="Player Won!";
    } else if (playerSelection == computerSelection) {
        playerWin();
        computerWin();
        return document.querySelector(".round-winner").innerHTML="Its a Tie!";
    } else {
        computerWin();
        return document.querySelector(".round-winner").innerHTML="Computer Won!";
    }

}

function resetGame (){
    player_score=0;
    computer_score=0;
    document.querySelector(".round-winner").innerHTML = "";
    document.querySelector(".grand-winner").innerHTML = "";
}

var btns = document.querySelectorAll("button");

btns.forEach(btn =>{

    btn.addEventListener("click",function(e) {
        if (player_score>=5 || computer_score>=5) {
            resetGame();
        }
        playRound(e.target.value, getComputerChoice());
        document.querySelector(".player-score").innerHTML= player_score;
        document.querySelector(".computer-score").innerHTML= computer_score;
        if(player_score==5 || computer_score==5) chooseWinner(player_score,computer_score);
    });
    
});



