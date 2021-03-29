"use strict";

// selecting elements

const player0El = document.querySelector(".player--0");
const player1El = document.querySelector(".player--1");
let score0El = document.getElementById("score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");

const roundNumberEl = document.querySelector(".roundnumber");
const choice0El = document.querySelector(".choice--0");
const choice1El = document.querySelector(".choice--1");
const btnRock = document.querySelector(".rock");
const btnPaper = document.querySelector(".paper");
const btnScissors = document.querySelector(".scissors");
const btnAgain = document.querySelector(".again");
const current = document.querySelector(".current");
const btnLogger = document.querySelector(".logger");

// overlay

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

const btnCloseRules = document.querySelector(".close-modal");
const btnShowRules = document.querySelector(".rules");

const showRules = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const hideRules = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnShowRules.addEventListener("click", showRules);
btnCloseRules.addEventListener("click", hideRules);
overlay.addEventListener("click", hideRules);

// Starting conditions
let scores, increasePlayerPoints, increaseComputerPoints, playing, round;

// Computer making a random choice

// const computerChoice = function () {
//   const choices = ["Rock", "Paper", "Scissors"];
//   //This chooses a random item from the array
//   const random = Math.floor(Math.random() * choices.length);
//   //This returns a random item from the array
//   return choices[random];
// };
const computerChoice = function () {
  const choice = Math.trunc(Math.random() * 3) + 1;
  choice1El.src = `choice-${choice}.png`;
};

const computerPoints = function () {
  document.getElementById("score--1").textContent = increaseComputerPoints++;
};

const playerPoints = function () {
  document.getElementById("score--0").textContent = increasePlayerPoints++;
};
// Paragraph Messages
const printText = function (message) {
  let para = document.createElement("P");
  para.innerHTML = message;
  document.getElementById("printText").appendChild(para);
};
const winnerText = function (message) {
  let para = document.createElement("P");
  para.innerHTML = message;
  document.getElementById("winnerText").appendChild(para);
};
const removeText = function () {
  document.getElementById("printText").innerHTML = "";
};
// rolling functionality

const init = function () {
  scores = [0, 0];
  increasePlayerPoints = 1;
  increaseComputerPoints = 1;
  round = 1;
  playing = true;
  roundNumberEl.src = `round-1.png`;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0El.classList.add("hidden");
  current1El.classList.add("hidden");
  document.getElementById("winnerText").innerHTML = "";
  document.getElementById("printText").innerHTML = "";
  roundNumberEl.classList.remove("hidden");
  player0El.classList.remove("player--winner");
  player1El.classList.remove("player--winner");
  btnRock.classList.remove("hidden");
  btnPaper.classList.remove("hidden");
  btnScissors.classList.remove("hidden");
};
init();

btnAgain.addEventListener("click", init);

