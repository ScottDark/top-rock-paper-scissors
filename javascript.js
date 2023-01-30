const ROCK = "Rock";
const PAPER = "Paper";
const SCISSORS = "Scissors";

const TIE = "You TIE this round";
const LOSE = "You LOSE this round";
const WIN = "You WIN this round";

const TIE_GAME = "No Winners";
const LOSE_GAME = "You Lose the game!";
const WIN_GAME = "You Win the game!";

let computerChoice;
let setRoundCounter = 0;
let setWinCounter = 0;
let setLossCounter = 0;
let setTieCounter = 0;

// Button event listeners
const buttons = document.querySelectorAll(".btn");

buttons.forEach(function (button) {
  button.addEventListener("click", playRound);
});

// Functions Start

/* Returns: Either Rock, Paper, Scissors at random - CPU */
function getComputerChoice() {
  //Generates computer selection between 1-3
  computerChoice = Math.floor(Math.random() * 3) + 1;

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
/* Returns: Result of round */
function getRoundResult(playerChoice) {
  const roundResult = document.querySelector(".roundResult");

  switch (playerChoice) {
    case ROCK:
      if (computerChoice === ROCK) {
        roundResult.textContent = TIE;
        setTieCounter++;
        break;
      } else if (computerChoice === PAPER) {
        roundResult.textContent = LOSE;
        setLossCounter++;
        break;
      } else {
        roundResult.textContent = WIN;
        setWinCounter++;
        break;
      }

    case PAPER:
      if (computerChoice === PAPER) {
        roundResult.textContent = TIE;
        setTieCounter++;
        break;
      } else if (computerChoice === ROCK) {
        roundResult.textContent = WIN;
        setWinCounter++;
        break;
      } else {
        roundResult.textContent = LOSE;
        setLossCounter++;
        break;
      }

    case SCISSORS:
      if (computerChoice === SCISSORS) {
        roundResult.textContent = TIE;
        setTieCounter++;
        break;
      } else if (computerChoice === ROCK) {
        roundResult.textContent = LOSE;
        setLossCounter++;
        break;
      } else {
        roundResult.textContent = WIN;
        setWinCounter++;
        break;
      }

    default:
      break;
  }
  setRoundCounter++;
}

/* Returns: Updated win/lose/tie result */
function runningResults() {
  const runningWins = document.querySelector(".runningWins");
  const runningLoss = document.querySelector(".runningLoss");
  const runningWTies = document.querySelector(".runningWTies");
  const runningTotal = document.querySelector(".runningTotal");

  runningWins.textContent = "Wins: " + setWinCounter;
  runningLoss.textContent = "Loss: " + setLossCounter;
  runningWTies.textContent = "Ties: " + setTieCounter;
  runningTotal.textContent = "Rounds: " + setRoundCounter;
}

/* Returns: Result of game */
function determineGameResult() {
  const gameResult = document.querySelector(".gameResult");
  if (setWinCounter >= 5) {
    gameResult.textContent = "Congratulations! You Win!";
  } else if (setLossCounter >= 5) {
    gameResult.textContent = "Congratulations! You Lose! :)";
  } else {
    return;
  }
}

/* Resets game */
function resetGame() {
  document.getElementById(".resultsContainer").reset();
}

/* Plays a round */
function playRound() {
  const playerChoice = this.id;

  getComputerChoice();
  getRoundResult(playerChoice);
  determineGameResult();
  runningResults();
}

// Functions End
