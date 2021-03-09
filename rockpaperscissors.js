"use strict";

/* 
Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)

Important note: you want to return the results of this function call, not console.log() them

Pseudo Code: 


*/

const computerPlay = function () {
  const choices = ["rock", "paper", "scissors"];
  //This chooses a random item from the array
  const random = Math.floor(Math.random() * choices.length);
  //This returns a random item from the array
  return choices[random];
};
computerPlay();

// This code works but, when it is not lowercase or the answer is null or "" it says playerSelection is not a function
function playerSelection(input) {
  input = prompt("input: ");
  return input;
}

//refactor this when we get the chance
function playRound(playerSelection, computerSelection) {
  if (playerSelection === null || playerSelection === "") {
    alert(`Please enter an answer.`);
    return playerSelection;
  }
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock" && computerSelection == "scissors") {
    return `You Win! Rock crushes Scissors!`;
  } else if (playerSelection == "scissors" && computerSelection == "rock") {
    return `You Lose! Rock crushes Scissors!`;
  } else if (playerSelection == "paper" && computerSelection == "rock") {
    return `You Win! Paper covers Rock!`;
  } else if (playerSelection == "rock" && computerSelection == "paper") {
    return `You Lose! Paper covers Rock!`;
  } else if (playerSelection == "scissors" && computerSelection == "paper") {
    return `You Win! Scissors cuts Paper!`;
  } else if (playerSelection == "paper" && computerSelection == "scissors") {
    return `You Lose! Scissors cuts Paper!`;
  }
  // If the user and computer select the same choices
  if (playerSelection == "scissors" && computerSelection == "scissors") {
    return `It's a tie! Scissors cant beat Scissors!`;
  } else if (playerSelection == "rock" && computerSelection == "rock") {
    return `It's a tie! Rock can't beat Rock!`;
  } else if (playerSelection == "paper" && computerSelection == "paper") {
    return `It's a tie! Paper can't beat Paper!`;
  }

  //   computerPlay();
  playerSelection();
}

//figure out how to loop this 5 times when we refactor this
function game() {
  console.log(playRound(playerSelection(), computerPlay()));
  console.log(playRound(playerSelection(), computerPlay()));
  console.log(playRound(playerSelection(), computerPlay()));
  console.log(playRound(playerSelection(), computerPlay()));
  console.log(playRound(playerSelection(), computerPlay()));
}
game();
