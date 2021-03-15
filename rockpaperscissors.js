"use strict";

// btn logic

// Rules btn overlay

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnCloseRules = document.querySelector(".close-modal");
const btnShowRules = document.querySelector(".rules");

const results = document.querySelector(".results");
const btnCloseResults = document.querySelector(".close-results");
const resultsOverlay = document.querySelector(".results-overlay");
const resultsHidden = document.querySelector(".results-hidden");

const showRules = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideRules = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

const hideResults = function () {
  resultsOverlay.classList.add("results-hidden");
  results.classList.add("results-hidden");
};

btnCloseResults.addEventListener("click", hideResults);
btnShowRules.addEventListener("click", showRules);
btnCloseRules.addEventListener("click", hideRules);
overlay.addEventListener("click", hideRules);
resultsOverlay.addEventListener("click", hideResults);

// rock, paper, scissors btn
let playerPoints = 0;
let computerPoints = 0;
let highscore = 0;
let turn = 1;

const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

const computerChoice = function () {
  const choices = ["Rock", "Paper", "Scissors"];
  //This chooses a random item from the array
  const random = Math.floor(Math.random() * choices.length);
  //This returns a random item from the array
  return choices[random];
};

// MESSAGES
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const displayComputerMessage = function (message) {
  document.querySelector(".comp-message").textContent = message;
};

//STYLE

const bodyStyle = function (body) {
  document.querySelector("body").style.backgroundColor = body;
};

//POINTS
const playerScore = function (score) {
  document.querySelector(".playerscore").textContent = score;
};
const computerScore = function (score) {
  document.querySelector(".compscore").textContent = score;
};
const roundTurn = function (turn) {
  document.querySelector(".turn").textContent = turn;
};
// RESULTS
const winner = function (message) {
  let para = document.createElement("P");
  para.innerHTML = message;
  document.getElementById("resultsText").appendChild(para);
};

const printText = function (message) {
  let para = document.createElement("P");
  para.innerHTML = message;
  document.getElementById("printText").appendChild(para);
};

// ROCK

const rockBtn = function () {
  displayMessage("Rock!");
  displayComputerMessage(`${computerChoice()}!`);
  const rockMessage = document.querySelector(".message").textContent;
  const compMessage = document.querySelector(".comp-message").textContent;
  if (rockMessage === "Rock!" && compMessage === "Scissors!") {
    turn++;
    roundTurn(turn);
    document.querySelector("body").style.backgroundColor = "#2ecc71";
    playerPoints++;
    playerScore(playerPoints);
    winner(
      `Round ${
        turn - 1
      }: You Win! Rock smashes Scissors! ${playerPoints} - ${computerPoints}`
    );
    printText(
      `Round ${
        turn - 1
      }: You Win! Rock smashes Scissors! ${playerPoints} - ${computerPoints}`
    );
  } else if (rockMessage === "Rock!" && compMessage === "Paper!") {
    turn++;
    roundTurn(turn);
    document.querySelector("body").style.backgroundColor = "#c0392b";
    computerPoints++;
    computerScore(computerPoints);
    winner(
      `Round ${
        turn - 1
      }: Computer Wins! Paper covers Rock! ${playerPoints} - ${computerPoints}`
    );
    printText(
      `Round ${
        turn - 1
      }: Computer Wins! Paper covers Rock! ${playerPoints} - ${computerPoints}`
    );
  } else if (rockMessage === "Rock!" && compMessage === "Rock!") {
    turn++;
    roundTurn(turn);
    document.querySelector("body").style.backgroundColor = "#fff";
    winner(
      `Round ${
        turn - 1
      }: OH MY ITS A TIE! ROCK VS ROCK! ${playerPoints} - ${computerPoints}`
    );
    printText(
      `Round ${
        turn - 1
      }: OH MY ITS A TIE! ROCK VS ROCK! ${playerPoints} - ${computerPoints}`
    );
  }
  if (turn === 6 && playerPoints > computerPoints) {
    winner(`GAME OVER! YOU WIN ${playerPoints} - ${computerPoints}`);
    printText(`GAME OVER! YOU WIN ${playerPoints} - ${computerPoints}`);
    bodyStyle("#2ecc71");
    results.classList.remove("results-hidden");
    resultsOverlay.classList.remove("results-hidden");
    turn--;
    roundTurn(turn);
  } else if (turn === 6 && computerPoints > playerPoints) {
    bodyStyle("#c0392b");
    winner(`GAME OVER! YOU LOSE ${playerPoints} - ${computerPoints}`);
    printText(`GAME OVER! YOU LOSE ${playerPoints} - ${computerPoints}`);
    results.classList.remove("results-hidden");
    resultsOverlay.classList.remove("results-hidden");
    turn--;
    roundTurn(turn);
  } else if (turn === 6 && playerPoints === computerPoints) {
    bodyStyle("#fff");
    winner(`GAME OVER! IT'S A TIE ${playerPoints} - ${computerPoints}`);
    printText(`GAME OVER! IT'S A TIE ${playerPoints} - ${computerPoints}`);
    results.classList.remove("results-hidden");
    resultsOverlay.classList.remove("results-hidden");
    turn--;
    roundTurn(turn);
  }
  if (playerPoints > highscore) {
    highscore = playerPoints;
    document.querySelector(".highscore").textContent = highscore;
  }
};
rock.addEventListener("click", rockBtn);

