'use strict';

/* 
Your game is going to play against the computer, so begin with a function called computerPlay that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)

Important note: you want to return the results of this function call, not console.log() them

Pseudo Code: 


*/

const computerPlay = function () {
  const choices = ['rock', 'paper', 'scissors'];
  //This chooses a random item from the array
  const random = Math.floor(Math.random() * choices.length);
  //This returns a random item from the array
  return choices[random];
};
computerPlay();

// const playerSelection = function (input) {
//   input = prompt('input: ');
//   return input;
// };
function playerSelection(input) {
  input = prompt('input: ');
  return input;
}

function playRound(playerSelection, computerSelection) {
  if (
    playerSelection.toLowerCase() === 'rock' &&
    computerSelection == 'scissors'
  ) {
    return `You Win! Rock beats Scissors!`;
  } else if (
    playerSelection.toLowerCase() === 'scissors' &&
    computerSelection == 'rock'
  ) {
    return `You Lose! Rock beats Scissors!`;
  } else if (
    playerSelection.toLowerCase() === 'paper' &&
    computerSelection == 'rock'
  ) {
    return `You Win! Paper beats Rock!`;
  } else if (
    playerSelection.toLowerCase() === 'rock' &&
    computerSelection == 'paper'
  ) {
    return `You Lose! Paper beats Rock!`;
  } else if (
    playerSelection.toLowerCase() === 'scissors' &&
    computerSelection == 'paper'
  ) {
    return `You Win! Scissors beats Paper!`;
  } else if (
    playerSelection.toLowerCase() === 'paper' &&
    computerSelection == 'scissors'
  ) {
    return `You Lose! Scissors beats Paper!`;
  }
  // If the user and computer select the same choices
  if (
    playerSelection.toLowerCase() === 'scissors' &&
    computerSelection == 'scissors'
  ) {
    return `It's a tie! Scissors cant break Scissors!`;
  } else if (
    playerSelection.toLowerCase() === 'rock' &&
    computerSelection == 'rock'
  ) {
    return `It's a tie! Rock can't break Rock!`;
  } else if (
    playerSelection.toLowerCase() === 'paper' &&
    computerSelection == 'paper'
  ) {
    return `It's a tie! Paper can't break Paper!`;
  }
  // If user doesn't enter in the choice or cancels
  if (playerSelection === undefined || 'cancel') {
    return `Please enter valid entry. Try again!`;
  }

  //   computerPlay();
  playerSelection();
}

console.log(playRound(playerSelection(), computerPlay()));
