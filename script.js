"use strict";

const button = document.querySelectorAll(".btn");
const dispHand = document.querySelector(".player-hand");
const compHand = document.querySelector(".comp-hand");
const disPlayerScore = document.querySelector(".player-score");
const disCompScore = document.querySelector(".comp-score");
const dispResult = document.querySelector(".result");

const getComputerChoice = function () {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) return "Rock";
  else if (choice === 1) return "Paper";
  else return "Scissor";
};

const playRound = function (humanChoice, computerChoice) {
  let result;
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

const reset = function () {
  dispHand.src = "wait.png";
  compHand.src = "wait.png";
  dispResult.textContent = "First one to 5 wins game";
  humanScore = 0;
  computerScore = 0;

  disCompScore.textContent = 0;
  disPlayerScore.textContent = 0;
  button.forEach(function (button) {
    if (button.textContent != "Reset") {
      button.disabled = false;
      button.style.opacity = 1;
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
  console.log(humanHand);
  dispHand.src = `${humanHand}.png`;
  compHand.src = `${computerHand}.png`;

  result = playRound(humanHand, computerHand);
  if (result === "player") {
    humanScore++;
    disPlayerScore.textContent = humanScore;
  } else if (result === "computer") {
    computerScore++;
    disCompScore.textContent = computerScore;
  }

  if (humanScore === 5 || computerScore === 5) {
    button.forEach(function (button) {
      if (button.textContent != "Reset") {
        button.disabled = true;
        button.style.opacity = 0.6;
      }
    });
    if (humanScore === 5) dispResult.textContent = "Congrats 🥳 You win";
    else if (computerScore === 5) dispResult.textContent = "😢 You lose";
  }
};

button.forEach(function (button) {
  button.addEventListener("click", function () {
    playGame(button.textContent);
  });
});
