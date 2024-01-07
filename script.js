function getComputerChoice (){
    // array containing 3 choices for this game
    var choices = ["Rock","Paper","Scissor"];

    // generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * choices.length);

    // get the string corresponding to the randomly generated index
    let choicesRandom = choices[randomNumber];

    return choicesRandom;
}

function playRound(playerSelection, computerSelection){
    // Convert playerSelection to lowercase for case-insensitive comparison
    let lowerCaseSelection = playerSelection.toLowerCase();

    // initize variable for winner
    let win ;

    switch (lowerCaseSelection){
        case "rock":
            if(computerSelection === "Paper"){
                return 0;
            } else if (computerSelection === "Scissor"){
                return 1;
            } else if (computerSelection === "Rock"){
                return 2;
            } else{
                console.log("Il y a un problème il faut recommencer");
                break;
            }
        case "paper":
            if (computerSelection === "Rock"){
                return 1;
            } else if (computerSelection === "Scissor"){
                return 0;
            } else if (computerSelection === "Paper"){
                return 2;
            } else {
                console.log("Il y a un problème il faut recommencer");
                break;
            }
        case "rock":
            if(computerSelection === "Paper"){
                return 0;
            } else if (computerSelection === "Scissor"){
                return 1;
            } else if (computerSelection === "Rock"){
                return 2;
            } else {
                console.log("Il y a un problème, il faut recommencer");
                break;
            }

    }
}