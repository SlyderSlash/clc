const cards = document.querySelectorAll(".memory-card");
const score = document.getElementById("point");
const won = document.getElementById("won");
const play = document.getElementById("playAgain");
const button = document.getElementsByClassName("btn-handle");
const ship = document.getElementById("ship");
const body = document.getElementsByTagName("body")[0];
const appName = document.getElementById("nameofapp");

var points = 0;
var win = 0;

let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;

    return;
  }

  secondCard = this;
  checkCards();
}

function checkCards() {
  let isMatch = firstCard.dataset.cards === secondCard.dataset.cards;

  isMatch ? cardsMatch() : cardsDontMatch();
  if (isMatch){points += 4;}
  
}

function cardsMatch() {
  firstCard.removeEventListener("touchstart", flipCard);
  secondCard.removeEventListener("touchstart", flipCard);

  win += 2;

  if (win === 12) {
    won.style.visibility = "visible";
  }

  resetBoard();
}

function cardsDontMatch() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1000);

  points -= 1;
  score.innerHTML = points;
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

function playAgain() {
  location.reload();
}

play.addEventListener("touchstart", playAgain);

(function laBeuteu() {
  cards.forEach((card) => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;
  });
})();

cards.forEach((card) => card.addEventListener("touchstart", flipCard));

button.addEventListener("touchstart", shipMove);
let timerEasterEgg = 60;
const timer = () => {
  if(timerEasterEgg == 0){
    window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley', '_blank');
  }
  else {
    timerEasterEgg--
    setInterval(timer, 1000)
  }
}
appName.addEventListener("touchstart", () => {timer()})