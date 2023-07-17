// Generate computer choice
const getComputerChoice = (userChoice) => {
  let computerChoice = ''    
  if (userChoice === `rock`)
      {computerChoice === 'paper'
      {return(`paper`)}
      }
    if (userChoice === `paper`)
     {computerChoice === `scissors` 
     {return(`scissors`)}
    }
      if (userChoice === `scissors`) {
      computerChoice === `rock` 
      {return(`rock`)}
    };}

// Game setup
const playGame = (userChoice) => {
  const computerChoice = getComputerChoice(userChoice)
    document.querySelector("#outcome").innerText = `You chose ${userChoice}, I chose ${computerChoice}, I win better luck next time`
  }