var p1temp = 0;
var p2temp = 0;
var p1roll = 0;
var p2roll = 0;
var p1score = 0;
var dice = 0;
var p2score = 0;

document.getElementById("p1score").innerHTML = "Score: " + p1score;
document.getElementById("p1roll").innerHTML = p1roll;
document.getElementById("p1temp").innerHTML = p1temp;

document.getElementById("p2score").innerHTML = "Score: " + p2score;
document.getElementById("p2roll").innerHTML = p2roll;
document.getElementById("p2temp").innerHTML = p2temp;

function rollPlayer() {
  dice = Math.floor(Math.random() * 6) + 1;
  if (document.getElementById("player").innerHTML == p1) {
    p1roll = dice;
    if (dice != 1) {
      p1temp += p1roll;
      document.getElementById("p1temp").innerHTML = p1temp;
    } else {
      p1temp = 0;
      document.getElementById("player").innerHTML = p2;
      document.getElementById("p1temp").innerHTML = p1temp;
    }
    document.getElementById("p1roll").innerHTML = p1roll;
  } else if (document.getElementById("player").innerHTML == p2) {
    p2roll = dice;
    if (dice != 1) {
      p2temp += p2roll;
      document.getElementById("p2temp").innerHTML = p2temp;
    } else {
      p2temp = 0;
      document.getElementById("player").innerHTML = p1;
      document.getElementById("p2temp").innerHTML = p2temp;
    }
    document.getElementById("p2roll").innerHTML = p2roll;
  }
  gameWin();
}

var p1 = "player 1";
var p2 = "player 2";
document.getElementById("player").innerHTML = p1;

function holdPlayer() {
  if (document.getElementById("player").innerHTML == p1) {
    p1score += p1temp;
    p1temp = 0;
    document.getElementById("p1score").innerHTML = "Score: " + p1score;
    document.getElementById("player").innerHTML = p2;
    if (p1score >= 100) {

    }
  } else {
    p2score += p2temp;
    p2temp = 0;
    document.getElementById("p2score").innerHTML = "Score: " + p2score;
    document.getElementById("player").innerHTML = p1;
  }
  gameWin();
}

function gameWin() {
  if (p1score >= 100) {
    alert("Player 1 Wins!");
  } else if (p2score >= 100) {
    alert("Player 2 Wins!");
  }
}
