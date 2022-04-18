var makeDeck = function () {
  var cardDeck = [];
  var suits = ["♥", "♦", "♣", "♠"];
  for (var i = 0; i < suits.length; i += 1) {
    // loop over the suits
    var currentSuit = suits[i];
    // loop over ranks
    for (var rank = 1; rank <= 13; rank += 1) {
      var currentName = rank;
      // if rank is 11, 12, 13, or 1
      if (rank === 1) {
        currentName = "Ace";
      } else if (rank === 11) {
        currentName = "Jack";
      } else if (rank === 12) {
        currentName = "Queen";
      } else if (rank === 13) {
        currentName = "King";
      }
      var card = {
        rank: rank,
        suit: currentSuit,
        name: currentName
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

var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
  var cardDeck = makeDeck();
  var shuffledDeck = shuffleCards(cardDeck);
  var randomCard = shuffledDeck.pop();
  console.log(`last card is ${randomCard.name}`);
  var myOutputValue = `You draw ${randomCard.name} ${randomCard.suit}`;
  return myOutputValue;
};

var moarCardsLowCardMain = function (input) {
  // Complete the Base: Moar Cards Low Card exercise below with moarCardsLowCardMain as the main function.
  var cardDeck = makeDeck();
  var shuffleDeck = shuffleCards(cardDeck);
  var playerCard = shuffleDeck.pop();
  console.log(`last card is ${playerCard.name}`);
  var computerCard = shuffleDeck.pop();
  console.log(`2nd last card is ${computerCard.name}`);
  var winOrLose = "You have the lower card. You win!";
  if (computerCard.rank < playerCard.rank) {
    var winOrLose = "Computer has the lower card. You lose. Try again. ";
  }
  var myOutputValue =
    `You draw ${playerCard.name} ${playerCard.suit}. Computer draws ${computerCard.name} ${computerCard.suit} <br>` +
    winOrLose;
  return myOutputValue;
};

var moarCardsLowCardQueenWinnerMain = function (input) {
  // Complete the Base: Moar Cards Low Card with Queen Winner exercise below with moarCardsLowCardQueenWinnerMain as the main function.
  var cardDeck = makeDeck();
  var shuffleDeck = shuffleCards(cardDeck);
  var playerCard = shuffleDeck.pop();
  console.log(`last card is ${playerCard.name}`);
  var computerCard = shuffleDeck.pop();
  console.log(`2nd last card is ${computerCard.name}`);
  var winOrLose = "You have the lower card. You win!";
  if (computerCard.rank < playerCard.rank) {
    winOrLose = "Computer has the lower card. You lose. Try again. ";
  } else if (playerCard.rank === 12) {
    winOrLose = "You draw Queen! You win!";
  } else if (computerCard.rank === 12) {
    winOrLose = "Computer draw Queen! Computer wins!";
  } else if (computerCard.rank === 12 && playerCard.rank === 12) {
    winOrLose = "Both draw Queens! Its a draw!";
  }
  var myOutputValue =
    `You draw ${playerCard.name} ${playerCard.suit}. Computer draws ${computerCard.name} ${computerCard.suit} <br>` +
    winOrLose;
  return myOutputValue;
};

var moarCardsLowCardHandsMain = function (input) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildCardMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Wild Card exercise below with moarCardsLowCardWildCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotSingleMain = function (input) {
  // Complete the Base: Chat Bot Single Chat Bot Answer Set below with chatBotSingleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotMultipleMain = function (input) {
  // Complete the Base: Chat Bot Multiple Chat Bot Answer Sets below with chatBotMultipleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
