
var score;
var currentScore;
var activePlayer;
var value=100;
var gamePlaying;
initialize();

alert('Default goal score is 100');
document.querySelector('.btn-roll').addEventListener('click',function(){
   if(gamePlaying===true){
    var dice=Math.floor(Math.random()*6 +1);
   
    var diceDisplay=document.querySelector('.dice');
    diceDisplay.src='dice-'+dice+'.png';
     var dice2=Math.floor(Math.random()*6 +1);
     var diceDisplay2=document.querySelector('.dice2');
    diceDisplay2.src='dice-'+dice2+'.png';
   document.querySelector('.dice').style.display='block';
    document.querySelector('.dice2').style.display='block';
    currentScore+=(dice+dice2);
    
    document.querySelector('#current-'+activePlayer).innerHTML=currentScore;
    
     if(dice===1 || dice2===1)
         {
             changePlayers();
         }
   }

    
    
    
    
    
    
    
})


function changePlayers(){
    
    activePlayer===0 ? activePlayer=1 :
    activePlayer=0;
    
  document.querySelector('.player-0-panel').classList.toggle('active');
      document.querySelector('.player-1-panel').classList.toggle('active');
document.getElementById('current-0').innerHTML='0';
document.getElementById('current-1').innerHTML='0';
    document.querySelector('.dice').style.display='none';
document.querySelector('.dice2').style.display='none';
    currentScore=0;




    
    
    
}

document.querySelector('.btn-hold').addEventListener('click',function(){
     if(gamePlaying===true){
    score[activePlayer]+=currentScore;
    document.querySelector('#score-'+activePlayer).innerHTML=score[activePlayer];
    
    if(score[activePlayer]>=value)
        {
           document.querySelector('.player-'+activePlayer+'-panel').classList.remove('active');
            document.querySelector('.player-'+activePlayer+'-panel').classList.add('winner');
            document.querySelector('#name-'+activePlayer).innerHTML="WINNER !";
            gamePlaying=false;
            document.querySelector('.dice').style.display='none';
            document.querySelector('.dice2').style.display='none';
        }
    else{
        changePlayers();
    }
     }
})


function response(){
    
    value=document.getElementById('inputValue').value;
    alert('The default goal score has been changed to :'+value);
    
    
    
    
}
    function entered(event){
        if(event.key==='Enter')
            {
                response();
            }
        
        
    }



document.querySelector('.btn-new').addEventListener('click',initialize);


function initialize(){
    score=[0,0];
    currentScore=0;
    activePlayer=0;
 
    gamePlaying=true;
    
    document.getElementById('score-0').innerHTML='0';
document.getElementById('score-1').innerHTML='0';
document.getElementById('current-0').innerHTML='0';
document.getElementById('current-0').innerHTML='0';
document.querySelector('.dice').style.display='none';
document.querySelector('.dice2').style.display='none';
    document.getElementById('name-0').innerHTML='Player 1';
    document.getElementById('name-1').innerHTML='Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
     document.querySelector('.player-1-panel').classList.remove('active'); 
    document.querySelector('.player-0-panel').classList.add('active');
    
    

    
}
