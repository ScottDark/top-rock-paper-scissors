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
  const roundResult = document.querySelector(".roundResult");
  let resultNode;

  switch (playerChoice) {
    case "Rock":
      if (computerChoice === ROCK) {
        roundResult.textContent = "Tie";
        break;
      } else if (computerChoice === PAPER) {
        roundResult.textContent = "You lose this round";
        break;
      } else {
        roundResult.textContent = "You win this round";
        break;
      }

    case "Paper":
      if (computerChoice === PAPER) {
        roundResult.textContent = "Tie";
        break;
      } else if (computerChoice === ROCK) {
        roundResult.textContent = "You win this round";
        break;
      } else {
        roundResult.textContent = "You lose this round";
        break;
      }

    case "Scissors":
      if (computerChoice === SCISSORS) {
        roundResult.textContent = "Tie";
        break;
      } else if (computerChoice === ROCK) {
        roundResult.textContent = "You lose this round";
        break;
      } else {
        roundResult.textContent = "You win this round";
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
