// Variables
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

let computerChoice;
let playerChoice;
let roundCounter = 0;

// Functions Start

/* Random computer choice eg. rock, paper, scissors */
function getComputerChoice() {
  //Generates computer selection between 1-3
  computerChoice = Math.floor(Math.random() * 3) + 1;

  // Computer Selection
  switch (computerChoice) {
    case 1:
      return (computerChoice = ROCK);

    case 2:
      return (computerChoice = PAPER);

    case 3:
      return (computerChoice = SCISSORS);

    default:
      break;
  }
}

function getRoundResult(playerChoice) {
  const resultsContainer = document.querySelector(".resultsContainer");
  const h1 = document.createElement("h1");
  resultsContainer.appendChild(h1);
  let resultNode;

  switch (playerChoice) {
    case "Rock":
      if (computerChoice === ROCK) {
        ("Tie!");
        break;
      } else if (computerChoice === PAPER) {
        ("You lose!");
        break;
      } else {
        ("You win!");
        break;
      }

    case "Paper":
      if (computerChoice === PAPER) {
        ("Tie!");
        break;
      } else if (computerChoice === ROCK) {
        ("You win!");
        break;
      } else {
        ("You lose!");
        break;
      }

    case "Scissors":
      if (computerChoice === SCISSORS) {
        ("Tie!");
        break;
      } else if (computerChoice === ROCK) {
        ("You lose!");
        break;
      } else {
        ("You win!");
        break;
      }

    default:
      break;
  }
}

function playRound() {
  const playerChoice = this.id;
  getComputerChoice();
  getRoundResult(playerChoice);
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
