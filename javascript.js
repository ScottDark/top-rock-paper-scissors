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
function getComputerChoice(min, max) {
  computerSelection = Math.floor(Math.random() * (max - min + 1) + min);

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

/* // Prompt user Rock, Paper. Scissors selection */
function getPlayerChoice() {
  playerSelection = +prompt(
    "Select choice:\n1 - Rock \n2 - Paper \n3 - Scissors"
  );
  switch (playerSelection) {
    case 1:
      console.log("You chose Rock!");
      return playerSelection;
      break;

    case 2:
      console.log("You chose Paper!");
      return playerSelection;
      break;

    case 3:
      console.log("You chose Scissors!");
      return playerSelection;
      break;

    default:
      // No selection made or wrong selection, alert user
      if (playerSelection === 0) {
        alert("Exiting game, reload to try again");
      } else {
        alert("Please select either 1, 2, 3");
        getPlayerChoice();
      }
  }
}

/* // Play a round */
function playRound(playerSelection, computerSelection) {
  switch (playerSelection) {
    // Game Logic
    // Player Rock
    case 1:
      if (computerSelection === ROCK) {
        return (roundResults = "Tie!");
      } else if (computerSelection === PAPER) {
        return (roundResults = "You lose!");
      } else {
        return (roundResults = "You win!");
      }
      break;

    // Player Paper
    case 2:
      if (computerSelection === PAPER) {
        return (roundResults = "Tie!");
      } else if (computerSelection === ROCK) {
        return (roundResults = "You win!");
      } else {
        return (roundResults = "You lose!");
      }
      break;

    // Player Scissors
    case 3:
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
  button.addEventListener("click", log);
});

//Call Function to start game
game();
