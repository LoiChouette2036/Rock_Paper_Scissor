function getComputerChoice (){
    // array containing 3 choices for this game
    var choices = ["Rock","Paper","Scissor"];

    // generate a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * choices.length);

    // get the string corresponding to the randomly generated index
    let choicesRandom = choices[randomNumber];

    return choicesRandom;
}

/*function getPlayerSelection (){
    var answer = prompt("Write between these 3 : Rock, Paper, Scissor");
    //if (answer === null || answer === "") {
    //    alert("you wrote nothing");
    //  } else {
    //  alert("you wrote: " + answer);
    //  }
    return answer;
}*/


var playerScore = 0;
var computerScore = 0;
var roundsPlayed = 0;

let scoreContainer = document.getElementById("scoreContainer");

function playRound(getPlayerSelection){

    let playerSelection = getPlayerSelection;/*getPlayerSelection();*/
    let computerSelection = getComputerChoice();

    let resultContainer = document.getElementById("resultContainer");

    // Convert playerSelection to lowercase for case-insensitive comparison
    let lowerCaseSelection = playerSelection.toLowerCase();

    switch (lowerCaseSelection){
        case "rock":
            if(computerSelection === "Paper"){
                resultContainer.innerHTML = "You lose! Paper beats Rock";
                computerScore ++;
                roundsPlayed ++;
            } else if (computerSelection === "Scissor"){
                resultContainer.innerHTML = "You Win! Rock beats Scissor";
                playerScore ++;
                roundsPlayed ++;
            } else if (computerSelection === "Rock"){
                resultContainer.innerHTML = "It's tie !";
                roundsPlayed ++;
            } else{
                resultContainer = "Il y a un problème il faut recommencer";
                break;
            }
            break;
        case "paper":
            if (computerSelection === "Rock"){
                resultContainer.innerHTML = "You Win! Paper beats Rock";
                playerScore ++;
                roundsPlayed ++;
            } else if (computerSelection === "Scissor"){
                resultContainer.innerHTML = "You lose! Scissor beats paper";
                computerScore ++;
                roundsPlayed ++;
            } else if (computerSelection === "Paper"){
                resultContainer.innerHTML = "It's a tie!";
                roundsPlayed ++;
            } else {
                resultContainer.innerHTML = "Il y a un problème il faut recommencer";
                break;
            }
            break;
        case "scissor":
            if(computerSelection === "Paper"){
                resultContainer.innerHTML = "You Win! Scissor beats paper";
                playerScore ++;
                roundsPlayed ++;
            } else if (computerSelection === "Rock"){
                resultContainer.innerHTML = "You lose! Rock beats scissor";
                computerScore ++;
                roundsPlayed ++;
            } else if (computerSelection === "Scissor"){
                resultContainer.innerHTML = "It's a tie!";
                roundsPlayed ++;
            } else {
                resultContainer.innerHTML = "Il y a un problème, il faut recommencer";
                break;
            }
            break;

    }
}





/*function game(){
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
*/
//ceci est pour oir si tout marche


// Créer un élément de bouton
var myButton1 = document.createElement("button");
var myButton2 = document.createElement("button");
var myButton3 = document.createElement("button");

// Configurer le texte du bouton
myButton1.innerHTML = "Scissor";
myButton2.innerHTML = "Rock";
myButton3.innerHTML = "Paper";

// Ajouter un gestionnaire d'événements (par exemple, un clic)
myButton1.addEventListener("click",function(){
    playRound("Scissor");
    scoreContainer.innerHTML = "Player: "+ playerScore+ " - Computer: "+ computerScore;
    if (roundsPlayed === 5){
        
    }
});


myButton2.addEventListener("click",function (){
    playRound("Rock");
    scoreContainer.innerHTML = "Player: "+ playerScore+ " - Computer: "+ computerScore;
});

myButton3.addEventListener("click",function(){
    playRound("Paper");
    scoreContainer.innerHTML = "Player: "+ playerScore+ " - Computer: "+ computerScore;
});

var buttonContainer = document.getElementById("buttonContainer");
buttonContainer.appendChild(myButton1);
buttonContainer.appendChild(myButton2);
buttonContainer.appendChild(myButton3);