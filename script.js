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
// Determine a winner
const determineWinner = (userChoice, computerChoice) => {
if (userChoice === computerChoice) {
  return(`It's a draw, let's go again!`);}
  else {
    if (userChoice === `rock`)
    {if (computerChoice === 'paper')
    {return(`I win, better luck next time`)}
    else {return(`You win!`)}
    }
  
  if (userChoice === `paper`) {
    if (computerChoice === `scissors`) {
        return(`I win, better luck next time`)}
    else {return(`You win!`)}
  }
    if (userChoice === `scissors`) {
    if (computerChoice === `rock`) {
        return(`I win, better luck next time`)}
    else {return(`You win!`)}
  }}};

// Game setup
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(userChoice, computerChoice)
    document.querySelector("#outcome").innerText = `You chose ${userChoice}, I chose ${computerChoice}, ${winner}`
};
