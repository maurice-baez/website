"use strict";


/** Memory game: find matching pairs of cards and flip both of them. */

const COLORS = [
  "#606c38", "#175676", "#b20d30", "#cce6f4", "#7a28cb",
  "#606c38", "#175676", "#b20d30", "#cce6f4", "#7a28cb",
];

const colors = shuffle(COLORS);

createCards(colors);


/** Shuffle array items in-place and return shuffled array. */

function shuffle(items) {
  // This algorithm does a "perfect shuffle", where there won't be any
  // statistical bias in the shuffle (many naive attempts to shuffle end up not
  // be a fair shuffle). This is called the Fisher-Yates shuffle algorithm; if
  // you're interested, you can learn about it, but it's not important.

  for (let i = items.length - 1; i > 0; i--) {
    // generate a random index between 0 and i
    let j = Math.floor(Math.random() * i);
    // swap item at i <-> item at j
    [items[i], items[j]] = [items[j], items[i]];
  }

  return items;
}


/** Create card for every color in colors (each will appear twice)
 *
 * Each div DOM element will have:
 * - a class with the value of the color
 * - an click listener for each card to handleCardClick
 */

function createCards(colors) {
  const gameBoard = document.getElementById("game");

  for (let color of colors) {
    // missing code here ...

    let card = document.createElement("div"); // create div element for each card
    card.classList.add(color); // add class of random color to each card
    card.classList.add("card")
    card.addEventListener("click", handleCardClick); // add click event listener to each card
    gameBoard.append(card); // draw the cards on the game board 
  }
}

//set initial conditions

let firstCard = undefined;
let secondCard = undefined;

let count = 0;   //to track gameOver state

let scoreCounter = document.querySelector(".score");
let score = 0;
scoreCounter.innerHTML = `Attempts: ${score}`

/** Flip a card face-up. */

function flipCard(card) {
  // ... you need to write this ...

  if (card.classList.contains("clicked")) {   // check if card has already been clicked, if so exit function (disallow //  choosing the same card twice)
    return;
  }
  if (firstCard === undefined) { // if this is the first card clicked --> assign it variable "firstCard"
    firstCard = card;
    card.classList.add("clicked"); // add class "clicked"
    card.style.background = card.classList[0]; //change background color to cards classlist value
    return;
  }
  if (secondCard === undefined) {   //if no second card has been chosen --> do same as above, then check if cards are a match
    secondCard = card;
    card.style.background = card.classList[0];
    card.classList.add("clicked");
    score++;
    scoreCounter.innerHTML = `Attempts: ${score}`  //increment score count by 1 for every pair chosen
    checkMatch();  // after 2 cards are chosen, check if they are a match
  }
}

//function to check for a match

function checkMatch() {

  if (firstCard.classList[0] === secondCard.classList[0]) { // there is a match - remove click listeners and reset settings
    firstCard.removeEventListener("click", handleCardClick);
    secondCard.removeEventListener("click", handleCardClick);
    count += 2;                                  //increment counter by 2 (two cards of the board)
    resetSettings();
    checkGameOver();                             // check if all cards have been matched 
    return;

  } else {                       // not a match - unflip cards, remove "clicked" class, and reset settings;
    firstCard.classList.remove("clicked")
    secondCard.classList.remove("clicked")
    unFlipCard(firstCard);
    unFlipCard(secondCard);
    resetSettings;
  }
}

//function checking for game over state

function checkGameOver() {
  setTimeout(function () {      //pause .25 secs (alert was triggering before final card was flipped)
    if (count === 10) {         //if all 10 cards have been matched --> alert win
      alert(`Congratulation! You got them all in ${score} guesses!`);
    }
    return;
  }, 250)
}


//function reset settings after two cards clicked

function resetSettings() {
  firstCard = undefined;
  secondCard = undefined;
}

/** Flip a card face-down. */

function unFlipCard(card) {
  // ... you need to write this ...
  setTimeout(function () {             // wait one second, then flip cards back over and reset settings 
    card.style.background = "white";
    resetSettings();
  }, 1000)
}

/** Handle clicking on a card: this could be first-card or second-card. */

function handleCardClick(evt) {
  // ... you need to write this ...
  let currentCard = this;   //assign a variable to the current card clicked and call flipCard function
  flipCard(currentCard);
}

//reset button

const reset = document.querySelector("button");
reset.addEventListener("click", resetGameBoard);

function resetGameBoard() {

  let gameBoard = document.getElementById("game");
  while (gameBoard.firstChild) { //remove all cards from gameboard
    gameBoard.removeChild(gameBoard.firstChild);
  }

  createCards(colors); // draw new random cards and reassign initial conditions
  firstCard = undefined;
  secondCard = undefined;

  count = 0;   //to track gameOver state

  scoreCounter = document.querySelector(".score");
  score = 0;
  scoreCounter.innerHTML = `Attempts: ${score}`

}

//store a best score in local storage 

let storage = window.localStorage; // will work on this later.



