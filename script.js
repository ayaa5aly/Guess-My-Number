'use strict';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent =' 🎉 Correct Number!';
// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;
// document.querySelector('.guess').value = 23;
// console.log( document.querySelector('.guess').value;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

//document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number !';
  }
  // when player win
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = ' 🎉 Correct Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

  } 
  // when guess wrong
  
   else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📉 Too High' : '📈 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost  the game';
      document.querySelector('.score').textContent = 0;
    }
  }

  //   // when guess is too high
  //   else if (guess > secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📉 Too High';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     //  document.querySelector('.highscore').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost  the game';
  //       document.querySelector('.score').textContent = 0;
  //       //document.querySelector('.highscore').textContent = 0;
  //     }
  //   }
  //   //when guess is too low
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = '📈 Too Low';

  //       score--;
  //       document.querySelector('.score').textContent = score;
  //    //   document.querySelector('.highscore').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'you lost  the game';
  //       document.querySelector('.score').textContent = 0;
  //     //  document.querySelector('.highscore').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  let score = 20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing ....';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  // document.querySelector('.highscore').textContent = 0;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
