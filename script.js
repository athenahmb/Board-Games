// ---------- SPY ----------
const spyLocations = [
  "Beach 🏖️",
  "School 🏫",
  "Airport ✈️",
  "Hospital 🏥",
  "Restaurant 🍝"
];

let spyPlayer = 0;
let spyImposter = 0;
let spyWord = "";

function startSpy() {
  const players = Number(document.getElementById("spyPlayers").value);
  if (!players || players < 3) {
    alert(text[currentLanguage].minPlayers);
    return;
  }

  spyPlayer = 0;
  spyImposter = Math.floor(Math.random() * players);
  spyWord = spyLocations[Math.floor(Math.random() * spyLocations.length)];

  // reset display
  document.getElementById("spyInfo").textContent = `Player 1`;
  document.getElementById("spyWord").textContent = text[currentLanguage].tap;
}

function nextSpyPlayer() {
  const players = Number(document.getElementById("spyPlayers").value);

  // hide previous word immediately
  document.getElementById("spyWord").textContent = text[currentLanguage].tap;

  if (spyPlayer >= players) {
    document.getElementById("spyInfo").textContent = text[currentLanguage].discuss;
    document.getElementById("spyWord").textContent = "";
    return;
  }

  document.getElementById("spyInfo").textContent = `Player ${spyPlayer + 1}`;

  // reveal word when tapped
  const spyWordEl = document.getElementById("spyWord");
  spyWordEl.onclick = function () {
    spyWordEl.textContent =
      spyPlayer === spyImposter ? text[currentLanguage].spyReveal : spyWord;
  };

  spyPlayer++;
}

// ---------- IMPOSTER ----------
const drawingPrompts = [
  "Cat 🐱",
  "House 🏠",
  "Flower 🌸",
  "Tree 🌳",
  "Sunglasses 😎"
];

let impPlayer = 0;
let impImposter = 0;
let impWord = "";

function startImposter() {
  const players = Number(document.getElementById("impPlayers").value);
  if (!players || players < 3) {
    alert(text[currentLanguage].minPlayers);
    return;
  }

  impPlayer = 0;
  impImposter = Math.floor(Math.random() * players);
  impWord = drawingPrompts[Math.floor(Math.random() * drawingPrompts.length)];

  // reset display
  document.getElementById("impInfo").textContent = `Player 1`;
  document.getElementById("impWord").textContent = text[currentLanguage].tap;
}

function nextImpPlayer() {
  const players = Number(document.getElementById("impPlayers").value);

  // hide previous word immediately
  document.getElementById("impWord").textContent = text[currentLanguage].tap;

  if (impPlayer >= players) {
    document.getElementById("impInfo").textContent = text[currentLanguage].discuss;
    document.getElementById("impWord").textContent = "";
    return;
  }

  document.getElementById("impInfo").textContent = `Player ${impPlayer + 1}`;

  // reveal word when tapped
  const impWordEl = document.getElementById("impWord");
  impWordEl.onclick = function () {
    impWordEl.textContent =
      impPlayer === impImposter ? text[currentLanguage].impReveal : `${text[currentLanguage].draw} ${impWord}`;
  };

  impPlayer++;
}
