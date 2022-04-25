var userWinCount = 0;
var pcWinCount = 0;
var drawCount = 0;
var usernameInputCount = 0;
var username = 0;
var message = 0;

// counting rounds and win lose percentage
var roundsPlayed = 0;
var winLoseRoundsPlayed = 0;

var chooseSPS = function () {
  var randomNumber = Math.random() * 3;
  var foodNumber = Math.floor(randomNumber);
  return foodNumber + 1;
};

var usernameInputCheck = function (userSPS) {
  //1st time input for username, so username input count is still 0
  if (usernameInputCount < 1) {
    username = userSPS;
    var messageUsername = `Welcome ${username}. <br> Let's start playing scissors, paper, stones. `;
  }
  usernameInputCount += 1;
  console.log(`usernameInputCheck message1 ${messageUsername}`);
  return messageUsername;
};

//var userSPSErrorCheck = function (userSPS) {
// check if input is invalid i.e. not scissors, paper or stones, or the reversed
// if (
//   userSPS != "scissors" &&
//   userSPS != "paper" &&
//  userSPS != "stone" &&
//  userSPS != "reversed scissors" &&
//  userSPS != "reversed paper" &&
//   userSPS != "reversed stone"
//  ) {
//    var messageErrorCheck = `Invalid input. <br> Please select scissors, paper or stone.`;
// }
//console.log(`userSPSErrorCheck message ${messageErrorCheck}`);
//return messageErrorCheck;
//};

var winOrLoseSPSLogic = function (userSPS, pcSPS) {
  // draw scenario
  if (userSPS == pcSPS) {
    var winOrLose = "It's a draw. ";
    drawCount += 1;
  }
  // you win scenario
  else if (
    (userSPS == "scissors" && pcSPS == "paper") ||
    (userSPS == "paper" && pcSPS == "stone") ||
    (userSPS == "stone" && pcSPS == "scissors")
  ) {
    var winOrLose = "You win! ";
    userWinCount += 1;
    winLoseRoundsPlayed += 1;
  }
  // you lose scenario
  else if (
    (userSPS == "paper" && pcSPS == "scissors") ||
    (userSPS == "scissors" && pcSPS == "stone") ||
    (userSPS == "stone" && pcSPS == "paper")
  ) {
    var winOrLose = "You Lose! ";
    pcWinCount += 1;
    winLoseRoundsPlayed += 1;
  }
  return winOrLose;
};

var winOrLoseReversedSPSLogic = function (userSPS, pcSPS) {
  // draw scenario
  if (userSPS == pcSPS) {
    var winOrLose = "It's a draw. ";
    drawCount += 1;
  }
  // you win scenario
  else if (
    (userSPS == "reversed scissors" && pcSPS == "reversed paper") ||
    (userSPS == "reversed paper" && pcSPS == "reversed stone") ||
    (userSPS == "reversed stone" && pcSPS == "reversed scissors")
  ) {
    var winOrLose = "You lose! ";
    userWinCount += 1;
    winLoseRoundsPlayed += 1;
  }
  // you lose scenario
  else if (
    (userSPS == "reversed paper" && pcSPS == "reversed scissors") ||
    (userSPS == "reversed scissors" && pcSPS == "reversed stone") ||
    (userSPS == "reversed stone" && pcSPS == "reversed paper")
  ) {
    var winOrLose = "You win! ";
    pcWinCount += 1;
    winLoseRoundsPlayed += 1;
  }
  return winOrLose;
};

var main = function (input) {
  var userSPS = input;
  // change username only for first time input
  message = usernameInputCheck(userSPS);

  // check for error input (for 2nd inputs onwards)
  if (usernameInputCount > 1) {
    //Defining game logic
    var winOrLose = "Nothing happened. ";

    // pc chooses
    if (
      userSPS == "reversed scissors" ||
      userSPS == "reversed paper" ||
      userSPS == "reversed stone"
    ) {
      var pcSPS = chooseSPS();
      if (pcSPS == 1) {
        var pcSPS = "reversed scissors";
      } else if (pcSPS == 2) {
        var pcSPS = "reversed paper";
      } else if (pcSPS == 3) {
        var pcSPS = "reversed stone";
      }
      winOrLose = winOrLoseReversedSPSLogic(userSPS, pcSPS);
    } else if (
      userSPS == "scissors" ||
      userSPS == "paper" ||
      userSPS == "stone"
    ) {
      var pcSPS = chooseSPS();
      if (pcSPS == 1) {
        var pcSPS = "scissors";
      } else if (pcSPS == 2) {
        var pcSPS = "paper";
      } else if (pcSPS == 3) {
        var pcSPS = "stone";
      }
      winOrLose = winOrLoseSPSLogic(userSPS, pcSPS);
    }
    // compare who wins

    // check every scenario case
    // if (input == "scissors"){
    //   if (pcSPS == "scissors") {
    //    var winOrLose = "It's a draw. ";
    //   } else if (pcSPS == "paper") {
    //    var winOrLose = "You win! ";
    //  } else if (pcSPS == "stone") {
    //    var winOrLose = "You lose. ";
    //  }
    //}

    roundsPlayed += 1;
    var userWinRate = ((userWinCount / winLoseRoundsPlayed) * 100).toFixed(0);
    var pcWinRate = ((pcWinCount / winLoseRoundsPlayed) * 100).toFixed(0);

    message = `${username} chose ${userSPS} and PC chose ${pcSPS}. ${winOrLose}<br>
    So far ${username}, you won ${userWinCount}/${winLoseRoundsPlayed} turns and PC won ${pcWinCount}/${winLoseRoundsPlayed} turns. <br><br>
    Win rate: <br>
    ${username}- ${userWinRate}%, PC- ${pcWinRate}%. `;

    if (
      userSPS != "scissors" &&
      userSPS != "paper" &&
      userSPS != "stone" &&
      userSPS != "reversed scissors" &&
      userSPS != "reversed paper" &&
      userSPS != "reversed stone"
    ) {
      message = `Invalid input. <br> Please select scissors, paper or stone.`;
    }
  }
  return message;
};
