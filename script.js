var playOptions  = ['ROCK', 'PAPER', 'SCISSORS'];
var userPlay;

document.onload = loadGame();

function loadGame() {
  var gameRounds = [1, 2, 3, 4, 5];
  var userWins = 0;
  var computerWins = 0;
  var gameMessage = "";
  for (var i = 0; i < gameRounds.length; i++) {
    promptUser();
    gameMessage = oneRoundRPS(computerPlay(playOptions));
    if (!gameMessage.includes("TIE")) {      
      gameMessage.includes("User") ? userWins++ : computerWins++;
    };
    alert(`${gameMessage} score: USER ${userWins}pts vs COMPUTER ${computerWins}pts`);
  };
  checkForDraw(userWins, computerWins);
}

function promptUser() {
  var userPrompt = prompt("ROCK, PAPER or SCISSORS? Enter your choice below!");
  userPlay = (userPrompt !== null ? userPrompt : "").toUpperCase();
}

function computerPlay(playOptions) { 
  var rpsRandoms = [];       
  var randomIndex;
   for (var i = 0; i < playOptions.length - 1; i++) {
    randomIndex = Math.floor(Math.random() * playOptions.length);
    singleRandomRPS = playOptions[randomIndex];
    rpsRandoms.push(singleRandomRPS);
  };
  return rpsRandoms;
}

function oneRoundRPS(randomOptions) {
  var user, roundMessage;
  var computer = randomOptions[0];
  user = userPlay === "ROCK" || userPlay === "PAPER" || userPlay === "SCISSORS" 
  ? userPlay : randomOptions[1];
  roundMessage = computer === user ? `TIE! Both of you were ${user}!`
  : user === 'ROCK' && computer === 'SCISSORS' || 
    user === 'PAPER' && computer === 'ROCK' ||
    user === 'SCISSORS' && computer === 'PAPER' 
  ? `User wins! ${user} beats ${computer}!` 
    : `Computer wins! ${computer} beats ${user}!`;
  return roundMessage;
}

function checkForDraw(userScore, compScore) {
  userScore === compScore ? tieBreakRound(userScore, compScore) : displayGameWinner(userScore, compScore);
}

function tieBreakRound(userScore, compScore) {
    var gameMessage = oneRoundRPS(computerPlay(playOptions));
  if (!gameMessage.includes("TIE")) {         
    gameMessage.includes("User") ? userScore++ : compScore++;
  };
  checkForDraw(userScore, compScore);
}

function displayGameWinner(userScore, compScore) {
  var gameWinner, winnerScore, loserScore, winMessage;
  gameWinner = userScore > compScore ? 'user' : 'computer';
  winnerScore = gameWinner === 'user' ? userScore : compScore;
  loserScore = gameWinner === 'user' ? compScore : userScore;
  winMessage = `${gameWinner.toUpperCase()} WINS! SCORE: ${winnerScore} to ${loserScore}!`;
  alert(winMessage);
  promptPlayAgain();
}

function promptPlayAgain() {
  var playAgainPrompt = prompt("PLAY AGAIN?? click OK to CONTINUE, click CANCEL to EXIT GAME", "type YES to continue or NO to exit game");
  if (playAgainPrompt !== null) {
  userPlay = playAgainPrompt.toUpperCase() !== "NO" ?
    userPlay === "YES" || "" ? loadGame() : null : null;
  };
}
