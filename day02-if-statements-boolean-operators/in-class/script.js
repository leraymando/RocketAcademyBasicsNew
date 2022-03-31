var rollDie = function (guessNumber) {
  var randomNumber = Math.random() * 6;
  var diceNumber = Math.floor(randomNumber);
  return diceNumber + 1;
};

var lucky11Main = function (input) {
  // Complete the Base: Lucky 11 exercise below with lucky11Main as the main function.
  var number1 = rollDie();
  var number2 = rollDie();
  var sumOfNumbers = number1 + number2;
  var rolledNumber = "You rolled " + number1 + " and " + number2 + ". ";
  var winOrLose = "You Lose!";
  if (input == number1 || input == number2) {
    var winOrLose = "You Win!";
  } else if (sumOfNumbers == 11) {
    var winOrLose = "You Win!";
  }
  var myOutputValue = rolledNumber + winOrLose;
  return myOutputValue;
};

var hawkerFoodCategorisationMain = function (input) {
  // Complete the Base: Hawker Food Categorisation exercise below with hawkerFoodCategorisationMain as the main function.
  var foodName = input;
  var foodType = "others";
  if (input == "chicken rice" || input == "nasi lemak") {
    var foodType = "rice";
  } else if (input == "hokkien mee" || input == "laksa") {
    var foodType = "noodle";
  }
  var myOutputValue = foodType;
  return myOutputValue;
};

var randomNumber = function (guessNumber) {
  var randomNumber = Math.random() * 10;
  var outputNumber = Math.floor(randomNumber);
  return outputNumber;
};

var fourDSingleDigitMain = function (input) {
  // Complete the Comfortable: 4D with Single-Digit Comparison exercise below with fourDSingleDigitMain as the main function.
  var number1 = randomNumber();
  var number2 = randomNumber();
  var number3 = randomNumber();
  var number4 = randomNumber();
  var winOrLose = "You Lose!";
  var totoNumber =
    String(number1) + String(number2) + String(number3) + String(number4);
  // var rolledNumber = "You rolled " + number1 + " and " + number2 + ". ";
  // var winOrLose = "You Lose!";
  if (
    input == number1 ||
    input == number2 ||
    input == number3 ||
    input == number4
  ) {
    var winOrLose = "You Win!";
  }
  return `${totoNumber}  ${winOrLose}`;
};

var chooseFood = function () {
  var randomNumber = Math.random() * 6;
  var foodNumber = Math.floor(randomNumber);
  return foodNumber;
};

var hawkerFoodRandomnessMain = function (input) {
  // Complete the Comfortable: Hawker Food Randomness exercise below with hawkerFoodRandomnessMain as the main function.
  var foodNumber = chooseFood();
  var foodName = "others";
  // if statement for random food name
  if (foodNumber == 0) {
    var foodName = "chicken rice";
  } else if (foodNumber == 1) {
    var foodName = "roti prata";
  } else if (foodNumber == 2) {
    var foodName = "nasi lemak";
  } else if (foodNumber == 3) {
    var foodName = "hokkien mee";
  } else if (foodNumber == 4) {
    var foodName = "bak kut teh";
  } else if (foodNumber == 5) {
    var foodName = "laksa";
  }
  // if statement for input vs random food name
  var uncleCook = "Uncle cooks " + foodName + ". ";
  var yourOrder = "You ordered " + input + ". ";
  var freeMeal = "Wrong! You have to pay!";
  if (input == foodName) {
    var freeMeal = "Bingo! You get a free meal!";
  }
  //var myOutputValue = uncleCook + yourOrder + freeMeal;
  //return myOutputValue;
  return `${uncleCook}  ${yourOrder} ${freeMeal}`;
};

var fourDNumber = function (guessNumber) {
  var randomNumber = Math.random() * 9999;
  var outputNumber = Math.floor(randomNumber);
  return outputNumber + 1;
};
var fourDWinningRangeMain = function (input) {
  // Complete the More Comfortable: 4D with Winning Range exercise below with fourDWinningRangeMain as the main function.
  //var number1 = randomNumber();
  //var number2 = randomNumber();
  //var number3 = randomNumber();
  //var number4 = randomNumber();
  var totoNumber = fourDNumber();
  var winOrLose = "You Win!";
  //var totoNumber =
  // String(number1) + String(number2) + String(number3) + String(number4);
  // var rolledNumber = "You rolled " + number1 + " and " + number2 + ". ";
  // var winOrLose = "You Lose!";
  if (input < totoNumber - 1000 || input > totoNumber + 1000) {
    var winOrLose = "You lose!";
  }
  // change toto number to 4 numbers
  if (totoNumber < 100) {
    var totoNumber = "00" + totoNumber;
  } else if (totoNumber < 1000) {
    var totoNumber = "0" + totoNumber;
  }
  return `You guessed ${input}. You 4D number is ${totoNumber}. ${winOrLose}`;
};

// input rice or noodle
// if rice, 2 random rice; if noodle, 2 random noodle uncle choose
// rice is chicken rice, nasi lemak, bak kut teh
// noodle is hokkien mee, laksa, beef hor fun
// roti prata can be rice or noodle
// output line show if sambal is included

var hawkerFoodOmakaseMain = function (input) {
  // Complete the More Comfortable: Hawker Food Omakase exercise below with hawkerFoodOmakaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
