/**
 * This is part of Odin project Foundations Path.
 * PROJECT: ROCK PAPER SCISSORS
 * More info: https://www.theodinproject.com/paths/foundations/courses/foundations/lessons/rock-paper-scissors
 * 
 * This is my solution for this project.
 * =)
 *  
 * Victor C.
 */

'use strict';

//All variables
var choice = "";
var computerSelection = "";
var win = 1;
var lost = 1;
var draw = 1;
var total = 0;

//initialize the first time
document.getElementById("win").innerHTML = 0;
document.getElementById("lost").innerHTML = 0;
document.getElementById("draw").innerHTML = 0;
alert("Select a choice: rock, paper or scissors?");

//function that plays once with button selection in HTML return win lose or draw
function playRound(choice) {

  computerSelection = computerPlay();
  console.log(choice);

  var gameResult = playOnce(choice, computerSelection);

  if (gameResult.match(/Win/g) == "Win") {
    document.getElementById("win").innerHTML = win++;
    total++;
    console.log(total);
    playTimes(total);

  } else if (gameResult.match(/Lose/g) == "Lose") {
    document.getElementById("lost").innerHTML = lost++;
    total++;
    console.log(total);
    playTimes(total);

  } else {
    document.getElementById("draw").innerHTML = draw++;
    total++;
    console.log(total);
    playTimes(total);
  }
  alert(gameResult);
  console.log(gameResult);
}

//function that detect winner with onclick option selected
function playOnce(choice, computerSelection) {

  switch (choice) {
    case "rock":

      if (computerSelection == "scissors") {
        return "You Win! Rock beats Scissors";
      } else if (computerSelection == "paper") {
        return "You Lose! Paper beats Rock";
      } else {
        return "Its a draw!";
      }

    case "paper":
      if (computerSelection == "rock") {
        return "You Win! Paper beats Rock";
      } else if (computerSelection == "scissors") {
        return "You Lose! Scissors beats Paper";
      } else {
        return "Its a draw!";
      }

    case "scissors":
      if (computerSelection == "paper") {
        return "You Win! Scissors beats paper";
      } else if (computerSelection == "rock") {
        return "You Lose! Rock beats Scissors";
      } else {
        return "Its a draw!";
      }
  }
}

//function random selection for computer
function computerPlay() {
  var computer = Math.random() * 100;
  if (computer <= 33) {
    return "rock";
  } else if (computer <= 66) {
    return "paper";
  } else {
    return "scissors";
  }
}

//function that allows playing 5 times
function playTimes(total) {
  if (total < 5) {
    console.log(total);
  } else {
    var finalWinner = winnerSelection();
    document.getElementById("winner").innerHTML = 'The result after 5 matches is that ' + finalWinner;
  }
}

//function that determines winner
function winnerSelection() {
  if (win > lost && win > draw) {
    return 'You win!!!';
  } else if (lost > win && lost > draw) {
    return 'You lose =(';
  } else return 'It is a draw'
}
