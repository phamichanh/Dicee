var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var dice1 = document.getElementsByClassName("img1")[0];
var diceImage1 = "images/dice" + randomNumber1 + ".png";
dice1.setAttribute("src", diceImage1);

var dice2 = document.getElementsByClassName("img2")[0];
var diceImage2 = "images/dice" + randomNumber2 + ".png";
dice2.setAttribute("src", diceImage2);

var res = "Draw"
if(randomNumber1 > randomNumber2) {
  res = "🚩 Player 1 wins!"
} else if (randomNumber1 < randomNumber2) {
  res = "Player 2 wins! 🚩"
}
var resultH1 = document.getElementsByClassName("container")[0].querySelector("h1");
resultH1.innerHTML = res;
