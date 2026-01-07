// ---------- LANGUAGE ----------
let currentLanguage = "en";
const text = {
  en: {
    title:"Party Games 🎉", charades:"Charades 🎭", spy:"Spy Game 🕵️",
    imposter:"Imposter Drawing 🎨", mrwhiteTitle:"Mr White 🕵️‍♂️",
    qsTitle:"Question Spy ❓", psychTitle:"The Psychologist 🧠",
    newWord:"New word ✨", start:"Start game", tap:"Tap to reveal 👀",
    discuss:"Game ready! Discuss 😈", spyReveal:"You are the SPY 😳",
    impReveal:"You are the IMPOSTER 😈", minPlayers:"At least 3 players babes 💖"
  },
  no: {
    title:"Selskapsspill 🎉", charades:"Charades 🎭", spy:"Spion 🕵️",
    imposter:"Impostor kunstner 🎨", mrwhiteTitle:"Mr White 🕵️‍♂️",
    qsTitle:"Spørsmål Spion ❓", psychTitle:"Psykologen 🧠",
    newWord:"Nytt ord ✨", start:"Start spill", tap:"Trykk for å se 👀",
    discuss:"Spillet er klart! Diskuter 😈", spyReveal:"Du er SPIONEN 😳",
    impReveal:"Du er IMPOSTOREN 😈", minPlayers:"Minst 3 spillere 💕"
  }
};

function setLanguage(lang){
  currentLanguage=lang; localStorage.setItem("lang",lang);
  document.getElementById("title").textContent=text[lang].title;
  document.getElementById("charadesTitle").textContent=text[lang].charades;
  document.getElementById("spyTitle").textContent=text[lang].spy;
  document.getElementById("impTitle").textContent=text[lang].imposter;
  document.getElementById("mrwhiteTitle").textContent=text[lang].mrwhiteTitle;
  document.getElementById("qsTitle").textContent=text[lang].qsTitle;
  document.getElementById("psychTitle").textContent=text[lang].psychTitle;
  document.getElementById("charadesBtn").textContent=text[lang].newWord;
  document.getElementById("spyStartBtn").textContent=text[lang].start;
  document.getElementById("impStartBtn").textContent=text[lang].start;
  document.getElementById("mwStartBtn").textContent=text[lang].start;
  document.getElementById("qsStartBtn").textContent=text[lang].start;
  document.getElementById("psychStartBtn").textContent=text[lang].start;
}
const savedLang=localStorage.getItem("lang");
if(savedLang)setLanguage(savedLang); else setLanguage("en");

function showGame(id){document.querySelectorAll(".game").forEach(g=>g.classList.add("hidden")); document.getElementById(id).classList.remove("hidden");}

// ---------- CHARADES ----------
const charadesWords=["Brushing teeth","Dancing","Harry Potter","Swimming","Cat stuck in a tree"];
function newCharadesWord(){document.getElementById("charadesWord").textContent=charadesWords[Math.floor(Math.random()*charadesWords.length)];}

// ---------- SPY ----------
const spyLocations=["Beach 🏖️","School 🏫","Airport ✈️","Hospital 🏥","Restaurant 🍝"];
let spyPlayer=0, spyImposter=0, spyWord="";
document.getElementById("spyStartBtn").addEventListener("click", startSpy);
document.getElementById("spyNextBtn").addEventListener("click", nextSpyPlayer);
function startSpy(){
  const players=Number(document.getElementById("spyPlayers").value);
  if(!players||players<3){alert(text[currentLanguage].minPlayers);return;}
  spyPlayer=0; spyImposter=Math.floor(Math.random()*players);
  spyWord=spyLocations[Math.floor(Math.random()*spyLocations.length)];
  document.getElementById("spyInfo").textContent=`Player 1`;
  document.getElementById("spyWord").textContent=text[currentLanguage].tap;
}
function nextSpyPlayer(){
  const players=Number(document.getElementById("spyPlayers").value);
  document.getElementById("spyWord").textContent=text[currentLanguage].tap;
  if(spyPlayer>=players){document.getElementById("spyInfo").textContent=text[currentLanguage].discuss; document.getElementById("spyWord").textContent=""; return;}
  document.getElementById("spyInfo").textContent=`Player ${spyPlayer+1}`;
  const el=document.getElementById("spyWord");
  el.onclick=()=>{el.textContent=spyPlayer===spyImposter?text[currentLanguage].spyReveal:spyWord};
  spyPlayer++;
}

// ---------- IMPOSTER ----------
const drawingPrompts=["Cat 🐱","House 🏠","Flower 🌸","Tree 🌳","Sunglasses 😎"];
let impPlayer=0, impImposter=0, impWord="";
document.getElementById("impStartBtn").addEventListener("click", startImposter);
document.getElementById("impNextBtn").addEventListener("click", nextImpPlayer);
function startImposter(){
  const players=Number(document.getElementById("impPlayers").value);
  if(!players||players<3){alert(text[currentLanguage].minPlayers);return;}
  impPlayer=0; impImposter=Math.floor(Math.random()*players);
  impWord=drawingPrompts[Math.floor(Math.random()*drawingPrompts.length)];
  document.getElementById("impInfo").textContent=`Player 1`;
  document.getElementById("impWord").textContent=text[currentLanguage].tap;
}
function nextImpPlayer(){
  const players=Number(document.getElementById("impPlayers").value);
  document.getElementById("impWord").textContent=text[currentLanguage].tap;
  if(impPlayer>=players){document.getElementById("impInfo").textContent=text[currentLanguage].discuss; document.getElementById("impWord").textContent=""; return;}
  document.getElementById("impInfo").textContent=`Player ${impPlayer+1}`;
  const el=document.getElementById("impWord");
  el.onclick=()=>{el.textContent=impPlayer===impImposter?text[currentLanguage].impReveal:`Draw: ${impWord}`};
  impPlayer++;
}

