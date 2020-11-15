

var randomNumber1= Math.floor(Math.random()*6) + 1;
var randomDiceImage="dice"+randomNumber1+".png";
var randomImageSource="images/"+ randomDiceImage;

var image1=document.querySelector(".img1");
image1.setAttribute("src",randomImageSource);

var randomNumber2= Math.floor(Math.random()*6) + 1;

var randomIamgesSource2="images/dice"+randomNumber2+".png";
document.querySelector(".img2").setAttribute("src",randomIamgesSource2);

if(randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="Draw!!";
}else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").innerHTML="Player2 WINS!!";
}else{
  document.querySelector("h1").innerHTML="Player 1 WINS!!";
}



























































// // Player Names
// var player1= "Player 1";
// var player2= "Player 2";
//
// // Funtion to change player names
// function editNames(){
//   player1=prompt("Give a name for Player 1 ");
//   player2=prompt("Give a name for Player 2");
//
//   document.querySelector(p.player1).innerhtml=player1;
//   document.querySelector(p.player2).innerhtml=player2;
//
// }
//
// //Function to roll the Dicee
//
// function rollTheDicee(){
//   setTimeOut(function() {
//
//     var randomNumber1=Math.floor(Math.random()*6)+ 1;
//     var randomNumber2=Math.floor(Math.random()*6)+ 1;
//
//     document.querySelector(.img1).setAttribute("src","dice"+ randomNumber1 +".png");
//     document.querySelector(.img2).setAttribute("src","dice"+ randomNumber2+"png");
//
//     if(randomNumber1 === randomNumber2){
//       document.querySelector("h1").innerhtml="Draw!!";
//     }else if(randomNumber1 < randomNumber2){
//       document.querySelector("h1").innerhtml=( player2 + "WINS!!");
//     }
//     else{
//      document.querySelector("h1").innerhtml= (player1 + "WINS !!");
//     }
//   }, 2500);
// }
