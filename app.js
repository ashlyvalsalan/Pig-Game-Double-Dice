/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundscore, activePlayer, randomNum1,randomNum2, thresholdValue;
scores=[0,0];
roundScore=0;
activePlayer=0;
//document.querySelector('.dice').style.display='none';
function rollDice()
{
  if(thresholdValue==null)
  {
    document.querySelector("#error").textContent="set the threshold value";

  }
  else{
    var max=7;
    var min=1;
    var randomNum1= Math.floor(Math.random()*(max - min))+min;
    var randomNum2= Math.floor(Math.random()*(max - min))+min;
    console.log(randomNum1);
    console.log(randomNum2);
    document.querySelector('.dice').style.display='block';
    var source1="dice-"+randomNum1+".png";
    var source2="dice-"+randomNum2+".png";
      document.querySelector(".dice").src=source1;
      document.querySelector(".dice1").src=source2;
    if(randomNum1==1 || randomNum2==1)
    {
      document.querySelector("#current-"+activePlayer).textContent=0;
      document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');

      if(activePlayer==1)
      {
        activePlayer=0;
      }

      else{
        activePlayer=1;
      }

    }
    else {
      roundScore=document.querySelector("#current-"+activePlayer).textContent;
      roundScore= parseInt(roundScore)+randomNum1+randomNum2;
      document.querySelector("#current-"+activePlayer).textContent=roundScore;

   }
  roundScore=0;
  }

}
function holdingValue()
{
  var current=document.querySelector("#current-"+activePlayer).textContent;
  scores[activePlayer]=scores[activePlayer]+parseInt(current);
  document.querySelector("#score-"+activePlayer).textContent=scores[activePlayer];
  if(scores[activePlayer]>=50)
  {
    activePlayer=parseInt(activePlayer)+1;
    document.querySelector("#winner").textContent="Player "+activePlayer+"  Won";

  }

  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');
  document.querySelector("#current-0").textContent=0;
  document.querySelector("#current-1").textContent=0;
  if(activePlayer==0)
  {
    activePlayer=1;
  }
  else{
    activePlayer=0;
  }
  roundScore=0;
}
function newGame()
{
  scores=[0,0];
  roundScore=0;
  activePlayer=0;
  document.querySelector("#current-0").textContent=0;
  document.querySelector("#current-1").textContent=0;
  document.querySelector("#score-0").textContent=0;
  document.querySelector("#score-1").textContent=0;
  document.querySelector("#winner").textContent="";
}
function setThresholdValue()
{
  thresholdValue=document.getElementById("fixedValue").value;
  document.getElementById("fixedValue").value="";
  document.querySelector("#error").textContent="";

}
