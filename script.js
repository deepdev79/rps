"use strict";

const button = document.querySelectorAll(".btn");

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

const playGame = function (inp) {
  let humanHand = inp.toLowerCase();
  if (humanHand === "reset") {
    humanScore = 0;
    computerScore = 0;
    return;
  }
  let computerHand = getComputerChoice().toLowerCase();

  let noWinner = 0;
  let result;

  result = playRound(humanHand, computerHand);
  if (result === "player") humanScore++;
  else if (result === "computer") computerScore++;
  else noWinner++;

  console.log(`Human ${humanScore}  \n Computer ${computerScore}`);

  if (humanScore > computerScore) console.log("Human wins");
  else if (computerScore > humanScore) console.log("Computer wins");
  else console.log("draw");
};

button.forEach(function (button) {
  button.addEventListener("click", function () {
    playGame(button.textContent);
  });
});
