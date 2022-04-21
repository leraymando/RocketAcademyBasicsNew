var shuffleDeck = [];
var playerCardDeck = [];
var computerCardDeck = [];
var winOrLose = "No outcome"; //winOrLose = "You have the higher card. You win!";
var gameMode = `firstDraw`;

var makeDeck = function () {
  var cardDeck = [];
  var suits = ["♥", "♦", "♣", "♠"];
  for (var i = 0; i < suits.length; i += 1) {
    // loop over the suits
    var currentSuit = suits[i];
    // loop over ranks
    for (var rank = 1; rank <= 13; rank += 1) {
      var currentName = rank;
      var currentValue = rank;
      // if rank is 11, 12, 13, or 1
      if (rank === 1) {
        currentName = "Ace";
        currentValue = 11;
      } else if (rank === 11) {
        currentName = "Jack";
        currentValue = 10;
      } else if (rank === 12) {
        currentName = "Queen";
        currentValue = 10;
      } else if (rank === 13) {
        currentName = "King";
        currentValue = 10;
      }
      var card = {
        rank: rank,
        suit: currentSuit,
        name: currentName,
        value: currentValue
      };
      console.log(card);
      cardDeck.push(card);
    }
  }
  console.log(`cardDeck length ${cardDeck.length}`);
  return cardDeck;
};

// Card shuffling
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
    console.log(`shuffle count ${currentIndex}`);
  }
  // Return the shuffled deck
  return cardDeck;
};

//calculate BlackJack
var calPlayerCards = function () {
  // player 1 sum
  var playerSum = 0;
  for (var index = 0; index < playerCardDeck.length; index += 1) {
    playerSum += playerCardDeck[index].value;
    console.log(`player sum counter ${index}`);
  }
  return playerSum;
};

var calComputerCards = function () {
  // computer sum
  var computerSum = 0;
  for (var index = 0; index < computerCardDeck.length; index += 1) {
    computerSum += computerCardDeck[index].value;
    console.log(`computer sum counter ${index}`);
  }
  return computerSum;
};

var main = function (input) {
  var playerSum = 0;
  var computerSum = 0;
  if (gameMode == `firstDraw`) {
    var cardDeck = makeDeck();
    shuffleDeck = shuffleCards(cardDeck);
    for (var i = 0; i < 2; i += 1) {
      playerCardDeck[i] = shuffleDeck.pop();
      computerCardDeck[i] = shuffleDeck.pop();
    }
    console.log(
      `player card 1&2 is ${playerCardDeck[0].name} and ${playerCardDeck[1].name}`
    );
    console.log(
      `computer card 1&2 is ${computerCardDeck[0].name} and ${computerCardDeck[1].name}`
    );

    //hardcode cards for logic testing
    // playerCardDeck[0] = {
    //   rank: 1,
    //   suit: "♥",
    //   name: "Ace",
    //   value: 13
    // };
    // playerCardDeck[1] = {
    //   rank: 1,
    //   suit: "♠",
    //   name: "Ace",
    //   value: 13
    // };

    //Calculate sum
    playerSum = calPlayerCards();
    computerSum = calComputerCards();
    console.log(`playerSum  is ${playerSum}, computerSum ${computerSum}`);

    if (playerSum > 20 || computerSum > 20) {
      if (playerSum > 20 && computerSum <= 20) {
        winOrLose = `Player has BlackJack. You Win. `;
      } else if (playerSum <= 20 && computerSum > 20) {
        winOrLose = `Computer drew ${computerCardDeck[0].name} ${computerCardDeck[0].suit} and ${computerCardDeck[1].name} ${computerCardDeck[1].suit}. <br> Computer has BlackJack. Computer Wins. `;
      } else if (playerSum > 20 && computerSum > 20) {
        winOrLose = `Computer drew ${computerCardDeck[0].name} ${computerCardDeck[0].suit} and ${computerCardDeck[1].name} ${computerCardDeck[1].suit}. <br> Both player and computer have BlackJack. It's a draw. `;
      }
      var myOutputValue =
        `You drew ${playerCardDeck[0].name} ${playerCardDeck[0].suit} and ${playerCardDeck[1].name} ${playerCardDeck[1].suit}. <br>` +
        winOrLose;
      // if Blackjack occurs in first round, the card deck for player and computer refreshes
      //currently not working
      playerCardDeck = [];
      computerCardDeck = [];

      //check how many cards left in shuffled deck
      console.log(`cards left in deck ${shuffleDeck.length}`);
      return myOutputValue;
    }

    console.log(`current game mode ${gameMode}`);
    gameMode = `hitOrStand`;
    console.log(`check hit or stand game mode -- ${gameMode}`);

    var myOutputValue = `You drew ${playerCardDeck[0].name} ${playerCardDeck[0].suit} and ${playerCardDeck[1].name} ${playerCardDeck[1].suit}. Hit or Stand?`;

    return myOutputValue;
  }

  if (gameMode == `hitOrStand`) {
    if (input == `Hit`) {
      //add cards from here
      var newCard = shuffleDeck.pop();
      var k = playerCardDeck.length;
      playerCardDeck[k] = newCard;
      console.log(`player new card ${playerCardDeck[k]}`);
    }

    //Calculate sums
    playerSum = calPlayerCards();
    computerSum = calComputerCards();

    if (computerSum > playerSum) {
      winOrLose = "Computer has the higher score. You lose. Try again. "; // Lose scenario
    } else if (computerSum < playerSum) {
      winOrLose = "You have the higher score. You win! "; // Win scenario
    } else if (computerSum === playerSum) {
      winOrLose = "It's a draw. "; // Win scenario
    }
  }
  console.log(`playerSum  is ${playerSum}, computerSum ${computerSum}`);

  //Logic check for over 21
  if (playerSum > 21) {
    winOrLose =
      "Player burst! Computer has the higher score and wins. Try again. ";
  }

  //Print message of game outcome
  var playerCardList = ""; // Print all player cards
  for (var i = 0; i < playerCardDeck.length; i += 1) {
    var currentCard =
      `${playerCardDeck[i].name}` + `${playerCardDeck[i].suit} `;
    playerCardList += currentCard;
  }

  var myOutputValue =
    `You draw ` +
    playerCardList +
    `<br>` +
    `Computer draws ${computerCardDeck[0].name} ${computerCardDeck[0].suit} and ${computerCardDeck[1].name} ${computerCardDeck[1].suit}<br>` +
    winOrLose;

  //check how many cards left in shuffled deck
  console.log(`cards left in deck ${shuffleDeck.length}`);

  // Reset drawn card desk for player and PC
  playerCardDeck = [];
  computerCardDeck = [];
  gameMode = `firstDraw`;
  return myOutputValue;
};
