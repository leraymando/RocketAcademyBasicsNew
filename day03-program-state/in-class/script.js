// secret word: banana (1), chisel(2), faucet(3).
// pc choses secret words (Math.random) number --> words
// to win, u must guess correctly twice, no need consecutively
// message: You guessed xx, the secret word is xx, number of guess to win is xx

var guessCorrect = 2;
var guessCorrectCons = 2;
var roundWinNumber = randomWinNumber();

var selectSecretWord = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var secretWord = randomInteger + 1;
  return secretWord;
};

var secretWordBaseMain = function (input) {
  // Complete the Base: Secret Word exercise below with secretWordBaseMain as the main function.
  var userSecretWord = input;
  var pcSecretWordNumber = selectSecretWord();
  if (pcSecretWordNumber == 1) {
    var pcSecretWord = "banana";
  } else if (pcSecretWordNumber == 2) {
    var pcSecretWord = "chisel";
  } else if (pcSecretWordNumber == 3) {
    var pcSecretWord = "faucet";
  }
  console.log(
    `user secret word ${userSecretWord}, pc secret word ${pcSecretWord}`
  );
  if (userSecretWord == pcSecretWord) {
    guessCorrect = guessCorrect - 1;
  }

  var message1 = `You guessed ${userSecretWord}, the secret word is ${pcSecretWord}, number of guess to win is ${guessCorrect}. `;
  var message2 = " ";
  if (guessCorrect == 0) {
    var message2 = "You Win!";
  }
  return message1 + message2;
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var userSecretWord = input;
  var pcSecretWordNumber = selectSecretWord();
  if (pcSecretWordNumber == 1) {
    var pcSecretWord = "banana";
  } else if (pcSecretWordNumber == 2) {
    var pcSecretWord = "chisel";
  } else if (pcSecretWordNumber == 3) {
    var pcSecretWord = "faucet";
  }
  console.log(
    `user secret word ${userSecretWord}, pc secret word ${pcSecretWord}`
  );
  if (userSecretWord == pcSecretWord) {
    guessCorrectCons = guessCorrectCons - 1;
  } else {
    guessCorrectCons = 2;
  }

  var message1 = `You guessed ${userSecretWord}, the secret word is ${pcSecretWord}, number of guess to win is ${guessCorrectCons}. `;
  var message2 = " ";
  if (guessCorrectCons == 0) {
    var message2 = "You Win!";
  }
  return message1 + message2;
};

var randomWinNumber = function () {
  var randomDecimal = Math.random() * 3;
  var randomInteger = Math.floor(randomDecimal);
  var winNumber = randomInteger + 2;
  return winNumber;
};
// need counter for each round, which is a variable
var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var userSecretWord = input;
  var pcSecretWordNumber = selectSecretWord();
  if (pcSecretWordNumber == 1) {
    var pcSecretWord = "banana";
  } else if (pcSecretWordNumber == 2) {
    var pcSecretWord = "chisel";
  } else if (pcSecretWordNumber == 3) {
    var pcSecretWord = "faucet";
  }
  console.log(
    `user secret word ${userSecretWord}, pc secret word ${pcSecretWord}`
  );
  if (userSecretWord == pcSecretWord) {
    guessCorrectCons = guessCorrectCons - 1;
  } else {
    guessCorrectCons = roundWinNumber;
  }

  var message1 = `Win number for this round is ${roundWinNumber}. You guessed ${userSecretWord}, the secret word is ${pcSecretWord}, number of remaining guess to win is ${guessCorrectCons}. `;
  var message2 = " ";
  if (guessCorrectCons == 0) {
    var message2 = "You Win!";
    roundWinNumber = randomWinNumber();
    guessCorrectCons = roundWinNumber;
  }
  return message1 + message2;
};

// within number ranging from 1-3
//game: guess number from 1-6 

var withinNumber = 

var randomNumber1to6 = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
}

var randomNumber1to3 = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var withinNumber = randomInteger + 1;
  return withinNumber;
}

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
