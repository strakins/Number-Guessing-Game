const gameIntro = document.querySelector(".gameInto");
const mainGame = document.querySelector(".game-body");
const userValue = document.querySelector('.user-guess')
const introDuction = document.querySelector('.intro')
const errorMail = document.querySelector('.mailWrong')
const feedback1 = document.querySelector('.success')
const playagain = document.querySelector('.play')
const winner = document.querySelector('.game-winner')
let currentLevel = document.querySelector(".current_Level")



let sysGuess, genValue, userGuess;
currentLevel.innerHTML = 0;


const loadGame = () => {
  errorMail.classList.add('hidden')
  let email = prompt("Please Enter Your Google Mail")
  if (email.includes("@gmail.com")) {
    mainGame.classList.remove('hidden')
  } else {
    errorMail.classList.remove('hidden')
  }

}
const reset = () => {
  mainGame.classList.add('hidden')
  winner.classList.add('hidden')
}
// const startAgain = () => {
//     playagain.innerHTML = "Play Again";
//     // feedback1.innerHTML = " "
//     userValue.innerHTML = " "
// }

function guessNumber() {
  feedback1.innerHTML = " ";
  // userValue.reset();

  switch (currentLevel.innerHTML) {
    case "1": {
      sysGuess = Number(Math.floor(Math.random() * 4));
      introDuction.innerHTML = "Please Enter a number between 0 - 3"
      break;
    }
    case "2": {
      sysGuess = Number(Math.floor(Math.random() * 5));
      introDuction.innerHTML = "Please Enter a number between 0 - 4"
      break;
    }
    case "3": {
      sysGuess = Number(Math.floor(Math.random() * 6));
      introDuction.innerHTML = "Please Enter a number between 0 - 5"
      break;
    }
    case "3": {
      sysGuess = Number(Math.floor(Math.random() * 7));
      introDuction.innerHTML = "Please Enter a number between 0 - 6"
      break;
    }
    case "4": {
      sysGuess = Number(Math.floor(Math.random() * 8));
      introDuction.innerHTML = "Please Enter a number between 0 - 7"
      break;
    }
    default: {
      sysGuess = Number(Math.floor(Math.random() * 3));
      introDuction.innerHTML = "Please Enter a number between 0 - 2"
      break;
    }
  }
  console.log(sysGuess);
  userValue.classList.remove('hidden')

  userValue.addEventListener('keypress', (e) => {
    userGuess = e.key
    if (userGuess > sysGuess) {
      feedback1.innerHTML = "Your Guess is too High Pls Try Again"
    } else if (userGuess < sysGuess) {
      feedback1.innerHTML = "Your Guess is too Low Pls Try Again"
    } else if (userGuess == sysGuess) {
      currentLevel.innerHTML++
      feedback1.innerHTML = `Congratulations 🎁 You Advanced to level ${currentLevel.innerHTML}`
      playagain.innerHTML = "Play Again";

      if (currentLevel.innerHTML > 5) {
        winner.classList.remove('hidden')
      }
    }
  })

}

