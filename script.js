// ---------------- LANGUAGE ----------------
let currentLanguage = "en";

const text = {
  en: {title:"Party Games 🎉", charades:"Charades 🎭", spy:"Spy Game 🕵️",
       imposter:"Imposter Drawing 🎨", mrwhiteTitle:"Mr White 🕵️‍♂️",
       qsTitle:"Question Spy ❓", psychTitle:"The Psychologist 🧠",
       newWord:"New word ✨", start:"Start game", tap:"Tap to reveal 👀",
       discuss:"Game ready! Discuss 😈", spyReveal:"You are the SPY 😳",
       impReveal:"You are the IMPOSTER 😈", psychReveal:"You are the Psychologist 🧠",
       minPlayers:"At least 3 players babes 💖"},

  no: {title:"Selskapsspill 🎉", charades:"Charades 🎭", spy:"Spion 🕵️",
       imposter:"Impostor kunstner 🎨", mrwhiteTitle:"Mr White 🕵️‍♂️",
       qsTitle:"Spørsmål Spion ❓", psychTitle:"Psykologen 🧠",
       newWord:"Nytt ord ✨", start:"Start spill", tap:"Trykk for å se 👀",
       discuss:"Spillet er klart! Diskuter 😈", spyReveal:"Du er SPIONEN 😳",
       impReveal:"Du er IMPOSTOREN 😈", psychReveal:"Du er PSYKOLOGEN 🧠",
       minPlayers:"Minst 3 spillere 💕"}
};

function setLanguage(lang){
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
  document.getElementById("spyStartBtn").textContent = text[lang].start;
  document.getElementById("impStartBtn").textContent = text[lang].start;
  document.getElementById("mwStartBtn").textContent = text[lang].start;
  document.getElementById("qsStartBtn").textContent = text[lang].start;
  document.getElementById("psychStartBtn").textContent = text[lang].start;
}

const savedLang = localStorage.getItem("lang");
if(savedLang) setLanguage(savedLang);
else setLanguage("en");

// ---------------- GENERAL ----------------
function showGame(id){
  document.querySelectorAll(".game").forEach(g => g.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// ---------------- CHARADES ----------------
const charadesWords = {
  en:["Brushing teeth","Dancing","Swimming","Cat stuck in a tree"],
  no:["Pusse tenner","Danse","Svømming","Katt i et tre"]
};
function newCharadesWord(){
  const word = charadesWords[currentLanguage][Math.floor(Math.random()*charadesWords[currentLanguage].length)];
  document.getElementById("charadesWord").textContent = word;
}

// ---------------- HELPER FUNCTION FOR CARDS ----------------
function createCards(containerId, players, words, oddPlayerIndex = -1, oddWord = ""){
  const container = document.getElementById(containerId);
  container.innerHTML = ""; // clear old cards
  for(let i=0;i<players;i++){
    const card = document.createElement("div");
    card.className = "card";
    card.textContent = `Player ${i+1}`;
    let revealed = false;
    card.addEventListener("click", () => {
      if(!revealed){
        if(i === oddPlayerIndex) card.textContent = oddWord;
        else card.textContent = words[i];
        revealed = true;
      } else {
        card.textContent = `Player ${i+1}`;
        revealed = false;
      }
    });
    container.appendChild(card);
  }
}

// ---------------- SPY ----------------
const spyLocations = {
  en:["Beach 🏖️","School 🏫","Airport ✈️","Hospital 🏥","Restaurant 🍝"],
  no:["Strand 🏖️","Skole 🏫","Flyplass ✈️","Sykehus 🏥","Restaurant 🍝"]
};
document.getElementById("spyStartBtn").addEventListener("click", () => {
  const players = Number(document.getElementById("spyPlayers").value);
  if(!players || players<3){alert(text[currentLanguage].minPlayers); return;}
  const oddPlayer = Math.floor(Math.random()*players);
  const word = spyLocations[currentLanguage][Math.floor(Math.random()*spyLocations[currentLanguage].length)];
  const words = Array(players).fill(word);
  createCards("spyCards", players, words, oddPlayer, text[currentLanguage].spyReveal);
});

// ---------------- IMPOSTER ----------------
const drawingPrompts = {
  en:["Cat 🐱","House 🏠","Flower 🌸","Tree 🌳"],
  no:["Katt 🐱","Hus 🏠","Blomst 🌸","Tre 🌳"]
};
document.getElementById("impStartBtn").addEventListener("click", () => {
  const players = Number(document.getElementById("impPlayers").value);
  if(!players || players<3){alert(text[currentLanguage].minPlayers); return;}
  const oddPlayer = Math.floor(Math.random()*players);
  const word = drawingPrompts[currentLanguage][Math.floor(Math.random()*drawingPrompts[currentLanguage].length)];
  const words = Array(players).fill(`Draw: ${word}`);
  createCards("impCards", players, words, oddPlayer, text[currentLanguage].impReveal);
});

// ---------------- MR WHITE ----------------
const mwWords = {
  en:[["Cat 🐱","Cats 🐈"],["House 🏠","Hut 🛖"]],
  no:[["Katt 🐱","Katter 🐈"],["Hus 🏠","Hytte 🛖"]]
};
document.getElementById("mwStartBtn").addEventListener("click", () => {
  const players = Number(document.getElementById("mwPlayers").value);
  if(!players || players<3){alert(text[currentLanguage].minPlayers); return;}
  const oddPlayer = Math.floor(Math.random()*players);
  const pair = mwWords[currentLanguage][Math.floor(Math.random()*mwWords[currentLanguage].length)];
  const words = Array(players).fill(pair[0]);
  createCards("mwCards", players, words, oddPlayer, pair[1]);
});

// ---------------- QUESTION SPY ----------------
const qsPairs = {
  en:[["What's totally overrated?","What's totally underrated?"],["Least favorite food?","Most favorite food?"]],
  no:[["Hva er helt overvurdert?","Hva er helt undervurdert?"],["Mest mislikte mat?","Favorittmat?"]]
};
document.getElementById("qsStartBtn").addEventListener("click", () => {
  const players = Number(document.getElementById("qsPlayers").value);
  if(!players || players<3){alert(text[currentLanguage].minPlayers); return;}
  const oddPlayer = Math.floor(Math.random()*players);
  const pair = qsPairs[currentLanguage][Math.floor(Math.random()*qsPairs[currentLanguage].length)];
  const words = Array(players).fill(pair[0]);
  createCards("qsCards", players, words, oddPlayer, pair[1]);
});

// ---------------- PSYCHOLOGIST ----------------
const psychRules = {
  en:["Cross legs when lying","Each answer begins with next letter","Everyone thinks they are the person to their right"],
  no:["Kryss beina når du lyver","Hvert svar begynner med neste bokstav","Alle tror de er personen til høyre"]
};
document.getElementById("psychStartBtn").addEventListener("click", () => {
  const players = Number(document.getElementById("psychPlayers").value);
  if(!players || players<3){alert(text[currentLanguage].minPlayers); return;}
  const oddPlayer = Math.floor(Math.random()*players);
  const rule = psychRules[currentLanguage][Math.floor(Math.random()*psychRules[currentLanguage].length)];
  const words = Array(players).fill(rule);
  createCards("psychCards", players, words, oddPlayer, text[currentLanguage].psychReveal);
});

