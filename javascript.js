// Variables
const ROCK = 1;
const PAPER = 2;
const SCISSORS = 3;

let computerSelection;
let playerSelection;
let roundResults;
let roundCounter = 0;

// Functions Start

/* // Random computer choice eg. rock, paper, scissors */
function getComputerChoice() {
  computerSelection = Math.floor(Math.random() * 3) + 1;

  // Computer Selection to console
  switch (computerSelection) {
    case 1:
      console.log("Computer chose: Rock!");
      return computerSelection;
      break;

    case 2:
      console.log("Computer chose: Paper!");
      return computerSelection;
      break;

    case 3:
      console.log("Computer chose: Scissors!");
      return computerSelection;
      break;
    default:
      console.log("Error selecting computer choice.");
  }
}

function playRound() {
  getComputerChoice();
  const playerSelection = this.id;

  switch (playerSelection) {
    // Game Logic
    // Player Rock
    case "Rock":
      if (computerSelection === ROCK) {
        return (roundResults = "Tie!");
      } else if (computerSelection === PAPER) {
        return (roundResults = "You lose!");
      } else {
        return (roundResults = "You win!");
      }
      break;

    // Player Paper
    case "Paper":
      if (computerSelection === PAPER) {
        return (roundResults = "Tie!");
      } else if (computerSelection === ROCK) {
        return (roundResults = "You win!");
      } else {
        return (roundResults = "You lose!");
      }
      break;

    // Player Scissors
    case "Scissors":
      if (computerSelection === SCISSORS) {
        return (roundResults = "Tie!");
      } else if (computerSelection === ROCK) {
        return (roundResults = "You lose!");
      } else {
        return (roundResults = "You win!");
      }
      break;

    default:
      return;
  }
  debugger;
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
