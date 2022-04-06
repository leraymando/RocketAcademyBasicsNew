var emojiNumberCharactersMain = function (input) {
  // Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
  var counter = 0;
  var emojiMessage = "";
  while (counter < input) {
    emojiMessage = emojiMessage + `😎`;
    counter += 1;
  }
  return emojiMessage;
};

//var rowCounter = 0;
//var emojiMessage = "";
//while (rowCounter < input) {
// for (var i = 0; i < input; i += 1) {
//  emojiMessage = emojiMessage + `😎`;
// console.log(`emoji i counter ${i}`);
// }
// console.log(`emoji rowCounter ${rowCounter}`);
//emojiMessage = emojiMessage + "<br>";
//rowCounter += 1;
//}

//var myOutputValue = "";
//for (let i = 0; i < input; i++) {
//each row i=1
// for (let j = 0; j < i + 1; j++) {
//j=0, j<1+1
// myOutputValue += `😊`;
//}
//myOutputValue += `<br>`;
//}
//return myOutputValue;

//return emojiMessage;

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var rowCounter = 0;
  var emojiMessage = "";
  while (rowCounter < input) {
    for (var i = 0; i < input; i += 1) {
      emojiMessage = emojiMessage + `😎`;
      console.log(`emoji i counter ${i}`);
    }
    console.log(`emoji rowCounter ${rowCounter}`);
    emojiMessage = emojiMessage + "<br>";
    rowCounter += 1;
  }
  return emojiMessage;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var rowCounter = 0;
  var emojiMessage = "";
  while (rowCounter < input) {
    for (var i = 0; i < rowCounter + 1; i += 1) {
      emojiMessage = emojiMessage + `😎`;
      console.log(`emoji i counter ${i}`);
    }
    console.log(`emoji rowCounter ${rowCounter}`);
    emojiMessage = emojiMessage + "<br>";
    rowCounter += 1;
  }
  return emojiMessage;
};

var emojiOutlineSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Outline Square exercise below with emojiOutlineSquareMain as the main function.
  var rowCounter = 0;
  var emojiMessage = "";
  while (rowCounter < input) {
    for (var i = 0; i < input; i += 1) {
      console.log(`emoji i counter ${i}`);
      if (
        i == 0 ||
        i == input - 1 ||
        rowCounter == 0 ||
        rowCounter == input - 1
      ) {
        emojiMessage = emojiMessage + `😎`;
      } else {
        emojiMessage = emojiMessage + `🤢`;
      }
    }
    console.log(`emoji rowCounter ${rowCounter}`);
    emojiMessage = emojiMessage + "<br>";
    rowCounter += 1;
  }
  return emojiMessage;
};

var emojiCenterSquareMain = function (input) {
  // Complete the More Comfortable: Emoji Drawing Center Square exercise below with emojiCenterSquareMain as the main function.
  var rowCounter = 0;
  var emojiMessage = "";
  while (rowCounter < input) {
    for (var i = 0; i < input; i += 1) {
      console.log(`emoji i counter ${i}`);
      if (
        i == 0 ||
        i == input - 1 ||
        rowCounter == 0 ||
        rowCounter == input - 1
      ) {
        emojiMessage = emojiMessage + `😎`;
      } else if (
        i == rowCounter &&
        input % 2 == 1 &&
        i == Math.floor(input / 2) &&
        input != 3
      ) {
        emojiMessage = emojiMessage + `🥶`;
      } else {
        emojiMessage = emojiMessage + `🤢`;
      }
    }
    console.log(`emoji rowCounter ${rowCounter}`);
    emojiMessage = emojiMessage + "<br>";
    rowCounter += 1;
  }
  return emojiMessage;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
