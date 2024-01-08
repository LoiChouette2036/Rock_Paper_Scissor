function getComputerChoice (){
    // array containing 3 choices for this game
    var choices = ["Rock","Paper","Scissor"];

    // generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * choices.length);

    // get the string corresponding to the randomly generated index
    let choicesRandom = choices[randomNumber];

    return choicesRandom;
}

function getPlayerSelection (){
    var answer = prompt("Write between these 3 : Rock, Paper, Scissor");
    //if (answer === null || answer === "") {
    //    alert("you wrote nothing");
    //  } else {
    //  alert("you wrote: " + answer);
    //  }
    return answer;
}




function playRound(playerSelection, computerSelection){
    // Convert playerSelection to lowercase for case-insensitive comparison
    let lowerCaseSelection = playerSelection.toLowerCase();

    switch (lowerCaseSelection){
        case "rock":
            if(computerSelection === "Paper"){
                console.log("You lose! Paper beats Rock");
                return 0;
            } else if (computerSelection === "Scissor"){
                console.log("You Win! Rock beats Scissor");
                return 1;
            } else if (computerSelection === "Rock"){
                console.log("It's tie !");
                return 0;
            } else{
                console.log("Il y a un problème il faut recommencer");
                break;
            }
        case "paper":
            if (computerSelection === "Rock"){
                console.log("You Win! Paper beats Rock");
                return 1;
            } else if (computerSelection === "Scissor"){
                console.log("You lose! Scissor beats paper");
                return 0;
            } else if (computerSelection === "Paper"){
                console.log("It's a tie!");
                return 0;
            } else {
                console.log("Il y a un problème il faut recommencer");
                break;
            }
        case "scissor":
            if(computerSelection === "Paper"){
                console.log("You Win! Scissor beats paper");
                return 1;
            } else if (computerSelection === "Rock"){
                console.log("You lose! Rock beats scissor");
                return 0;
            } else if (computerSelection === "Scissor"){
                console.log("It's a tie!");
                return 0;
            } else {
                console.log("Il y a un problème, il faut recommencer");
                break;
            }

    }
}

