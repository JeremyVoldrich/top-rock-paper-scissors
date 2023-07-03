// Set up function computers play

function getComputerChoice() {
  let compChoice = Math.floor(Math.random() * 3);
  if (compChoice === 0) {
    return "rock";
  } else if (compChoice === 1) {
    return "paper";
  } else if (compChoice === 2) {
    return "scissors";
  }
}
console.log(getComputerChoice());

// Set up function for round of play for players choice and computers choice

function playRound(playerChoice, computerChoice) {
	if (playerChoice.toLowerCase() === "rock" && computerChoice === "rock") {
  	return "Tied!";
  } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "paper") {
  	return "You lose! Paper beats rock.";
  } else if (playerChoice.toLowerCase() === "rock" && computerChoice === "scissors") {
    return "You win! Rock beats scissors.";
	} else if (playerChoice.toLowerCase() === "paper" && computerChoice === "rock") {
  	return "You win! Paper beats rock.";
  } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "paper") {
  	return "Tied!";
  } else if (playerChoice.toLowerCase() === "paper" && computerChoice === "scissors") {
  	return "You lose! Scissors beats paper.";
  } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "rock") {
  	return "You lose! Rock beats scissors.";
  } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "paper") {
  	return "You win! Scissors beats paper.";
  } else if (playerChoice.toLowerCase() === "scissors" && computerChoice === "scissors") {
  	return "Tied!";
  } else {
  	return "Invalid entry!"
  }
}

const playerChoice = "rock";
const computerChoice = "scissors";
console.log(playRound(playerChoice, computerChoice));