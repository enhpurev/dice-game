// odoo ehnees ni bichne
// 1 huvisagch zarlah 
// activePlayer ehnii player 0 uchir 0 utga hadgalna

var activePlayer=0;
//player score zarlana
var collectedScore=[0,0];
// roundscore
var roundScore=0;
var diceNumber=0;
var remover=0;
// 2 dom oos div uuded handaj heregtseet tag uudiin ehni utguudiig teglene
// 0 leh 5 item baina 
// shoonii zurag uzuuldeg imgDiv
var imgDiv=document.getElementById("imgC");
// huvisagchid hadgalj bolohguune 
// oor awchihmaar item bnu ???
var rollButton=document.getElementById("btnRoll");
var holdButton=document.getElementById("btnHold");
var newButton=document.getElementById("btnNew");
document.querySelector(".player-0-panel").classList.remove('active');
//======= endees uguudiig teglene
  imgDiv.style.display="none";
//console.log('shoo arilgaw');
// end huvisagchid anonimous function bichne

// 3 nextPlayer() function bichne
// bichsen
// 4 roll button deer eventListener eer function bichne  . anonymous function bichiyda hestugern
//--------eventListener------------------rollBtn
function startFun(){
    startCall();
    var docuquese=function(id){
        return window.document.getElementById(id);
    }
    docuquese("current-0").textContent=0;
    docuquese("current-1").textContent=0;
    docuquese("score-0").textContent=0;
    docuquese("score-1").textContent=0;
    alert('Тоглоомын дүрэмд'+"\n"
       + '1. 100 оноо цуглуулсан хүн хожно.'+"\n"+
         '2. Шоог хэдэн ч удаа орхиж болно.'+"\n"+
         '3. Шоо 1 буувал дараачийн тоглогч шоог орхино!'
    );
alert('Тоглоомыг эхлүүлэх үү?')

rollButton.addEventListener("click",function1);
function function1(){
  
//console.log('roll button check');
diceNumber=Math.floor(Math.random()*6)+1;
//diceNumber=1;
console.log(diceNumber);

diceRollerY();
diceRollerZ();
if(diceNumber !== 1){
    isitOneRight=false;
playDice();

}
else{
nextPlayer();
}
}
//document.body.onkeyup = function(e) {
  //  if (e.key == " " || e.code == "Space" || e.keyCode == 32 ){
      //your code
      
    //holdFunction();
    //}
 // }
//------eventListener-----------------------holdBtn
function holdFunction(){
    var isCount=0;
    isCount=isCount+1;
// ene ajillahaar yah ystoi blee??
//enen deer daanguut eelj soligdono 
nextHoldPlayer();
// 5 hold button deer event listener bichne 
function nextHoldPlayer(){
    if(isCount<2){
        cutHold();
    }else{
        backHold();
    }
var docuse=function(classu){
return document.querySelector(classu);
}
docuse(".defuse0").style.visibility="hidden";
docuse(".defuse1").style.visibility="hidden";
docuse(".success0").style.visibility="hidden";
docuse(".success1").style.visibility="hidden";
docuquese("current-0").textContent=0;
docuquese("current-1").textContent=0;
// id gaar handaj score temdegleh
//console.log(activePlayer);
//niilber=niilber+roundScore;
    // stop call
//roundScore=0;
collectedScore[activePlayer]=collectedScore[activePlayer]+roundScore;
roundScore=0;
// end eroosoo l 
if(collectedScore[activePlayer]>=100){
docuquese("score-"+activePlayer).textContent=collectedScore[activePlayer];
stopCall();
}
else
{
//console.log(roundScore);
docuquese("score-"+activePlayer).textContent=collectedScore[activePlayer];
docuse(".player-"+activePlayer+"-panel").classList.toggle("active");

activePlayer===0 ? activePlayer=1 : activePlayer=0;
docuse(".player-"+activePlayer+"-panel").classList.toggle("active");    
}
}
}
 function nextPlayer(){
    cutHold();
      document.querySelector(".defuse"+remover).style.visibility="hidden"
    // argumenteer huvisagch awahguu
    //
  //  console.log('nextPlayer()');
    //
    imgDiv.style.display="block";
    imgDiv.style.border="2px #orangered solid";
    imgDiv.src="dice-1.png";
    document.querySelector(".success"+activePlayer).style.visibility="hidden";
    document.querySelector(".defuse"+activePlayer).style.visibility="visible";
    // info haragdah haragdahgui tuhai
    // active class shiljih tuhai
    document.querySelector(".player-"+activePlayer+"-panel").classList.toggle("active");
    // shoo 1 buuhad score 00 boloh tuhai
    roundScore=0;
    docuquese("current-"+activePlayer).textContent=roundScore;
    // sjiljilt 
  //  activePlayer=0 ? activePlayer=1 : activePlayer=0;
    // active++
    
    if(activePlayer===0){
     //   document.querySelector(".defuse"+activePlayer).style.visibility="hidden";
        activePlayer=1;
        remover=0;
        document.querySelector(".player-"+activePlayer+"-panel").classList.toggle("active");
    }else{
        
        activePlayer=0;
        remover=1;
        document.querySelector(".player-"+activePlayer+"-panel").classList.toggle("active");
    }
 //   console.log(activePlayer);
  //  document.querySelector(".player-"+activePlayer+"-panel").classList.toggle("active");

 }
 function playDice(){
    
    backHold();
    document.querySelector(".defuse"+remover).style.visibility="hidden";
  
 //   console.log('playDice()');
    imgDiv.style.display="block";
  
    imgDiv.style.border="2px solid #138d75";
    
    imgDiv.src="dice-"+diceNumber+".png";
   
    // info
document.querySelector(".success"+activePlayer).style.visibility="visible";
roundScore=roundScore+diceNumber;
docuquese("current-"+activePlayer).textContent=roundScore;

 }
 function stopCall(){
    document.getElementById("name-"+activePlayer).textContent="Winner!";
    document.querySelector(".player-"+activePlayer+"-panel").classList.add('winner');
    document.querySelector(".player-"+activePlayer+"-panel").classList.remove('active');
    imgDiv.style.visibility="hidden";
    rollButton.removeEventListener("click",function1);
    holdButton.removeEventListener("click",holdFunction);
  
 }
 function startCall(){
    document.getElementById("name-"+activePlayer).textContent="player"+(activePlayer+1);
    document.querySelector(".player-"+activePlayer+"-panel").classList.remove('winner');
    document.querySelector(".player-"+activePlayer+"-panel").classList.add('active');
    imgDiv.style.visibility="visible";
    imgDiv.style.border="2px orangered solid";
    imgDiv.src="dice-1.png";
    collectedScore[0]=0;
    collectedScore[1]=0;
   
 }
 function cutHold()
 {
 holdButton.removeEventListener("click",holdFunction);
}
function backHold(){
    holdButton.addEventListener("click",holdFunction);
}
// hiisen hamgaalaltuud 
// 1 togloom duussanii daraa roll hold button deer darj bolohgui 
// 2 togloom ehleegui baihad hold button deer darj bolohgui
// 3 shoo 1 buusan baihad hold deer darj bolohgui
}
//
newButton.addEventListener("click",startFun);
// huuuy end 1 asuudal baina
// dongoj ehlehed active class iig remove hiih???
// togloom ehlehed shoo haachiwaaa
// hamgiin ehend 1 buuhad haragdahgui baina
//==========---------- buh asuudluudiig shiidew uunees tsaash gewel new game button deer code bichij goy bolgoh 
//==-------- bas player name bichij boldog update uudiig hiij bolno
function diceRollerZ(){
    document.querySelector(".dice").classList.toggle("imgSphy");
}

function diceRollerY(){
    document.querySelector(".dice").classList.toggle("imgSpinner");
}
//switchh=true ? diceRollerx() : switchh=false;