btnRock.addEventListener("click", function () {
  if (playing) {
    // display the choice
    current0El.classList.remove("hidden");
    current1El.classList.remove("hidden");
    choice0El.src = `choice-1.png`;
    computerChoice();
    if (score0El.textContent !== "5" || score1El !== "5") {
      if (
        choice0El.getAttribute("src") === `choice-1.png` &&
        choice1El.getAttribute("src") === `choice-1.png`
      ) {
        round++;
        roundNumberEl.src = `round-${round}.png`;
        removeText();
        printText(`It's a tie! Rock vs. Rock!`);
        console.log(`It's a tie!`);
        // Rock vs Scissors
      } else if (
        choice0El.getAttribute("src") === `choice-1.png` &&
        choice1El.getAttribute("src") === `choice-2.png`
      ) {
        //   document.getElementById("score--0").textContent = increasePlayerPoints++;
        round++;
        roundNumberEl.src = `round-${round}.png`;
        playerPoints();
        console.log(score0El.textContent);
        removeText();
        printText(`You win! Rock smashes Scissors!`);
        console.log(`You win this round!`);
        // Rock vs Paper
      } else {
        //   document.getElementById(
        //     "score--1"
        //   ).textContent = increaseComputerPoints++;
        round++;
        roundNumberEl.src = `round-${round}.png`;
        computerPoints();
        console.log(score1El.textContent);
        removeText();
        printText(`Computer Wins! Paper covers Rock!`);
        console.log(`You lose this round!`);
      }
    }
    if (score0El.textContent === "5") {
      playing = false;
      btnRock.classList.add("hidden");
      btnPaper.classList.add("hidden");
      btnScissors.classList.add("hidden");
      roundNumberEl.classList.add("hidden");
      player0El.classList.add(`player--winner`);
      winnerText(`GAME OVER! YOU WIN!`);
      console.log("CONGRATS YOU WIN! GAME OVER!");
    } else if (score1El.textContent === "5") {
      playing = false;
      btnRock.classList.add("hidden");
      btnPaper.classList.add("hidden");
      btnScissors.classList.add("hidden");
      roundNumberEl.classList.add("hidden");
      player1El.classList.add(`player--winner`);
      winnerText(`GAME OVER! COMPUTER WINS!`);
      console.log("COMPUTER WINS GAME OVER!");
    }
    // Rock vs Rock
  }
});
btnPaper.addEventListener("click", function () {
  if (playing) {
    // display the choice
    current0El.classList.remove("hidden");
    current1El.classList.remove("hidden");
    choice0El.src = `choice-3.png`;
    computerChoice();
    if (score0El.textContent !== "5" || score1El !== "5") {
      if (
        choice0El.getAttribute("src") === `choice-3.png` &&
        choice1El.getAttribute("src") === `choice-3.png`
      ) {
        round++;
        roundNumberEl.src = `round-${round}.png`;
        removeText();
        printText(`It's a tie! Paper vs. Paper`);
        console.log(`It's a tie!`);
        // Rock vs Scissors
      } else if (
        choice0El.getAttribute("src") === `choice-3.png` &&
        choice1El.getAttribute("src") === `choice-1.png`
      ) {
        //   document.getElementById("score--0").textContent = increasePlayerPoints++;
        round++;
        roundNumberEl.src = `round-${round}.png`;
        playerPoints();
        removeText();
        printText(`You win! Paper covers Rock!`);
        console.log(score0El.textContent);
        console.log(`You win this round!`);
        // Rock vs Paper
      } else {
        //   document.getElementById(
        //     "score--1"
        //   ).textContent = increaseComputerPoints++;
        round++;
        roundNumberEl.src = `round-${round}.png`;
        computerPoints();
        removeText();
        printText(`Computer Wins! Scissors cuts Paper!`);
        console.log(score1El.textContent);
        console.log(`You lose this round!`);
      }
    }
    if (score0El.textContent === "5") {
      playing = false;
      btnRock.classList.add("hidden");
      btnPaper.classList.add("hidden");
      btnScissors.classList.add("hidden");
      roundNumberEl.classList.add("hidden");
      player0El.classList.add(`player--winner`);
      winnerText(`GAME OVER! YOU WIN!`);
      console.log("CONGRATS YOU WIN! GAME OVER!");
    } else if (score1El.textContent === "5") {
      playing = false;
      btnRock.classList.add("hidden");
      btnPaper.classList.add("hidden");
      btnScissors.classList.add("hidden");
      roundNumberEl.classList.add("hidden");
      player1El.classList.add(`player--winner`);
      winnerText(`GAME OVER! COMPUTER WINS!`);
      console.log("COMPUTER WINS GAME OVER!");
    }
    // Rock vs Rock
  }
});
btnScissors.addEventListener("click", function () {
  if (playing) {
    // display the choice
    current0El.classList.remove("hidden");
    current1El.classList.remove("hidden");
    choice0El.src = `choice-2.png`;
    computerChoice();
    if (score0El.textContent !== "5" || score1El !== "5") {
      if (
        choice0El.getAttribute("src") === `choice-2.png` &&
        choice1El.getAttribute("src") === `choice-2.png`
      ) {
        round++;
        roundNumberEl.src = `round-${round}.png`;
        removeText();
        printText(`It's a tie! Scissors vs. Scissors!`);
        console.log(`It's a tie!`);
        // Rock vs Scissors
      } else if (
        choice0El.getAttribute("src") === `choice-2.png` &&
        choice1El.getAttribute("src") === `choice-3.png`
      ) {
        //   document.getElementById("score--0").textContent = increasePlayerPoints++;
        round++;
        roundNumberEl.src = `round-${round}.png`;
        playerPoints();
        removeText();
        printText(`You win! Scissors cuts Paper!`);
        console.log(score0El.textContent);
        console.log(`You win this round!`);
        // Rock vs Paper
      } else {
        //   document.getElementById(
        //     "score--1"
        //   ).textContent = increaseComputerPoints++;
        round++;
        roundNumberEl.src = `round-${round}.png`;
        computerPoints();
        removeText();
        printText(`You Lose! Rock beats Scissors!`);
        console.log(score1El.textContent);
        console.log(`You lose this round!`);
      }
    }
    if (score0El.textContent === "5") {
      playing = false;
      btnRock.classList.add("hidden");
      btnPaper.classList.add("hidden");
      btnScissors.classList.add("hidden");
      roundNumberEl.classList.add("hidden");
      player0El.classList.add(`player--winner`);

      winnerText(`GAME OVER! YOU WIN!`);
      console.log("CONGRATS YOU WIN! GAME OVER!");
    } else if (score1El.textContent === "5") {
      playing = false;
      btnRock.classList.add("hidden");
      btnPaper.classList.add("hidden");
      btnScissors.classList.add("hidden");
      roundNumberEl.classList.add("hidden");
      player1El.classList.add(`player--winner`);

      winnerText(`GAME OVER! COMPUTER WINS!`);
      console.log("COMPUTER WINS GAME OVER!");
    }
    // Rock vs Rock
  }
});
