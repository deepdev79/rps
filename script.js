"use strict";

const button = document.querySelectorAll(".btn");
const disPlayerScore = document.querySelector(".player-score");
const disCompScore = document.querySelector(".comp-score");

const getComputerChoice = function () {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "Rock";
  else if (choice === 1) return "Paper";
  else return "Scissor";
};

const playRound = function (humanChoice, computerChoice) {
  let result;
  console.log(humanChoice);
  console.log(computerChoice);
  switch (humanChoice) {
    case "rock":
      if (computerChoice === "rock") result = "draw";
      else if (computerChoice === "paper") result = "computer";
      else result = "player";
      break;
    case "paper":
      if (computerChoice === "rock") result = "player";
      else if (computerChoice === "paper") result = "draw";
      else result = "computer";
      break;
    case "scissor":
      if (computerChoice === "rock") result = "computer";
      else if (computerChoice === "paper") result = "player";
      else result = "draw";
      break;
    default:
      console.log("Invalid input");
  }
  return result;
};

let humanScore = 0;
let computerScore = 0;
let noWinner = 0;

const reset = function () {
  humanScore = 0;
  computerScore = 0;
  noWinner = 0;
  disCompScore.textContent = 0;
  disPlayerScore.textContent = 0;
  button.forEach(function (button) {
    if (button.textContent != "Reset") {
      button.disabled = false;
    }
  });
};

const playGame = function (inp) {
  let humanHand = inp.toLowerCase();
  if (humanHand === "reset") {
    reset();
    return;
  }
  let computerHand = getComputerChoice().toLowerCase();
  let result;

  result = playRound(humanHand, computerHand);
  if (result === "player") {
    humanScore++;
    disPlayerScore.textContent = humanScore;
  } else if (result === "computer") {
    computerScore++;
    disCompScore.textContent = computerScore;
  } else noWinner++;

  console.log(`Human ${humanScore}  \n Computer ${computerScore}`);

  if (humanScore === 5 || computerScore === 5) {
    button.forEach(function (button) {
      if (button.textContent != "Reset") {
        button.disabled = true;
      }
    });
    if (humanScore === 5) console.log("Human wins GAME");
    else if (computerScore === 5) console.log("Computer wins GAME");
  }
};

button.forEach(function (button) {
  button.addEventListener("click", function () {
    playGame(button.textContent);
  });
});
