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




function playRound(){

    let playerSelection = getPlayerSelection();
    let computerSelection = getComputerChoice();

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
                return 2;
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
                return 2;
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
                return 2;
            } else {
                console.log("Il y a un problème, il faut recommencer");
                break;
            }

    }
}

function game(){
    //initalize array for the result of the previous round
    let resultArray = [];

    for(let i = 0 ; i < 5 ; i++ ){
        let j = i + 1;
        console.log("Round " + j );
        //we call the function playRound in order to play
        let resultRound = playRound();
        // we put it in the end of this array
        resultArray.push(resultRound);
    }

    console.log(resultArray);

    let numberWin = 0;
    let numberLose = 0;
    let numberTie = 0;


    for(let k = 0 ; k < resultArray.length ; k++){

        switch( resultArray[k] ) {
            case 0 :
                numberLose++;
                break;
            case 1 :
                numberWin++;
                break;
            case 2 :
                numberTie++;
                break;
        }
    }

    console.log("number of Victory " + numberWin);
    console.log("number of loose " + numberLose);
    console.log("number of Tie " + numberTie);

    if( numberWin > numberLose ){
        console.log("You Win against the computer !");
    }else if (numberWin < numberLose ){
        console.log("You lose against the computer !");
    }else if (numberWin===numberLose){
        console.log("It's a tie ! you should rematch in order to not be replace by Computer");
    }

}

//ceci est pour oir si tout marche