// Variables
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

let computerSelection;
let playerSelection;
let roundResults;
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

function playRound() {
  getComputerChoice();
  const playerSelection = this.id;

  switch (playerSelection) {
    case "Rock":
      if (computerSelection === ROCK) {
        return (roundResults = "Tie!");
      } else if (computerSelection === PAPER) {
        return (roundResults = "You lose!");
      } else {
        return (roundResults = "You win!");
      }

    case "Paper":
      if (computerSelection === PAPER) {
        return (roundResults = "Tie!");
      } else if (computerSelection === ROCK) {
        return (roundResults = "You win!");
      } else {
        return (roundResults = "You lose!");
      }

    case "Scissors":
      if (computerSelection === SCISSORS) {
        return (roundResults = "Tie!");
      } else if (computerSelection === ROCK) {
        return (roundResults = "You lose!");
      } else {
        return (roundResults = "You win!");
      }

    default:
      return;
  }
}

/* // Starts the game */
function game() {}

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

//Call Function to start game
game();
