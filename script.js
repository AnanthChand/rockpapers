const buttons = document.querySelectorAll(".btn");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const roundResultDisplay = document.querySelector("#round-result");
const gameResultDisplay = document.querySelector("#game-result");

let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  // randomly returns rock, paper, or scissors
  const options = ["rock", "paper", "scissors"];
  return options[Math.floor(Math.random() * options.length)];
}

function playRound(playerSelection, computerSelection) {
  // compares playerSelection and computerSelection to determine winner of the round
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection === computerSelection) {
    return "It's a tie!";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
    return `You win! ${playerSelection} beats ${computerSelection}.`;
  } else {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
    return `You lose! ${computerSelection} beats ${playerSelection}.`;
  }
}

function endGame() {
  // disables buttons and displays final result
  buttons.forEach((button) => (button.disabled = true));
  if (playerScore > computerScore) {
    gameResultDisplay.textContent = "You win the game!";
  } else if (playerScore < computerScore) {
    gameResultDisplay.textContent = "You lose the game!";
  } else {
    gameResultDisplay.textContent = "It's a tie game!";
  }
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const roundResult = playRound(playerSelection, computerSelection);
    roundResultDisplay.textContent = roundResult;
    if (playerScore === 5 || computerScore === 5) {
      endGame();
    }
  });
});
