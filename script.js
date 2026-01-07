// ---------- LANGUAGE ----------
let currentLanguage = "en";

const text = {
  en: {
    title: "Party Games 🎉",
    charades: "Charades 🎭",
    spy: "Spy Game 🕵️",
    imposter: "Imposter Drawing 🎨",
    mrwhiteTitle: "Mr White 🕵️‍♂️",
    qsTitle: "Question Spy ❓",
    psychTitle: "The Psychologist 🧠",

    newWord: "New word ✨",
    start: "Start game",
    players: "Players:",
    minPlayers: "At least 3 players babes 💖",

    cardHidden: "Tap to reveal 👀",
    spyReveal: "YOU ARE THE SPY 😳",
    impReveal: "YOU ARE THE IMPOSTER 😈",
    psychReveal: "YOU ARE THE PSYCHOLOGIST 🧠",
    draw: "Draw:"
  },

  no: {
    title: "Selskapsspill 🎉",
    charades: "Charades 🎭",
    spy: "Spion 🕵️",
    imposter: "Impostor-tegning 🎨",
    mrwhiteTitle: "Mr White 🕵️‍♂️",
    qsTitle: "Spørsmålsspion ❓",
    psychTitle: "Psykologen 🧠",

    newWord: "Nytt ord ✨",
    start: "Start spill",
    players: "Spillere:",
    minPlayers: "Minst 3 spillere babes 💕",

    cardHidden: "Trykk for å se 👀",
    spyReveal: "DU ER SPIONEN 😳",
    impReveal: "DU ER IMPOSTOREN 😈",
    psychReveal: "DU ER PSYKOLOGEN 🧠",
    draw: "Tegn:"
  }
};

function setLanguage(lang) {
  currentLanguage = lang;
  localStorage.setItem("lang", lang);

  document.getElementById("title").textContent = text[lang].title;
  document.getElementById("charadesTitle").textContent = text[lang].charades;
  document.getElementById("spyTitle").textContent = text[lang].spy;
  document.getElementById("impTitle").textContent = text[lang].imposter;
  document.getElementById("mrwhiteTitle").textContent = text[lang].mrwhiteTitle;
  document.getElementById("qsTitle").textContent = text[lang].qsTitle;
  document.getElementById("psychTitle").textContent = text[lang].psychTitle;

  document.getElementById("charadesBtn").textContent = text[lang].newWord;
  document.querySelectorAll("[id$='StartBtn']").forEach(btn => {
    btn.textContent = text[lang].start;
  });
}

const savedLang = localStorage.getItem("lang");
setLanguage(savedLang || "en");

