// Get carousel and cards
const carousel = document.querySelector('.carousel');
const cards = document.querySelectorAll('.card');
const cardCount = cards.length;

// Set initial active card to the middle card
let activeCard = 1;
cards[activeCard].classList.add('active');

// Shift carousel left by one card
function shiftLeft() {
  cards[activeCard].classList.remove('active');
  activeCard--;
  
   if (activeCard < 0) {
     activeCard = 0;
  }
  console.log((activeCard-1) * 33.33);
  cards[activeCard].classList.add('active');
  carousel.style.transform = `translateX(${(activeCard-1) * -33.33}%)`;
}

// Shift carousel right by one card
function shiftRight() {
  cards[activeCard].classList.remove('active');
  activeCard++;
   if (activeCard >= cardCount) {
     activeCard = 2;
  }
  if(activeCard === 2){
    cards[activeCard].classList.add('active');
  }
  cards[activeCard].classList.add('active');
  
  carousel.style.transform = `translateX(-${(activeCard-1) * 33.33}%)`;
}

// Add event listeners for arrow buttons
document.querySelector('.arrow-left').addEventListener('click', shiftLeft);
document.querySelector('.arrow-right').addEventListener('click', shiftRight);