// PAPER
const paperBtn = function () {
  displayMessage("Paper!");
  displayComputerMessage(`${computerChoice()}!`);
  const paperMessage = document.querySelector(".message").textContent;
  const compMessage = document.querySelector(".comp-message").textContent;
  if (paperMessage === "Paper!" && compMessage === "Rock!") {
    turn++;
    roundTurn(turn);
    playerPoints++;
    playerScore(playerPoints);
    document.querySelector("body").style.backgroundColor = "#2ecc71";
    winner(
      `Round ${
        turn - 1
      }: You Win! Paper covers Rock! ${playerPoints} - ${computerPoints}`
    );
    printText(
      `Round ${
        turn - 1
      }: You Win! Paper cover Rock! ${playerPoints} - ${computerPoints}`
    );
  } else if (paperMessage === "Paper!" && compMessage === "Scissors!") {
    turn++;
    roundTurn(turn);
    computerPoints++;
    computerScore(computerPoints);
    document.querySelector("body").style.backgroundColor = "#c0392b";
    winner(
      `Round ${
        turn - 1
      }: Computer Wins! Scissors cuts paper! ${playerPoints} - ${computerPoints}`
    );
    printText(
      `Round ${
        turn - 1
      }: Computer Wins! Scissors cuts paper! ${playerPoints} - ${computerPoints}`
    );
  } else if (paperMessage === "Paper!" && compMessage === "Paper!") {
    turn++;
    roundTurn(turn);
    winner(
      `Round ${
        turn - 1
      }: OH MY ITS A TIE! PAPER VS PAPER! ${playerPoints} - ${computerPoints}`
    );
    printText(
      `Round ${
        turn - 1
      }: OH MY ITS A TIE! PAPER VS PAPER! ${playerPoints} - ${computerPoints}`
    );
    document.querySelector("body").style.backgroundColor = "#fff";
  }
  if (turn === 6 && playerPoints > computerPoints) {
    winner(`GAME OVER! YOU WIN ${playerPoints} - ${computerPoints}`);
    printText(`GAME OVER! YOU WIN ${playerPoints} - ${computerPoints}`);
    bodyStyle("#2ecc71");
    results.classList.remove("results-hidden");
    resultsOverlay.classList.remove("results-hidden");
    turn--;
    roundTurn(turn);
  } else if (turn === 6 && computerPoints > playerPoints) {
    bodyStyle("#c0392b");
    winner(`GAME OVER! YOU LOSE ${playerPoints} - ${computerPoints}`);
    printText(`GAME OVER! YOU LOSE ${playerPoints} - ${computerPoints}`);
    results.classList.remove("results-hidden");
    resultsOverlay.classList.remove("results-hidden");
    turn--;
    roundTurn(turn);
  } else if (turn === 6 && playerPoints === computerPoints) {
    bodyStyle("#fff");
    winner(`GAME OVER! IT'S A TIE ${playerPoints} - ${computerPoints}`);
    printText(`GAME OVER! IT'S A TIE ${playerPoints} - ${computerPoints}`);
    results.classList.remove("results-hidden");
    resultsOverlay.classList.remove("results-hidden");
    turn--;
    roundTurn(turn);
  }
  if (playerPoints > highscore) {
    highscore = playerPoints;
    document.querySelector(".highscore").textContent = highscore;
  }
};

