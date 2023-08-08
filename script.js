// Generate computer choice
const getComputerChoice = (userChoice) => {   
switch (userChoice) {
  case 'rock': 
  return 'paper';
  case 'paper':
    return 'scissors';
  default:
    return 'rock';
}}

// Game setup
const playGame = (userChoice) => document.querySelector("#outcome").innerText = `You chose ${userChoice}, I chose ${getComputerChoice(userChoice)}, I win better luck next time`;