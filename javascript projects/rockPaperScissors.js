const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();

  if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb') {
   return userInput;
  }else {
    console.log ('Please Selected either rock, paper, or scissors')
    }
};

const getComputerChoice = () => {
  let randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber){
    case 0:
      return 'rock';
      break;
    case 1:
      return 'paper';
      break;
    case 2:
      return 'scissors';
      break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return 'The game is a Tie!';
  }

  if (userChoice === 'bomb') {
    return 'You\'re \'da Bomb!'
  }

  if (userChoice === 'rock'){
    if (computerChoice === 'paper'){
      return 'The Computer won!';
    } else {
      return 'You Won!';
    }
  }
  if (userChoice === 'paper'){
    if (computerChoice === 'scissors'){
      return 'The Computer won!';
    } else {
      return 'You Won!';
    }
  }
    if (userChoice === 'scissors'){
    if (computerChoice === 'rock'){
      return 'The Computer won!';
    } else {
      return 'You Won!';
    }
  }
    }

const playGame = () => {
  var userChoice = getUserChoice('rock');
  var computerChoice = getComputerChoice();
  console.log(`You threw a ${userChoice} and the Computer threw a ${computerChoice}`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();