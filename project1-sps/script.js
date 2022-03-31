var chooseSPS = function () {
  var randomNumber = Math.random() * 3;
  var foodNumber = Math.floor(randomNumber);
  return foodNumber + 1;
};

var main = function (input) {
  var userSPS = input;
  var winOrLose = "Nothing happened. ";
  // pc chooses
  var pcSPS = chooseSPS();
  if (pcSPS == 1) {
    var pcSPS = "scissors";
  } else if (pcSPS == 2) {
    var pcSPS = "paper";
  } else if (pcSPS == 3) {
    var pcSPS = "stone";
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

  // draw scenario
  if (userSPS == pcSPS) {
    var winOrLose = "It's a draw. ";
  }
  // win scenario
  else if (
    (userSPS == "scissors" && pcSPS == "paper") ||
    (userSPS == "paper" && pcSPS == "stone") ||
    (userSPS == "stone" && pcSPS == "scissors")
  ) {
    var winOrLose = "You win! ";
  }
  // lose scenario
  else if (
    (userSPS == "paper" && pcSPS == "scissors") ||
    (userSPS == "scissors" && pcSPS == "stone") ||
    (userSPS == "stone" && pcSPS == "paper")
  ) {
    var winOrLose = "You Lose! ";
  }

  return `You chose ${userSPS} and PC chose ${pcSPS}. ${winOrLose}`;
};
