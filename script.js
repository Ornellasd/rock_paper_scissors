var playerScore = 0;
var computerScore = 0;

var resultImg = document.getElementById("derp-image");

var iconArray = [
  "img/rock.png",
  "img/paper.png",
  "img/scissors.png"
]

function randomNumber(min, max) {
  return Math.random() * (max - min) + min;
}

function playerWin() {
  playerScore++;
  document.getElementById("player-score").innerHTML = playerScore;
}

function computerWin() {
  computerScore++;
  document.getElementById("computer-score").innerHTML = computerScore;
}

function roShamBo() {

  var player = prompt("rock (r), paper (p) or scissors (s)?");
  var computTard = Math.floor(randomNumber(1, 4));


  //player input
  if (player === "r") {
    var playerChoice = "rock";
    resultImg.src = iconArray[0];
  } else if (player === "p") {
    var playerChoice = "paper";
    resultImg.src = iconArray[1];
  } else if (player === "s") {
    var playerChoice = "scissors";
    resultImg.src= iconArray[2];
  } else {
    var playerChoice = "ERROR";
  }

  //Computer picks play based on randomNumber()

  if (computTard === 1) {
    var computerChoice = "rock";
  } else if (computTard === 2) {
    var computerChoice = "paper";
  } else {
    var computerChoice = "scissors";
  }

  //Game logic
  if (playerChoice === "rock" && computerChoice === "paper") {
    var result = "computer wins";
    computerWin();
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    var result = "player wins";
    playerWin();
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    var result = "player wins";
    playerWin();
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    var result = "computer wins";
    computerWin();
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    var result = "computer wins";
    computerWin();
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    var result = "player wins";
    playerWin();
  } else if (playerChoice === computerChoice) {
    var result = "Tie game";
  }

  document.getElementById("derp").innerHTML = ("Match: " + playerChoice + " vs. " + computerChoice);
  document.getElementById("outcome").innerHTML = ("Result: " + result);
}
