document.addEventListener("DOMContentLoaded", function() {
  randomCard();

  document.getElementById("newCardBtn").addEventListener("click", randomCard);
});

function randomCard() {
  const Symbols = ["♠", "♣", "♥", "♦"];
  const values = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];

  let randomSymbolIndex = Math.floor(Math.random() * Symbols.length);
  let randomValueIndex = Math.floor(Math.random() * values.length);

  let randomSymbol = Symbols[randomSymbolIndex];
  let randomValue = values[randomValueIndex];

  let cardElement = document.getElementById("card");

  cardElement.className = `shadow-sm p-3 mb-5 bg-white d-flex flex-column justify-content-between align-items-stretch text-center ${getSymbolClass(
    randomSymbol
  )}`;

  document.querySelector(".top-symbol").innerHTML = randomSymbol;
  document.querySelector(".value").innerHTML = randomValue;
  document.querySelector(".bottom-symbol").innerHTML = randomSymbol;
}

function getSymbolClass(Symbol) {
  const SymbolClasses = {
    "♠": "text-dark",
    "♣": "text-dark",
    "♥": "text-danger",
    "♦": "text-danger"
  };

  return SymbolClasses[Symbol];
}
