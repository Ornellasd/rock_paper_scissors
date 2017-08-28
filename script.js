function roShamBo() {


  function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
  }

  var player = prompt("rock (r), paper (p) or scissors (s)?");
  var computTard = Math.floor(randomNumber(1, 4));
  
  //player input
  if (player === "r") {
    var playerChoice = "rock";
  } else if (player === "p") {
    var playerChoice = "paper";
  } else if (player === "s") {
    var playerChoice = "scissors";
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
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    var result = "player wins";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    var result = "player wins";

  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    var result = "computer wins";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    var result = "computer wins";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    var result = "player wins";
  } else if (playerChoice === computerChoice) {
    var result = "Tie game";
  }

  document.getElementById("derp").innerHTML = ("Match: " + playerChoice + " vs. " + computerChoice);
  document.getElementById("outcome").innerHTML = ("Result: " + result);
  document.getElementById("score").innerHTML = ("Score:" + score);
}


/*
var score = 0;

if(result === "player wins"){
	score = score + 1;
}
*/