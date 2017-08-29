var playerScore = 0;
var computerScore = 0;
var playerIcon = document.getElementById("player-icon");
var computerIcon = document.getElementById("computer-icon");
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

  //Player input

  if (player === "r") {
    var playerChoice = "rock";
    playerIcon.src = iconArray[0];
  } else if (player === "p") {
    var playerChoice = "paper";
    playerIcon.src = iconArray[1];
  } else if (player === "s") {
    var playerChoice = "scissors";
    playerIcon.src = iconArray[2];
  } else {
    var playerChoice = "ERROR";
  }

  //Computer picks play based on randomNumber()

  if (computTard === 1) {
    var computerChoice = "rock";
    computerIcon.src = iconArray[0];
  } else if (computTard === 2) {
    var computerChoice = "paper";
    computerIcon.src = iconArray[1];
  } else {
    var computerChoice = "scissors";
    computerIcon.src = iconArray[2];
  }

  //Game logic

  if (playerChoice === "rock" && computerChoice === "paper") {
    var result = "Computer wins";
    computerWin();
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    var result = "Player wins";
    playerWin();
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    var result = "Player wins";
    playerWin();
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    var result = "Computer wins";
    computerWin();
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    var result = "Computer wins";
    computerWin();
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    var result = "Player wins";
    playerWin();
  } else if (playerChoice === computerChoice) {
    var result = "Tie game";
  }

  document.getElementById("outcome").innerHTML = ("Result: " + result + "!");
}
