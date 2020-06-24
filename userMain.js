var random = ['ROCK', 'PAPER', 'SCISSORS'];
var userPlay;

document.onload = userPrompt();

function promptUser() {
  var userPrompt = prompt("ROCK, PAPER or SCISSORS, tyoe your choice in the box below!");
  (userPrompt !== null ? userPrompt : "").toUpperCase()
  game();
}
  // if (userPrompt === null) {
  //   userPrompt = "";
  // };
  // userPlay = userPrompt;

function computerPlay(arr) { 
  console.log("@ computerPlay")
  var rpsRandoms = [];       
  var randomIndex;
   for (var i = 0; i < arr.length - 1; i++) {
    randomIndex = Math.floor(Math.random() * arr.length);
    rpsRandom = arr[randomIndex];
    rpsRandoms.push(rpsRandom);
    //console.log("rpsRandom:", rpsRandom);
  } 
  //console.log("rpsRandoms:", rpsRandoms);
  return rpsRandoms
}

function playRPS(arr) {
  console.log("@ playRPS")
  var user, message;
  var computer = arr[0];
  user = userPlay == "ROCK" || userPlay == "PAPER" || userPlay == "SCISSORS" ? userPlay : arr[1];
  // user: manual input or randomly generated
  //console.log("u", user, "c", computer);
  message = computer === user ? `TIE! Both were ${user}`
  : user === 'ROCK' && computer === 'SCISSORS' || user === 'PAPER' && computer === 'ROCK' ||
    user === 'SCISSORS' && computer === 'PAPER' ? 
   `User wins! ${user} beats ${computer}`
    : `Computer wins! ${computer} beats ${user}`;
  //console.log(message.includes('User'));
  console.log("message = ", message);
  return message;
}

function game() {
  console.log("@ game");
  var rounds = [1, 2, 3, 4, 5];
  var userWins = 0;
  var computerWins = 0;
  var gameMessage = "";
  var computerRandom;
     for (var i = 0; i < rounds.length; i++) {
       gameMessage = playRPS(computerPlay(random))
      //  computerRandom = computerPlay(random);
      //  gameMessage = playRPS(computerRandom, userInput);
       console.log("gameMessage: ", !gameMessage.includes("TIE"), gameMessage.includes("User"));
       if (!gameMessage.includes("TIE")) {        
         gameMessage.includes("User") ? userWins++ : computerWins ++;
       };
     };
     console.log(userWins, computerWins);
    checkForDraw(userWins, computerWins);
}

function checkForDraw(num1, num2) {
    console.log("@ checkForDraw");
  num1 === num2 ? tieBreakRound(num1, num2) : displayGameWinner(num1, num2);
}

function tieBreakRound(num1, num2) {
    console.log("@ tieBreakRound");
    var gameMessage = playRPS(computerPlay(random));
  if (!gameMessage.includes("TIE")) {         
    gameMessage.includes("User") ? num1++ : num2++;
  };
  checkForDraw(num1, num2);
}

function displayGameWinner(num1, num2) {
    console.log("@ displayGameWinner");
  var gameWinner, winnerScore, loserScore, winMessage;
  gameWinner = num1 > num2 ? 'user' : 'computer';
  winnerScore = gameWinner === 'user' ? num1 : num2;
  loserScore = gameWinner === 'user' ? num2 : num1;
  winMessage = `${gameWinner.toUpperCase()} WINS! SCORE: ${winnerScore} to ${loserScore}!!!`
  //console.log("winMessage = ", winMessage);
  alert(`${gameWinner.toUpperCase()} WINS! score: ${winnerScore} to ${loserScore}!!!`);
}

  // if (userPlay === null) {alert("null")};
  // if (userPlay === "") {alert("emptyString")};
  // if (userPlay) {alert("true")};
  // if (!userPlay) {alert("!userPlay"); console.log("!:", !userPlay)};
  // if (userPlay == "ROCK" || userPlay == "PAPER" || userPlay == "SCISSORS") {alert("game() ON!");}
  // var user = userPlay || arr[1].toUpperCase();