// ---------- GENERAL ----------
function showGame(id) {
  document.querySelectorAll(".game").forEach(g => g.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

function createCards(containerId, players, getContent) {
  const container = document.getElementById(containerId);
  container.innerHTML = "";

  for (let i = 0; i < players; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = `Player ${i + 1}`;

    let revealed = false;

    card.onclick = () => {
      if (!revealed) {
        card.textContent = getContent(i);
        revealed = true;
      } else {
        card.textContent = `Player ${i + 1}`;
        revealed = false;
      }
    };

    container.appendChild(card);
  }
}

// ---------- CHARADES ----------
const charadesWords = {
  en: ["Brushing teeth", "Dancing", "Harry Potter", "Swimming", "Cat stuck in a tree"],
  no: ["Pusse tennene", "Danse", "Harry Potter", "Svømming", "Katt fast i et tre"]
};

function newCharadesWord() {
  const words = charadesWords[currentLanguage];
  const word = words[Math.floor(Math.random() * words.length)];
  document.getElementById("charadesWord").textContent = word;
}

// ---------- SPY ----------
const spyLocations = {
  en: ["Beach 🏖️", "School 🏫", "Airport ✈️", "Hospital 🏥", "Restaurant 🍝"],
  no: ["Strand 🏖️", "Skole 🏫", "Flyplass ✈️", "Sykehus 🏥", "Restaurant 🍝"]
};

document.getElementById("spyStartBtn").onclick = () => {
  const players = Number(document.getElementById("spyPlayers").value);
  if (players < 3) return alert(text[currentLanguage].minPlayers);

  const spy = Math.floor(Math.random() * players);
  const location =
    spyLocations[currentLanguage][
      Math.floor(Math.random() * spyLocations[currentLanguage].length)
    ];

  createCards("spyCards", players, i =>
    i === spy ? text[currentLanguage].spyReveal : location
  );
};

// ---------- IMPOSTER ----------
const drawingPrompts = {
  en: ["Cat 🐱", "House 🏠", "Flower 🌸", "Tree 🌳", "Sunglasses 😎"],
  no: ["Katt 🐱", "Hus 🏠", "Blomst 🌸", "Tre 🌳", "Solbriller 😎"]
};

document.getElementById("impStartBtn").onclick = () => {
  const players = Number(document.getElementById("impPlayers").value);
  if (players < 3) return alert(text[currentLanguage].minPlayers);

  const imposter = Math.floor(Math.random() * players);
  const word =
    drawingPrompts[currentLanguage][
      Math.floor(Math.random() * drawingPrompts[currentLanguage].length)
    ];

  createCards("impCards", players, i =>
    i === imposter ? text[currentLanguage].impReveal : `${text[currentLanguage].draw} ${word}`
  );
};

// ---------- MR WHITE ----------
const mwWords = {
  en: [["Cat 🐱", "Cats 🐈"], ["House 🏠", "Hut 🛖"], ["Tree 🌳", "Palm 🌴"]],
  no: [["Katt 🐱", "Katter 🐈"], ["Hus 🏠", "Hytte 🛖"], ["Tre 🌳", "Palme 🌴"]]
};

document.getElementById("mwStartBtn").onclick = () => {
  const players = Number(document.getElementById("mwPlayers").value);
  if (players < 3) return alert(text[currentLanguage].minPlayers);

  const odd = Math.floor(Math.random() * players);
  const pair =
    mwWords[currentLanguage][
      Math.floor(Math.random() * mwWords[currentLanguage].length)
    ];

  createCards("mwCards", players, i =>
    i === odd ? pair[1] : pair[0]
  );
};

// ---------- QUESTION SPY ----------
const qsPairs = {
  en: [
    ["What's something overrated?", "What's something underrated?"],
    ["Least favorite food?", "Favorite food?"]
  ],
  no: [
    ["Hva er overvurdert?", "Hva er undervurdert?"],
    ["Favorittmat du hater?", "Favorittmat du elsker?"]
  ]
};

document.getElementById("qsStartBtn").onclick = () => {
  const players = Number(document.getElementById("qsPlayers").value);
  if (players < 3) return alert(text[currentLanguage].minPlayers);

  const odd = Math.floor(Math.random() * players);
  const pair =
    qsPairs[currentLanguage][
      Math.floor(Math.random() * qsPairs[currentLanguage].length)
    ];

  createCards("qsCards", players, i =>
    i === odd ? pair[1] : pair[0]
  );
};

// ---------- PSYCHOLOGIST ----------
const psychRules = {
  en: [
    "Everyone crosses their legs when lying",
    "Each answer starts with the next letter of the alphabet",
    "Everyone thinks they are royalty"
  ],
  no: [
    "Alle krysser beina når de lyver",
    "Hvert svar starter med neste bokstav i alfabetet",
    "Alle tror de er kongelige"
  ]
};

document.getElementById("psychStartBtn").onclick = () => {
  const players = Number(document.getElementById("psychPlayers").value);
  if (players < 3) return alert(text[currentLanguage].minPlayers);

  const psych = Math.floor(Math.random() * players);
  const rule =
    psychRules[currentLanguage][
      Math.floor(Math.random() * psychRules[currentLanguage].length)
    ];

  createCards("psychCards", players, i =>
    i === psych ? text[currentLanguage].psychReveal : rule
  );
};

