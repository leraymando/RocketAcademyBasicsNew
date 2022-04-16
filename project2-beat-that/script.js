var rollDice = function () {
  var randomNumber = Math.random() * 6;
  var diceNumber = Math.ceil(randomNumber);
  return diceNumber;
};

var gameMode = "playerOneRoll";
var playerOneArray = [];
var playerTwoArray = [];
var combinePlayerOneNumber = 0;
var combinePlayerTwoNumber = 0;
var playerOneSumArray = [];
var playerTwoSumArray = [];

var main = function (input) {
  var myOutputValue;
  if (gameMode == "playerOneRoll") {
    var rollDice1 = rollDice();
    var rollDice2 = rollDice();
    playerOneArray[0] = rollDice1;
    playerOneArray[1] = rollDice2;
    myOutputValue = `Player One rolls ${playerOneArray[0]} & ${playerOneArray[1]}. Please select your order 1 or 2. `;
    gameMode = "playerOneOrder";
  } else if (gameMode == "playerOneOrder") {
    if (input == 1) {
      myOutputValue = `Player One's number is ${playerOneArray[0]}${playerOneArray[1]}. Now Player Two roll dice. `;
      combinePlayerOneNumber = Number(
        `${playerOneArray[0]}${playerOneArray[1]}`
      );
      playerOneSumArray.push(combinePlayerOneNumber);
    } else if (input == 2) {
      myOutputValue = `Player One's number is ${playerOneArray[1]}${playerOneArray[0]}. Now Player Two roll dice. `;
      combinePlayerOneNumber = Number(
        `${playerOneArray[1]}${playerOneArray[0]}`
      );
      playerOneSumArray.push(combinePlayerOneNumber);
    }
    gameMode = "playerTwoRoll";
  } else if (gameMode == "playerTwoRoll") {
    var rollDice1 = rollDice();
    var rollDice2 = rollDice();
    playerTwoArray[0] = rollDice1;
    playerTwoArray[1] = rollDice2;
    myOutputValue = `Player Two rolls ${playerTwoArray[0]} & ${playerTwoArray[1]}. Please select your order 1 or 2. `;
    gameMode = "playerTwoOrder";
  } else if (gameMode == "playerTwoOrder") {
    if (input == 1) {
      myOutputValue = `Player Two's number is ${playerTwoArray[0]}${playerTwoArray[1]}. Select game mode: highest or lowest combined`;
      combinePlayerTwoNumber = Number(
        `${playerTwoArray[0]}${playerTwoArray[1]}`
      );
      playerTwoSumArray.push(combinePlayerTwoNumber);
    } else if (input == 2) {
      myOutputValue = `Player Two's number is ${playerTwoArray[1]}${playerTwoArray[0]}. Select game mode: highest or lowest combined`;
      combinePlayerTwoNumber = Number(
        `${playerTwoArray[1]}${playerTwoArray[0]}`
      );
      playerTwoSumArray.push(combinePlayerTwoNumber);
    }
    gameMode = "compare";
  } else if (gameMode == "compare") {
    if (input == "highest") {
      if (combinePlayerOneNumber > combinePlayerTwoNumber) {
        myOutputValue = `Player One Wins with dice rolll number of ${combinePlayerOneNumber}. Roll again `;
      } else if (combinePlayerOneNumber < combinePlayerTwoNumber) {
        myOutputValue = `Player Two Wins with dice rolll number of ${combinePlayerTwoNumber}. Roll again`;
      }
    }
    if (input == "lowest") {
      if (combinePlayerOneNumber < combinePlayerTwoNumber) {
        myOutputValue = `Player One Wins with dice rolll number of ${combinePlayerOneNumber}. Roll again `;
      } else if (combinePlayerOneNumber > combinePlayerTwoNumber) {
        myOutputValue = `Player Two Wins with dice rolll number of ${combinePlayerTwoNumber}. Roll again`;
      }
    }

    gameMode = "playerOneRoll";
  }

  // Running sum - for loop
  // player 1 sum
  var playerOneSum = 0;
  for (var index = 0; index < playerOneSumArray.length; index += 1) {
    playerOneSum = playerOneSum + playerOneSumArray[index];
    console.log(`player 1 sum counter ${index}`);
  }
  // player 2 sum
  var playerTwoSum = 0;
  for (var index = 0; index < playerTwoSumArray.length; index += 1) {
    playerTwoSum = playerTwoSum + playerTwoSumArray[index];
    console.log(`player 2 sum counter ${index}`);
  }

  // Display message
  var leaderboard =
    `Leaderboard: <br> Player 1: ` +
    playerOneSum +
    `<br> Player 2: ` +
    playerTwoSum +
    `<br>`;
  var outputBoxValue = leaderboard + "<br>" + myOutputValue;
  return outputBoxValue;
};
