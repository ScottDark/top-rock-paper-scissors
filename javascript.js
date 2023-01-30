// Variables
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

let computerSelection;
let playerChoice;
let roundCounter = 0;

// Functions Start

/* // Random computer choice eg. rock, paper, scissors */
function getComputerChoice() {
  //Generates computer selection between 1-3
  computerSelection = Math.floor(Math.random() * 3) + 1;

  // Computer Selection
  switch (computerSelection) {
    case 1:
      return (computerSelection = ROCK);

    case 2:
      return (computerSelection = PAPER);

    case 3:
      return (computerSelection = SCISSORS);

    default:
      break;
  }
}

function getPlayerChoice(playerChoice) {
  const results = document.getElementById(".results");

  switch (playerChoice) {
    case "Rock":
      if (computerSelection === ROCK) {
        return "Tie!";
      } else if (computerSelection === PAPER) {
        return "You lose!";
      } else {
        return "You win!";
      }

    case "Paper":
      if (computerSelection === PAPER) {
        return "Tie!";
      } else if (computerSelection === ROCK) {
        return "You win!";
      } else {
        return "You lose!";
      }

    case "Scissors":
      if (computerSelection === SCISSORS) {
        return "Tie!";
      } else if (computerSelection === ROCK) {
        return "You lose!";
      } else {
        return "You win!";
      }

    default:
      return;
  }
}

function playRound() {
  const playerSelection = this.id;
  getComputerChoice();
  getPlayerChoice(playerSelection);
}

/* Log event to console */
function log(event) {
  console.log(event.target.innerHTML);
}

// Functions End

// Button event listeners
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", playRound);
});
