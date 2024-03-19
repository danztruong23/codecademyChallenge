let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
function generateTarget() {
  return Math.floor(Math.random() * 9);
}

function compareGuesses(humanGuess, computerGuess, targetNum) {
  return Math.abs(humanGuess - targetNum) > Math.abs(computerGuess - targetNum)
    ? false
    : true;
}

function updateScore(winner) {
  if (winner === "human") {
    humanScore += 1;
  } else if (winner === "computer") {
    computerScore += 1;
  }
}

function advanceRound() {
  currentRoundNumber += 1;
}


