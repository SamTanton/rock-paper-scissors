// User's choice
const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' ) {
  return userInput;
} else {
  console.log('Error!');
}};
// Generate computer choice
const getComputerChoice = () => {
const randomNumber = Math.floor(Math.random() * 3)
switch (randomNumber) {
  case 0:
    return 'rock';
    break;
  case 1:
    return 'paper';
    break;
  case 2:
    return 'scissors';
    break;
}};
// Counter setup

let wins = 0;
let draws = 0;
let losses = 0;

// Determine a winner
const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice) {
  draws = draws + 1
      document.querySelector("#record").rows[1].cells.item(1).innerHTML = draws
      tableReveal()
  return(`It's a draw, let's go again!`);}
  else {
    if (userChoice === `rock`)
    {if (computerChoice === 'paper')
    {losses = losses + 1
      document.querySelector("#record").rows[1].cells.item(2).innerHTML = losses
      tableReveal()
      return(`I win, better luck next time`)}
    else { wins = wins + 1
      document.querySelector("#record").rows[1].cells.item(0).innerHTML = wins
      tableReveal()
      return(`You win!`)}
    }
  
  if (userChoice === `paper`) {
    if (computerChoice === `scissors`) {
      losses = losses + 1
      document.querySelector("#record").rows[1].cells.item(2).innerHTML = losses
      tableReveal()
        return(`I win, better luck next time`)}
    else { wins = wins + 1
      document.querySelector("#record").rows[1].cells.item(0).innerHTML = wins
      tableReveal()
      return(`You win!`)}
  }
    if (userChoice === `scissors`) {
    if (computerChoice === `rock`) {
      losses = losses + 1
      document.querySelector("#record").rows[1].cells.item(2).innerHTML = losses
      tableReveal()
        return(`I win, better luck next time`)}
    else { wins = wins + 1
          document.querySelector("#record").rows[1].cells.item(0).innerHTML = wins
          tableReveal()
          return(`You win!`)
          }
  }}};

// Game setup
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice)
    document.querySelector("#outcome").innerText = `You chose ${userChoice}, I chose ${computerChoice}, ${winner}`
};

//table reveal
const tableReveal = () => {
  document.querySelector("#record").style.display = 'table';
}