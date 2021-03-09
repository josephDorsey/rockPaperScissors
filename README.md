# rockPaperScissors

javascript project for Odin Project

## Understand the problem

Your game is going to play against the computer, so begin with a function called `computerPlay` that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play.

Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner of the round like so: "You Lose! Paper beats Rock"

Make your function case insensitive (so users can input rock, ROCK, RocK or any other variation)

Important note: you want to return the results of this function call, not console.log() them

Pseudo Code:

## Plan

1. Does your program have an interface? What will it look like?

   - it will be one line in the chrome console

2. What inputs will your program have? Will the user enter data or will you get input from somewhere else?

   - there will be two inputs in the function.
     - One will be playerSelection
     - and the other is computerSelection (this is randomly decided )
   - the user will input their choice, the computer will be randomly inputted

3. What’s the desired output?
   EXAMPLE

   - "You Win! Paper beats Rock!"
   - "You Lose! Rock beats Scissors!"

4. Given your inputs, what are the steps necessary to return the desired output? The algorithm in pseudo code for this problem:
   EXAMPLE 1: computerPlay()
   - create function called computerPlay
   - set parameter to random
   - have random = ['Rock','Paper','Scissors']
   - we want random to return a random index from 0-2
   - EXAMPLE 2: playRound()
   - create a function called playRound()
   - set parameters to playRound(playerSelection, computerSelection)
   - have playerSelection be a prompt() that asks for user input
   - create a variable called rock
   - create a variable called paper
   - create a variable called scissors
   - set condition rock > scissors
   - set condition paper > rock
   - set condition scissors > paper

EXAMPLE 3: game() - create a function called game() - save previous function inside this one - make it loop 5 times

## Divide and Conquer (sub-problems)

This is where we break down the pseudo-code that we wrote before

EXAMPLE 1: computerPlay() ✅

- create function called computerPlay ✅
- set parameter to value ✅
- have an array called random = ['Rock','Paper','Scissors'] ✅
- we want random to return a random index from 0-2

  const computerPlay = function() {
  const choices = ['Rock','Paper','Scissors'];
  const random = Math.floor(Math.random() \* choices.length)
  return choices[random];
  }

EXAMPLE 2: playRound() ✅

- create a function called playRound()
- set parameters to playRound(playerSelection, computerSelection)
- have playerSelection be a prompt() that asks for user input
- set condition rock > scissors
- set condition paper > rock
- set condition scissors > paper

EXAMPLE 3: game()

- create a function called game()
- save previous function inside this one
- make it loop 5 times
