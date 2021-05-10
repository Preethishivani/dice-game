'use strict';

const btnRoll = document.querySelector('.btn-roll');
const imgDisplay = document.querySelector('.img');
const extraPara = document.querySelector('.extra');
const currentScoreOne = document.querySelector('.currentScore-1');
const currentScoreTwo = document.querySelector('.currentScore-2');
const mainScoreOne = document.querySelector('.mainScore-1');
const mainScoreTwo = document.querySelector('.mainScore-2');
const playerOne = document.querySelector('.player-1');
const playerTwo = document.querySelector('.player-2');
const btnHold = document.querySelector('.btn-hold');
const btnAgain = document.querySelector('.btn-again');


imgDisplay.classList.add('hidden');
let currentScore = 0;
let activePlayer = 1;
let scores = [0,0,0];

currentScoreOne.textContent = 0;
currentScoreTwo.textContent = 0;
mainScoreOne.textContent = 0;
mainScoreTwo.textContent = 0;
let extra = undefined;
let playing = true;
//dice button
btnRoll.addEventListener('click',function(){
  if(playing){
    //showing dice after clicking button
    imgDisplay.classList.remove('hidden');
    extraPara.classList.add('hidden');

    //generating random dice
    const randomDice = Math.floor(Math.random() * 6 + 1);
    console.log(randomDice);

    //display the created random dice
    imgDisplay.src = `dice-${randomDice}.png`;

    //checking for dice-1
    if(randomDice!=1){
      currentScore = currentScore + randomDice;
      //currentScoreOne.textContent = currentScore;
      document.querySelector(`.currentScore-${activePlayer}`).textContent = currentScore;
    }else{
      //currentScoreOne.textContent = 0;
      document.querySelector(`.currentScore-${activePlayer}`).textContent = 0;
      currentScore = 0;
      //activePlayer = activePlayer === 1 ? 2 : 1;
      if(activePlayer===1){
        activePlayer = 2;
      }else{
        activePlayer = 1;
      }
      // this only changes for one time
      // playerOne.classList.remove('active-player');
      // playerTwo.classList.add('active-player');

      playerOne.classList.toggle('active-player');
      playerTwo.classList.toggle('active-player');
    }
  }
})

//hold button
btnHold.addEventListener('click',()=>{
  if(playing){
    scores[activePlayer] = scores[activePlayer] + currentScore;
    document.querySelector(`.mainScore-${activePlayer}`).textContent = scores[activePlayer];
    if(scores[activePlayer]>=20){
      //finish game
      imgDisplay.classList.add('hidden');
      document.querySelector(`.player-${activePlayer}`).classList.remove('active-player');
      document.querySelector(`.player-${activePlayer}`).classList.add('winner');
      playing = false;
    }else{
      //change or switch to next player
      document.querySelector(`.currentScore-${activePlayer}`).textContent = 0;
      currentScore = 0;
      //activePlayer = activePlayer === 1 ? 2 : 1;
      if(activePlayer===1){
        activePlayer = 2;
      }else{
        activePlayer = 1;
      }
      // this only changes for one time
      // playerOne.classList.remove('active-player');
      // playerTwo.classList.add('active-player');
      playerOne.classList.toggle('active-player');
      playerTwo.classList.toggle('active-player');
    }
  }
});


btnAgain.addEventListener('click',()=>{
  let currentScore = 0;
  let activePlayer = 1;
  let scores = [0,0,0];
  let extra = undefined;

  currentScoreOne.textContent = 0;
  currentScoreTwo.textContent = 0;
  mainScoreOne.textContent = 0;
  mainScoreTwo.textContent = 0;

  imgDisplay.classList.add('hidden');
  extraPara.classList.remove('hidden');

  playerOne.classList.add('active-player');
  playerOne.classList.remove('winner');
  playerTwo.classList.remove('winner');
  playerTwo.classList.remove('active-player');
  playing = true;

});