paper.addEventListener("click", paperBtn);

//SCISSORS

const scissorsBtn = function () {
  displayMessage("Scissors!");
  displayComputerMessage(`${computerChoice()}!`);
  const scissorsMessage = document.querySelector(".message").textContent;
  const compMessage = document.querySelector(".comp-message").textContent;
  if (scissorsMessage === "Scissors!" && compMessage === "Paper!") {
    turn++;
    roundTurn(turn);
    playerPoints++;
    playerScore(playerPoints);
    document.querySelector("body").style.backgroundColor = "#2ecc71";
    winner(
      `Round ${
        turn - 1
      }: You Win! Scissors cuts Paper! ${playerPoints} - ${computerPoints}`
    );
    printText(
      `Round ${
        turn - 1
      }: You Win! Scissors cuts Paper! ${playerPoints} - ${computerPoints}`
    );
  } else if (scissorsMessage === "Scissors!" && compMessage === "Rock!") {
    turn++;
    roundTurn(turn);
    computerPoints++;
    computerScore(computerPoints);
    document.querySelector("body").style.backgroundColor = "#c0392b";
    winner(
      `Round ${
        turn - 1
      }: Computer Wins! Rock smashes Scissors! ${playerPoints} - ${computerPoints}`
    );
    printText(
      `Round ${
        turn - 1
      }: Computer Wins! Rock smashes Scissors! ${playerPoints} - ${computerPoints}`
    );
  } else if (scissorsMessage === "Scissors!" && compMessage === "Scissors!") {
    turn++;
    roundTurn(turn);
    winner(
      `Round ${
        turn - 1
      }: OH MY ITS A TIE! SCISSORS VS SCISSORS! ${playerPoints} - ${computerPoints}`
    );
    printText(
      `Round ${
        turn - 1
      }: OH MY ITS A TIE! SCISSORS VS SCISSORS! ${playerPoints} - ${computerPoints}`
    );
    document.querySelector("body").style.backgroundColor = "#fff";
  }
  if (turn === 6 && playerPoints > computerPoints) {
    winner(`GAME OVER! YOU WIN ${playerPoints} - ${computerPoints}`);
    printText(`GAME OVER! YOU WIN ${playerPoints} - ${computerPoints}`);
    bodyStyle("#2ecc71");
    results.classList.remove("results-hidden");
    resultsOverlay.classList.remove("results-hidden");
    turn--;
    roundTurn(turn);
  } else if (turn === 6 && computerPoints > playerPoints) {
    bodyStyle("#c0392b");
    winner(`GAME OVER! YOU LOSE ${playerPoints} - ${computerPoints}`);
    printText(`GAME OVER! YOU LOSE ${playerPoints} - ${computerPoints}`);
    results.classList.remove("results-hidden");
    resultsOverlay.classList.remove("results-hidden");
    turn--;
    roundTurn(turn);
  } else if (turn === 6 && playerPoints === computerPoints) {
    bodyStyle("#fff");
    winner(`GAME OVER! IT'S A TIE ${playerPoints} - ${computerPoints}`);
    printText(`GAME OVER! IT'S A TIE ${playerPoints} - ${computerPoints}`);
    results.classList.remove("results-hidden");
    resultsOverlay.classList.remove("results-hidden");
    turn--;
    roundTurn(turn);
  }
  if (playerPoints > highscore) {
    highscore = playerPoints;
    document.querySelector(".highscore").textContent = highscore;
  }
};

scissors.addEventListener("click", scissorsBtn);

//RESET BUTTON

document.querySelector(".again").addEventListener("click", function () {
  playerPoints = 0;
  computerPoints = 0;
  turn = 1;
  displayMessage("Choose your weapon!");
  displayComputerMessage("");
  playerScore(playerPoints);
  computerScore(computerPoints);
  roundTurn(turn);
  bodyStyle("#fff");
  let removePrintText = document.getElementById("printText");
  let removeResultsText = document.getElementById("resultsText");
  removeResultsText.innerHTML = "";
  removePrintText.innerHTML = "";
});
