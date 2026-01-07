// ---------- LANGUAGE ----------
let currentLanguage = "en";

const text = {
  en: {
    title: "Party Games 🎉",
    charades: "Charades 🎭",
    spy: "Spy Game 🕵️",
    imposter: "Imposter Drawing 🎨",
    newWord: "New word ✨",
    start: "Start game",
    tap: "Tap to reveal 👀",
    spyReveal: "You are the SPY 😳",
    impReveal: "You are the IMPOSTER 😈",
    discuss: "Game ready! Discuss 😈",
    draw: "Draw:",
    minPlayers: "At least 3 players babes 💖"
  },
  no: {
    title: "Selskapsspill 🎉",
    charades: "Charades 🎭",
    spy: "Spion 🕵️",
    imposter: "Impostor-tegning 🎨",
    newWord: "Nytt ord ✨",
    start: "Start spill",
    tap: "Trykk for å se 👀",
    spyReveal: "Du er SPIONEN 😳",
    impReveal: "Du er IMPOSTOREN 😈",
    discuss: "Spillet er klart! Diskuter 😈",
    draw: "Tegn:",
    minPlayers: "Minst 3 spillere 💕"
  }
};

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("lang", lang);

  document.getElementById("title").textContent = text[lang].title;
  document.getElementById("charadesTitle").textContent = text[lang].charades;
  document.getElementById("spyTitle").textContent = text[lang].spy;
  document.getElementById("impTitle").textContent = text[lang].imposter;
  document.getElementById("charadesBtn").textContent = text[lang].newWord;
  document.getElementById("spyStartBtn").textContent = text[lang].start;
  document.getElementById("impStartBtn").textContent = text[lang].start;
}

const savedLang = localStorage.getItem("lang");
if (savedLang) setLanguage(savedLang);
else setLanguage("en");

// ---------- GENERAL ----------
function showGame(id) {
  document.querySelectorAll(".game").forEach(g => g.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// ---------- CHARADES ----------
const charadesWords = [
  "Brushing teeth",
  "Dancing",
  "Harry Potter",
  "Swimming",
  "Cat stuck in a tree"
];

function newCharadesWord() {
  const word = charadesWords[Math.floor(Math.random() * charadesWords.length)];
  document.getElementById("charadesWord").textContent = word;
}

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

  document.getElementById("spyInfo").textContent = "Player 1";
  document.getElementById("spyWord").textContent = text[currentLanguage].tap;
}

function nextSpyPlayer() {
  const players = Number(document.getElementById("spyPlayers").value);

  if (spyPlayer >= players) {
    document.getElementById("spyInfo").textContent = text[currentLanguage].discuss;
    document.getElementById("spyWord").textContent = "";
    return;
  }

  document.getElementById("spyInfo").textContent = `Player ${spyPlayer + 1}`;
  document.getElementById("spyWord").textContent =
    spyPlayer === spyImposter
      ? text[currentLanguage].spyReveal
      : spyWord;

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

  document.getElementById("impInfo").textContent = "Player 1";
  document.getElementById("impWord").textContent = text[currentLanguage].tap;
}

function nextImpPlayer() {
  const players = Number(document.getElementById("impPlayers").value);

  if (impPlayer >= players) {
    document.getElementById("impInfo").textContent = text[currentLanguage].discuss;
    document.getElementById("impWord").textContent = "";
    return;
  }

  document.getElementById("impInfo").textContent = `Player ${impPlayer + 1}`;
  document.getElementById("impWord").textContent =
    impPlayer === impImposter
      ? text[currentLanguage].impReveal
      : `${text[currentLanguage].draw} ${impWord}`;

  impPlayer++;
}
