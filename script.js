// User's choice
const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  }
};

// Generate computer choice
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

//table reveal
const tableReveal = () => {
  document.querySelector("#record").style.display = "table";
};

// Counter setup
let wins = 0;
let draws = 0;
let losses = 0;

// Table cell setup
const winsCell = document.querySelector("#record").rows[1].cells.item(0);
const drawsCell = document.querySelector("#record").rows[1].cells.item(1);
const lossesCell = document.querySelector("#record").rows[1].cells.item(2);

// button result coloring setup
const correctAnswer = (button) => {
  document.querySelector(button).style.backgroundColor = "#b3f2b3";
  setTimeout(function () {
    document.querySelector(button).style.backgroundColor = "#EFEFEF";
  }, 1000);
};

const wrongAnswer = (button) => {
  document.querySelector(button).style.backgroundColor = "#f27d7d";
  setTimeout(function () {
    document.querySelector(button).style.backgroundColor = "#EFEFEF";
  }, 1000);
};

const outcomes = {
  rock: {
    rock: "draw",
    paper: "loss",
    scissors: "win",
  },
  paper: {
    rock: "win",
    paper: "draw",
    scissors: "loss",
  },
  scissors: {
    rock: "loss",
    paper: "win",
    scissors: "draw",
  },
};

const determineWinner = (userChoice, computerChoice) => {
  tableReveal();
  const outcome = outcomes[userChoice][computerChoice];
  let winner = "outcome";

  switch (outcome) {
    case "win":
      wins = wins + 1;
      winsCell.innerHTML = wins;
      correctAnswer(`#${userChoice}`);
      return "You win!";

    case "loss":
      losses = losses + 1;
      lossesCell.innerHTML = losses;
      wrongAnswer(`#${userChoice}`);
      return "I win, better luck next time";

    case "draw":
      draws = draws + 1;
      drawsCell.innerHTML = draws;
      return "It's a draw, let's go again!";
  }
};

// Game setup
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice);
  document.querySelector(
    "#outcome"
  ).innerText = `You chose ${userChoice}, I chose ${computerChoice}, ${winner}`;
};
