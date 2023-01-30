// Variables
const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const TIE = "You TIE this round";
const LOSE = "You LOSE this round";
const WIN = "You WIN this round";

let computerChoice;

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

  switch (playerChoice) {
    case ROCK:
      if (computerChoice === ROCK) {
        roundResult.textContent = TIE;
        break;
      } else if (computerChoice === PAPER) {
        roundResult.textContent = LOSE;
        break;
      } else {
        roundResult.textContent = WIN;
        break;
      }

    case PAPER:
      if (computerChoice === PAPER) {
        roundResult.textContent = TIE;
        break;
      } else if (computerChoice === ROCK) {
        roundResult.textContent = WIN;
        break;
      } else {
        roundResult.textContent = LOSE;
        break;
      }

    case SCISSORS:
      if (computerChoice === SCISSORS) {
        roundResult.textContent = TIE;
        break;
      } else if (computerChoice === ROCK) {
        roundResult.textContent = LOSE;
        break;
      } else {
        roundResult.textContent = WIN;
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