// ---------- MR WHITE ----------
const mwWords=[["Cat 🐱","Cats 🐈"],["House 🏠","Hut 🛖"],["Tree 🌳","Palm 🌴"],["Sun 🌞","Sunshine ☀️"]];
let mwPlayer=0, mwOddPlayer=0, mwWord="", mwOddWord="";
document.getElementById("mwStartBtn").addEventListener("click", startMrWhite);
document.getElementById("mwNextBtn").addEventListener("click", nextMwPlayer);
function startMrWhite(){
  const players=Number(document.getElementById("mwPlayers").value);
  if(!players||players<3){alert(text[currentLanguage].minPlayers);return;}
  mwPlayer=0; mwOddPlayer=Math.floor(Math.random()*players);
  const pair=mwWords[Math.floor(Math.random()*mwWords.length)];
  mwWord=pair[0]; mwOddWord=pair[1];
  document.getElementById("mwInfo").textContent=`Player 1`;
  document.getElementById("mwWord").textContent=text[currentLanguage].tap;
}
function nextMwPlayer(){
  const players=Number(document.getElementById("mwPlayers").value);
  document.getElementById("mwWord").textContent=text[currentLanguage].tap;
  if(mwPlayer>=players){document.getElementById("mwInfo").textContent=text[currentLanguage].discuss; document.getElementById("mwWord").textContent=""; return;}
  document.getElementById("mwInfo").textContent=`Player ${mwPlayer+1}`;
  const el=document.getElementById("mwWord");
  el.onclick=()=>{el.textContent=mwPlayer===mwOddPlayer?mwOddWord:mwWord};
  mwPlayer++;
}

// ---------- QUESTION SPY ----------
const qsPairs=[["What's something totally overrated?","What's something totally underrated?"],["What's your least favorite food?","What's your most favorite food?"],["What's a movie everyone loves but you hate?","What's a hidden gem movie?"]];
let qsPlayer=0, qsOddPlayer=0, qsWord="", qsOddWord="";
document.getElementById("qsStartBtn").addEventListener("click", startQuestionSpy);
document.getElementById("qsNextBtn").addEventListener("click", nextQsPlayer);
function startQuestionSpy(){
  const players=Number(document.getElementById("qsPlayers").value);
  if(!players||players<3){alert(text[currentLanguage].minPlayers);return;}
  qsPlayer=0; qsOddPlayer=Math.floor(Math.random()*players);
  const pair=qsPairs[Math.floor(Math.random()*qsPairs.length)];
  qsWord=pair[0]; qsOddWord=pair[1];
  document.getElementById("qsInfo").textContent=`Player 1`;
  document.getElementById("qsWord").textContent=text[currentLanguage].tap;
}
function nextQsPlayer(){
  const players=Number(document.getElementById("qsPlayers").value);
  document.getElementById("qsWord").textContent=text[currentLanguage].tap;
  if(qsPlayer>=players){document.getElementById("qsInfo").textContent=text[currentLanguage].discuss; document.getElementById("qsWord").textContent=""; return;}
  document.getElementById("qsInfo").textContent=`Player ${qsPlayer+1}`;
  const el=document.getElementById("qsWord");
  el.onclick=()=>{el.textContent=qsPlayer===qsOddPlayer?qsOddWord:qsWord};
  qsPlayer++;
}

// ---------- THE PSYCHOLOGIST ----------
const psychRules=[
  "You all cross your legs when you tell a lie - and uncross them when you are telling the truth",
  "Each answer begins with the next letter in the alphabet",
  "Everyone thinks they are the person to their right",
  "Whoever the psychologist is questioning, the people on both sides of them get itchy",
  "Everyone thinks they are the shoes they are currently wearing",
  "Everyone thinks they are in the Napolean Dynamite movie",
  "You all time traveled here",
  "Whenever someone says 'um' everyone changes positions",
  "You are obsessed with the letter 'R' and you are all super undecisive",
  "You all think you are your current or future spouse",
  "You all have to use a color in your answer somehow",
  "You all think you are someone in the room",
  "You have to touch your hair whenever you use a word with a 'T' in it",
  "You all think you are Chuck Norris",
  "Everyone thinks they are a king or queen",
  "Unless the psychologist is looking at you, you refuse to show your teeth",
  "You have to use a number in your answer"
];
let psychPlayer=0, psychOddPlayer=0, psychRule="";
document.getElementById("psychStartBtn").addEventListener("click", startPsychologist);
document.getElementById("psychNextBtn").addEventListener("click", nextPsychPlayer);
function startPsychologist(){
  const players=Number(document.getElementById("psychPlayers").value);
  if(!players||players<3){alert(text[currentLanguage].minPlayers);return;}
  psychPlayer=0; psychOddPlayer=Math.floor(Math.random()*players);
  psychRule=psychRules[Math.floor(Math.random()*psychRules.length)];
  document.getElementById("psychInfo").textContent=`Player 1`;
  document.getElementById("psychRule").textContent=text[currentLanguage].tap;
}
function nextPsychPlayer(){
  const players=Number(document.getElementById("psychPlayers").value);
  document.getElementById("psychRule").textContent=text[currentLanguage].tap;
  if(psychPlayer>=players){document.getElementById("psychInfo").textContent=text[currentLanguage].discuss; document.getElementById("psychRule").textContent=""; return;}
  document.getElementById("psychInfo").textContent=`Player ${psychPlayer+1}`;
  const el=document.getElementById("psychRule");
  el.onclick=()=>{el.textContent=psychPlayer===psychOddPlayer?"You are the Psychologist! 🧠":psychRule};
  psychPlayer++;
}
