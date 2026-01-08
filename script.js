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
  en: ["Brushing", "Dancing", "Swimming", "Running", "Jumping", "Climbing", "Sleeping", "Laughing", "Crying", "Sneezing",
"Skating", "Skiing", "Bowling", "Surfing", "Diving", "Cycling", "Yoga", "Stretching", "Lifting", "Balancing",
"Wizard", "Pirate", "Ninja", "Superhero", "Vampire", "Zombie", "Mermaid", "Fairy", "Dragon", "Unicorn",
"Cat", "Dog", "Penguin", "Kangaroo", "Monkey", "Elephant", "Snake", "Horse", "Bird", "Fish",
"Happy", "Angry", "Excited", "Nervous", "Confused", "Proud", "Scared", "Bored", "Sleepy", "Surprised",
"Teacher", "Doctor", "Chef", "Dancer", "Singer", "Athlete", "Actor", "Photographer", "Artist", "Barista",
"Phone", "Laptop", "Camera", "Clock", "Mirror", "Backpack", "Headphones", "Umbrella", "Sunglasses", "Book",
"Beach", "School", "Airport", "Hospital", "Library", "Cinema", "Zoo", "Gym", "Restaurant", "Park"]
,
  no: ["Pusse tennene", "Danse", "Harry Potter", "Svømme", "Katt som sitter fast i et tre",
"Ler", "Gråter", "Sover", "For sent ute", "Gjør yoga",
"Spiller gitar", "Synger i dusjen", "Gå på Lego", "Dårlig hårdag", "Første date",
"Friends (TV-serie)", "The Office", "Modern Family", "Frost", "Løvenes konge",
"Elefant", "Pingvin", "Hund som jager halen sin", "Skli på isen", "Åpne et lokk som sitter fast",
"Ta en selfie", "Miste mobilen", "Misse bussen", "Shoppingrunde", "Prøve klær",
"Lege", "Lærer", "Brannmann", "Kokk", "Astronaut",
"Strandferie", "På flyplassen", "Treningsstudio", "Bibliotek", "Nattklubb",
"Paraply i vinden", "Solbriller innendørs", "Ta en lur", "Hoppe tau", "Klappe",
"Superhelt-landing", "Zombie-gange", "Pirat", "Prinsesse", "Ninja",
"Synge karaoke", "TikTok-dans", "Regnværsdag", "Sommerferie", "Overraskelsesfest",
"Drama queen", "Vinne i lotto", "Miste nøklene", "Bli skremt", "Latterkrampe",
"Gi en klem", "Vinke farvel", "Sjekke speilet", "Føle seg berømt", "Catwalk-modell",
"Frisør", "Bake kake", "Blåse opp ballonger", "Ta bilder", "Åpne gaver",
"Gjespe", "Strekke seg", "Snike seg rundt", "Gå på tærne", "Prøve å ikke le",
"Overtenke", "Pinlig stillhet", "Søle kaffe", "Fryse uten jakke", "Se skrekkfilm",
"Gå i høye hæler", "Solbrent", "Lage snømann", "Fange en sommerfugl", "Danse alene"]

};

function newCharadesWord() {
  const words = charadesWords[currentLanguage];
  const word = words[Math.floor(Math.random() * words.length)];
  document.getElementById("charadesWord").textContent = word;
}

// ---------- SPY ----------
const spyLocations = {
  en: ["Beach 🏖️", "School 🏫", "Airport ✈️", "Hospital 🏥", "Restaurant 🍝",
"Hotel 🏨", "Cinema 🎬", "Library 📚", "Supermarket 🛒", "Gym 🏋️‍♀️",
"Zoo 🦁", "Museum 🖼️", "Train Station 🚉", "Police Station 🚓", "Fire Station 🚒",
"Office 🏢", "Factory 🏭", "Farm 🚜", "Park 🌳", "Playground 🛝",
"Nightclub 🎶", "Concert 🎤", "Theatre 🎭", "Stadium 🏟️", "Swimming Pool 🏊‍♀️",
"Spa 💆‍♀️", "Salon 💇‍♀️", "Bakery 🥐", "Cafe ☕", "Bar 🍹",
"Church ⛪", "Temple 🛕", "Mosque 🕌", "Castle 🏰", "Palace 👑",
"Prison ⛓️", "Courtroom ⚖️", "Embassy 🌍", "Laboratory 🧪", "Space Station 🛰️",
"Bridge 🌉", "Tunnel ⛏️", "Mountain 🏔️", "Desert 🏜️", "Island 🏝️",
"River 🌊", "Lake 🏞️", "Forest 🌲", "Jungle 🌴", "Cave 🪨",
"Hotel Lobby 🛋️", "Beach Resort 🏝️", "Marina ⛵", "Pier 🌅", "Harbor ⚓",
"Shopping Mall 🛍️", "Airport Terminal 🛄", "Train Platform 🚉", "Bus Station 🚌", "Subway 🚇",
"Observatory 🔭", "Planetarium 🌌", "Aquarium 🐠", "Botanical Garden 🌺", "Zoo Entrance 🦓",
"Amusement Park 🎢", "Fairground 🎡", "Circus 🎪", "Skate Park 🛹", "Ski Resort 🎿",
"Library Reading Room 📖", "Bookstore 📙", "Coffee Shop ☕", "Diner 🍔", "Food Truck 🚚",
"Bakery Counter 🥖", "Ice Cream Shop 🍦", "Candy Store 🍬", "Toy Store 🧸", "Clothing Store 👗",
"Gym Studio 🏋️", "Yoga Studio 🧘‍♀️", "Dance Studio 💃", "Martial Arts Dojo 🥋", "Boxing Gym 🥊",
"Hospital Ward 🏥", "Pharmacy 💊", "Doctor's Office 🩺", "Dentist 🦷", "Vet Clinic 🐾",
"Police HQ 🚓", "Fire HQ 🚒", "Courthouse ⚖️", "City Hall 🏛️", "Post Office 📮",
"Train Depot 🚂", "Bus Depot 🚌", "Port Dock ⚓", "Construction Site 🚧", "Factory Floor 🏭",
"Warehouse 📦", "Garage 🚗", "Parking Lot 🅿️", "Street Corner 🛣️", "Roundabout 🔄"]
,
  no: ["Strand 🏖️", "Skole 🏫", "Flyplass ✈️", "Sykehus 🏥", "Restaurant 🍝",
"Bibliotek 📚", "Kino 🎬", "Nattklubb 💃", "Treningsstudio 🏋️‍♀️", "Supermarked 🛒",
"Park 🌳", "Zoo 🦁", "Busstasjon 🚌", "Togstasjon 🚆", "Bensinstasjon ⛽",
"Hotell 🏨", "Kafé ☕", "Museum 🖼️", "Teater 🎭", "Akvarium 🐠",
"Flytebrygge 🛶", "Fjell 🏔️", "Hytte 🛖", "Campingplass ⛺", "Vannpark 💦",
"Skøytebane ⛸️", "Fotballstadion ⚽", "Basketballhall 🏀", "Bowlingbane 🎳", "Isbar 🍧",
"Busstur 🚌", "Tunnel 🚇", "Båthavn ⚓", "Strandpromenade 🌅", "Fiskebutikk 🐟",
"Bryllup 👰", "Konsert 🎤", "Festival 🎪", "Sirkus 🤹", "Karusell 🎠",
"Skibakke 🎿", "Skiheis ⛷️", "Fabrikk 🏭", "Varehus 🏬", "Garasje 🚗",
"Flydekk ✈️", "Kontor 🖥️", "Postkontor 📮", "Apotek 💊", "Bank 🏦",
"Dyrehage 🦓", "Bakeri 🍞", "Iskrembutikk 🍦", "Blomsterbutikk 🌸", "Lekeplass 🛝",
"Bibliotekarrom 📖", "Kjeller 🏚️", "Loft 🏠", "Garasjetak 🚗", "Takterrasse 🌇",
"Havkajakk 🛶", "Skog 🍃", "Elv 🏞️", "Vannfall 🌊", "Observatorium 🔭",
"Jernbanebro 🌉", "Brygge 🛥️", "Lysthus 🏡", "Kirkegård ⚰️", "Katedral ⛪",
"Fyrtårn 🗼", "Parlament 🏛️", "Slott 🏰", "Palass 🏯", "Monument 🗿",
"Shoppinggate 🛍️", "Torg 🏘️", "Markedsplass 🥕", "Teltby ⛺", "Flyplassloungen 🛋️",
"Klatrevegg 🧗‍♀️", "Trampolinepark 🤸", "Svømmehall 🏊‍♀️", "Lekegrind 👶", "Skiutleie 🎿",
"Fyrverkerifestival 🎆", "Julemarked 🎄", "Påskeegg-jakt 🥚", "Sommerfestival 🌞", "Badebasseng 🏖️",
"Kinofoyer 🍿", "Bilutstilling 🚗", "Flyshow ✈️", "Moteshow 👗", "Matfestival 🍲",
"Skogssti 🌲", "Elvebredd 🏞️", "Fottur 🌄", "Sykkeltur 🚴‍♀️", "Paraplyfestival ☂️",
"Surfekonkurranse 🏄‍♀️", "Seilbåtregatta ⛵", "Dykkesenter 🤿", "Fisketur 🐠", "Lystbåt 🛥️",
"Campingplass ved innsjø ⛺", "Vannsklie 💦", "Skaterampe 🛹", "Paintballbane 🎨", "Laser-tag arena 🔫"]

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
  en: ["Cat 🐱", "Dog 🐶", "Bird 🐦", "Elephant 🐘", "Lion 🦁",
"Tiger 🐯", "Bear 🐻", "Monkey 🐒", "Horse 🐴", "Giraffe 🦒",
"Shark 🦈", "Fish 🐟", "Whale 🐳", "Dolphin 🐬", "Frog 🐸",
"Turtle 🐢", "Snake 🐍", "Bee 🐝", "Butterfly 🦋", "Spider 🕷️",
"Sun 🌞", "Moon 🌙", "Star ⭐", "Cloud ☁️", "Rainbow 🌈",
"Tree 🌳", "Flower 🌸", "Cactus 🌵", "Mushroom 🍄", "Grass 🌿",
"Car 🚗", "Bus 🚌", "Bike 🚲", "Train 🚂", "Airplane ✈️",
"Boat 🚤", "Helicopter 🚁", "Rocket 🚀", "Submarine 🛳️", "Hot Air Balloon 🎈",
"House 🏠", "Castle 🏰", "Tent ⛺", "Igloo 🧊", "Skyscraper 🏢",
"Chair 🪑", "Table 🛋️", "Bed 🛏️", "Sofa 🛋️", "Lamp 🛋️",
"Phone 📱", "Laptop 💻", "Camera 📷", "Clock ⏰", "Book 📖",
"Pen ✏️", "Pencil ✏️", "Paintbrush 🖌️", "Scissors ✂️", "Bag 🎒",
"Hat 🎩", "Shoes 👟", "Dress 👗", "Shirt 👕", "Pants 👖",
"Apple 🍎", "Banana 🍌", "Orange 🍊", "Watermelon 🍉", "Grapes 🍇",
"Strawberry 🍓", "Cherry 🍒", "Pineapple 🍍", "Lemon 🍋", "Peach 🍑",
"Cup ☕", "Plate 🍽️", "Spoon 🥄", "Fork 🍴", "Knife 🔪",
"Pizza 🍕", "Burger 🍔", "Hotdog 🌭", "Fries 🍟", "Cake 🎂",
"Ice Cream 🍦", "Donut 🍩", "Candy 🍬", "Chocolate 🍫", "Cookie 🍪",
"Ball ⚽", "Frisbee 🥏", "Kite 🪁", "Skateboard 🛹", "Bicycle 🚲",
"Swing 🛝", "Slide 🛝", "Trampoline 🏃‍♀️", "Slide 🛝", "Seesaw ⚖️",
"Train 🚂", "Car 🚗", "Bus 🚌", "Truck 🚚", "Motorcycle 🏍️",
"Bridge 🌉", "Tunnel 🛣️", "Mountain 🏔️", "River 🌊", "Lake 🏞️"]
,
  no: ["Katt 🐱", "Hund 🐶", "Hus 🏠", "Bil 🚗", "Sykkel 🚲",
"Eple 🍎", "Banan 🍌", "Is 🍦", "Kake 🎂", "Pizza 🍕",
Sole 🌞", "Måne 🌙", "Stjerne ⭐", "Regnbue 🌈", "Sky ☁️",
Blomst 🌸", "Tre 🌳", "Fugl 🐦", "Fisk 🐟", "Slange 🐍",
Elefant 🐘", "Løve 🦁", "Sjiraff 🦒", "Ape 🐒", "Pingvin 🐧",
Båt ⛵", "Fly ✈️", "Tog 🚆", "Buss 🚌", "Motorsykkel 🏍️",
Briller 🕶️", "Klokke ⏰", "Telefon 📱", "Bok 📖", "Pen ✏️",
Ball ⚽", "Hockeykølle 🏒", "Golfkølle ⛳", "Skøyter ⛸️", "Rulleskøyter 🛼",
Danse 💃", "Synge 🎤", "Sove 🛌", "Løpe 🏃‍♀️", "Hoppe 🤸",
Skrive ✍️", "Tegne 🎨", "Male 🖌️", "Bake 🎂", "Koke 🍳",
Svømme 🏊‍♀️", "Surfing 🏄‍♀️", "Fiske 🎣", "Klatre 🧗‍♀️", "Gå tur 🚶‍♀️",
Skøyte 🛹", "Hoppe tau", "Rullebrett 🛹", "Se på TV 📺", "Spille spill 🎮",
Slott 🏰", "Hytte 🛖", "Skole 🏫", "Sykehus 🏥", "Bibliotek 📚",
Kino 🎬", "Park 🌳", "Strand 🏖️", "Fjell 🏔️", "Vannfall 🌊",
Regn ☔", "Snø ❄️", "Storm ⛈️", "Solnedgang 🌅", "Soloppgang 🌄",
Kattunge 🐱", "Valp 🐶", "Mus 🐭", "Kaninhopp 🐇", "Skilpadde 🐢",
Drage 🐉", "Enhjørning 🦄", "Fe 🧚‍♀️", "Vampyr 🧛‍♂️", "Zombie 🧟‍♂️",
Superhelt 🦸‍♀️", "Pirat 🏴‍☠️", "Cowboy 🤠", "Røver 🏴", "Politi 👮‍♀️",
Brannmann 👨‍🚒", "Lege 👩‍⚕️", "Kokk 👨‍🍳", "Lærer 👩‍🏫", "Astronaut 👩‍🚀",
Mus 🎹", "Gitar 🎸", "Trommer 🥁", "Fiolin 🎻", "Saxofon 🎷",
Kaffe ☕", "Te 🍵", "Vann 💧", "Smoothie 🥤", "Sjokolade 🍫",
Hatt 🎩", "Skjerf 🧣", "Hansker 🧤", "Sko 👟", "Veske 👜",
Husdyr 🐕", "Villdyr 🦓", "Troll 🧌", "Alv 🧝‍♀️", "Heks 🧙‍♀️",
Rakett 🚀", "Planet 🪐", "Stjerne ⭐", "Måne 🌕", "Sol 🌞"]
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
  en: [["Cat 🐱", "Dog 🐶"], ["House 🏠", "Hut 🛖"], ["Tree 🌳", "Palm 🌴"],
["Car 🚗", "Bike 🚲"], ["Sun 🌞", "Moon 🌙"], ["Apple 🍎", "Banana 🍌"],
["Lion 🦁", "Tiger 🐯"], ["Chair 🪑", "Table 🛋️"], ["Book 📖", "Pen ✏️"],
["Fish 🐟", "Shark 🦈"], ["Castle 🏰", "Tower 🗼"], ["Flower 🌸", "Cactus 🌵"],
["Bird 🐦", "Butterfly 🦋"], ["Horse 🐴", "Donkey 🐴"], ["Pizza 🍕", "Burger 🍔"],
["Train 🚂", "Bus 🚌"], ["Coffee ☕", "Tea 🍵"], ["Ice Cream 🍦", "Cake 🎂"],
["Plane ✈️", "Helicopter 🚁"], ["Robot 🤖", "Alien 👽"], ["Star ⭐", "Cloud ☁️"],
["Rainbow 🌈", "Lightning ⚡"], ["Snake 🐍", "Frog 🐸"], ["Bee 🐝", "Ladybug 🐞"],
["Hat 🎩", "Shoes 👟"], ["Cup ☕", "Plate 🍽️"], ["Bed 🛏️", "Sofa 🛋️"],
["Phone 📱", "Laptop 💻"], ["Fire 🔥", "Water 💧"], ["Mountain 🏔️", "Hill ⛰️"],
["Bridge 🌉", "Tunnel 🛣️"], ["Key 🗝️", "Lock 🔒"], ["Treasure 💰", "Map 🗺️"],
["Train Station 🚉", "Airport ✈️"], ["Gym 🏋️‍♀️", "Yoga 🧘‍♀️"], ["Doctor 🩺", "Nurse 👩‍⚕️"],
["Sword ⚔️", "Shield 🛡️"], ["Ball ⚽", "Frisbee 🥏"], ["Swing 🛝", "Slide 🛝"],
["Beach 🏖️", "Island 🏝️"], ["Zoo 🦁", "Aquarium 🐠"], ["Cake 🎂", "Cookie 🍪"],
["Lamp 🛋️", "Mirror 🪞"], ["Train 🚂", "Boat ⛵"], ["Forest 🌲", "Jungle 🌴"],
["Cloud ☁️", "Rain 🌧️"], ["Sun 🌞", "Rainbow 🌈"], ["Castle 🏰", "Palace 👑"]]
,
  no: [["Katt 🐱", "Hund 🐶"],
 ["Hus 🏠", "Hytte 🛖"],
 ["Tre 🌳", "Palme 🌴"],
 ["Blomst 🌸", "Sol 🌞"],
 ["Måne 🌙", "Stjerne ⭐"],
 ["Fugl 🐦", "Pingvin 🐧"],
 ["Elefant 🐘", "Løve 🦁"],
 ["Sjiraff 🦒", "Ape 🐒"],
 ["Bil 🚗", "Sykkel 🚲"],
 ["Fly ✈️", "Båt ⛵"],
 ["Bok 📖", "Pen ✏️"],
 ["Klokke ⏰", "Briller 🕶️"],
 ["Is 🍦", "Kake 🎂"],
 ["Pizza 🍕", "Burger 🍔"],
 ["Ball ⚽", "Hockeykølle 🏒"],
 ["Danse 💃", "Synge 🎤"],
 ["Sove 🛌", "Løpe 🏃‍♀️"],
 ["Male 🎨", "Tegne ✏️"],
 ["Bake 🎂", "Koke 🍳"],
 ["Regn ☔", "Snø ❄️"],
 ["Fjell 🏔️", "Strand 🏖️"],
 ["Park 🌳", "Zoo 🦁"],
 ["Hatt 🎩", "Skjerf 🧣"],
 ["Sko 👟", "Veske 👜"],
 ["Superhelt 🦸‍♀️", "Pirat 🏴‍☠️"],
 ["Cowboy 🤠", "Brannmann 👨‍🚒"],
 ["Lege 👩‍⚕️", "Lærer 👩‍🏫"],
 ["Astronaut 👩‍🚀", "Rakett 🚀"],
 ["Planet 🪐", "Sol 🌞"],
 ["Måne 🌕", "Stjerne ⭐"],
 ["Trommer 🥁", "Gitar 🎸"],
 ["Fiolin 🎻", "Saxofon 🎷"],
 ["Kaffe ☕", "Te 🍵"],
 ["Vann 💧", "Smoothie 🥤"],
 ["Sjokolade 🍫", "Iskrem 🍨"],
 ["Slange 🐍", "Skilpadde 🐢"],
 ["Enhjørning 🦄", "Drage 🐉"],
 ["Fe 🧚‍♀️", "Heks 🧙‍♀️"],
 ["Zombie 🧟‍♂️", "Vampyr 🧛‍♂️"],
 ["Tunnel 🚇", "Bro 🌉"],
 ["Flyplass ✈️", "Busstasjon 🚌"],
 ["Bibliotek 📚", "Kino 🎬"],
 ["Restaurant 🍝", "Kafé ☕"],
 ["Treningsstudio 🏋️‍♀️", "Svømmehall 🏊‍♀️"],
 ["Skole 🏫", "Sykehus 🏥"],
 ["Bryllup 👰", "Festival 🎪"],
 ["Fjellhytte 🛖", "Campingplass ⛺"],
 ["Bensinstasjon ⛽", "Varehus 🏬"],
 ["Skøytebane ⛸️", "Rulleskøyter 🛼"],
 ["Karusell 🎠", "Lekeplass 🛝"],
 ["Togstasjon 🚆", "Havkajakk 🛶"],
 ["Fiskebutikk 🐟", "Bakeri 🍞"],
 ["Blomsterbutikk 🌸", "Isbar 🍧"],
 ["Skogssti 🌲", "Elvebredd 🏞️"],
 ["Fottur 🌄", "Sykkeltur 🚴‍♀️"],
 ["Lysthus 🏡", "Takterrasse 🌇"],
 ["Fyrtårn 🗼", "Slott 🏰"],
 ["Palass 🏯", "Monument 🗿"],
 ["Shoppinggate 🛍️", "Torg 🏘️"],
 ["Markedsplass 🥕", "Teltby ⛺"],
 ["Klatrevegg 🧗‍♀️", "Trampolinepark 🤸"],
 ["Surfekonkurranse 🏄‍♀️", "Seilbåtregatta ⛵"],
 ["Dykkesenter 🤿", "Paintballbane 🎨"],
 ["Laser-tag arena 🔫", "Vannsklie 💦"]]

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
["Least favorite food?", "Favorite food?"], 
["Best movie you’ve ever seen?", "Worst movie you’ve ever seen?"], 
["Dream vacation spot?", "Place you’d never want to visit?"], 
["Most annoying habit you notice in others?", "A habit you admire in others?"], 
["Favorite animal?", "Animal you dislike?"], 
["Biggest fear?", "Something that excites you?"], 
["A skill you wish you had?", "A skill you think is useless?"], 
["Favorite hobby?", "Hobby you tried and hated?"], 
["Most memorable birthday?", "A birthday you want to forget?"], 
["Favorite season?", "Season you dislike?"], 
["Favorite color?", "Color you don’t like?"], 
["A subject you loved in school?", "A subject you hated in school?"], 
["Most inspiring song?", "A song you can’t stand?"], 
["A food you crave often?", "A food you refuse to eat?"], 
["A sport you enjoy watching?", "A sport you find boring?"], 
["Most adventurous thing you’ve done?", "A lazy thing you secretly love?"], 
["Favorite holiday?", "A holiday you never celebrate?"], 
["Dream job?", "Job you would never do?"], 
["Best friend’s trait you admire?", "Trait you find annoying in friends?"], 
["Favorite cartoon or show as a kid?", "Show you hated as a kid?"], 
["Funniest movie?", "Scariest movie you watched?"], 
["Favorite dessert?", "Dessert you dislike?"], 
["Best memory from childhood?", "Worst memory from childhood?"], 
["A place you love to visit?", "A place you avoid?"], 
["Something you collect or enjoy?", "Something you can’t stand collecting?"], 
["Most interesting fact you know?", "Fact you think is boring?"], 
["Favorite book?", "Book you hated reading?"], 
["Favorite clothing item?", "Clothing item you refuse to wear?"], 
["An app you use often?", "An app you avoid?"], 
["Favorite TV show?", "Show you skip?"], 
["A character you admire?", "Character you dislike?"], 
["Animal sound you like imitating?", "Animal sound you hate?"], 
["Candy or snack you love?", "Candy or snack you hate?"], 
["A topping or food combo you enjoy?", "A topping or combo you avoid?"], 
["Best day of the week?", "Worst day of the week?"], 
["Favorite fruit?", "Fruit you dislike?"], 
["Favorite vegetable?", "Vegetable you dislike?"], 
["Outdoor activity you enjoy?", "Outdoor activity you dislike?"], 
["A superpower you wish you had?", "A superpower you’d never want?"], 
["A childhood game you loved?", "A childhood game you hated?"], 
["Favorite childhood toy?", "Toy you never liked?"], 
["An adventure you went on?", "An adventure you regret?"], 
["A funny memory with friends?", "An embarrassing memory with friends?"], 
["Favorite holiday tradition?", "A tradition you find annoying?"], 
["Something that relaxes you?", "Something that stresses you out?"], 
["A talent you have?", "A talent you wish you didn’t have?"], 
["Favorite dessert memory?", "Dessert you regret eating?"], 
["A song you always sing along to?", "A song you skip immediately?"], 
["A place you’d love to live?", "A place you could never live?"], 
["A hobby you want to try?", "A hobby you regret trying?"], 
["Something that makes you laugh?", "Something that annoys you?"], 
["A childhood show you loved?", "A show you hated as a kid?"], 
["Favorite type of weather?", "Weather you find unbearable?"], 
["A book you recommend?", "A book you’d never read?"], 
["A sport you play often?", "A sport you tried and disliked?"], 
["A talent or skill you admire in others?", "A talent that frustrates you?"], 
["A place that inspires you?", "A place you avoid?"], 
["A food combination you enjoy?", "A combination you hate?"], 
["Favorite memory outdoors?", "Worst memory outdoors?"], 
["Something that surprises you often?", "Something that bores you?"], 
["A fear you’ve overcome?", "A fear you still have?"], 
["A funny moment at school?", "An embarrassing moment at school?"], 
["Favorite thing to draw or create?", "Thing you hate drawing or creating?"], 
["A childhood pet you loved?", "A pet you didn’t like?"], 
["Favorite type of movie?", "Movie genre you dislike?"], 
["Favorite game to play?", "Game you find boring?"], 
["Something that motivates you?", "Something that discourages you?"], 
["A dream you remember?", "A nightmare you had?"], 
["A skill you’re proud of?", "A skill you want to hide?"], 
["A secret talent?", "A skill you wish you never had?"], 
["Favorite place in nature?", "Place in nature you dislike?"] 

  ],
  no: [
    [["Favorittfarge?", "Farge du misliker?"],
 ["Et fag du likte på skolen?", "Et fag du hatet på skolen?"],
 ["Sang som inspirerer deg mest?", "En sang du ikke tåler?"],
 ["Mat du ofte har lyst på?", "Mat du nekter å spise?"],
 ["Et sted du elsker å besøke?", "Et sted du unngår?"],
 ["Hobby du liker?", "Hobby du ikke liker?"],
 ["Film du kan se om og om igjen?", "Film du aldri ville sett ferdig?"],
 ["Person du beundrer?", "Person du ikke liker?"],
 ["Bok som har forandret deg?", "Bok du hatet å lese?"],
 ["Sport du liker å spille?", "Sport du hater å se på?"],
 ["Lukt du elsker?", "Lukt som gjør deg kvalm?"],
 ["Kjæledyr du er glad i?", "Dyr du er redd for?"],
 ["En aktivitet som gjør deg avslappet?", "En aktivitet som stresser deg?"],
 ["Ferie du elsket?", "En tur som gikk fryktelig galt?"],
 ["Barndomsminne du setter pris på?", "Barndomsminne du helst vil glemme?"],
 ["Dessert du ikke kan motstå?", "Dessert du misliker?"],
 ["Årstid du liker best?", "Årstid du liker minst?"],
 ["By du elsker?", "By du aldri vil besøke?"],
 ["En venn du alltid kan stole på?", "En person du unngår?"],
 ["Sang som gjør deg glad?", "Sang som får deg til å gremmes?"],
 ["Lukt som minner deg om hjemmet?", "Lukt som frastøter deg?"],
 ["TV-serie du bingewatcher?", "TV-serie du nekter å se?"],
 ["Talent du er stolt av?", "Ferdighet du skulle ønske du hadde?"],
 ["Plagg du elsker?", "Mote-trend du hater?"],
 ["Teknologi du bruker daglig?", "En gadget du ikke tåler?"],
 ["Fag du er god i?", "Fag du sliter med?"],
 ["Språk du vil lære?", "Språk du synes er umulig?"],
 ["Et spill du elsker å spille?", "Et spill du nekter å spille?"],
 ["Barndomsleke du elsket?", "Leke du mislikte?"],
 ["Sport du beundrer?", "Sport du aldri ville prøvd?"],
 ["Høytid du gleder deg til?", "Høytid du gruer deg til?"],
 ["Restaurant du elsker?", "Restaurant du unngår?"],
 ["Drikk du liker?", "Drikk du hater?"],
 ["Ferieaktivitet du elsker?", "Ferieaktivitet du misliker?"],
 ["Matrett du elsker å lage?", "Matrett du aldri lager?"],
 ["Måltid på dagen du liker best?", "Måltid du misliker?"],
 ["Et sted ute du liker å være?", "Sted ute du unngår?"],
 ["Aktivitet på sommeren du elsker?", "Aktivitet på sommeren du misliker?"],
 ["Aktivitet på vinteren du liker?", "Aktivitet på vinteren du hater?"],
 ["Frukt du elsker?", "Frukt du ikke liker?"],
 ["Grønnsak du elsker?", "Grønnsak du misliker?"],
 ["Godteri du elsker?", "Godteri du nekter å spise?"],
 ["Drikke til middag du liker?", "Drikke til middag du misliker?"],
 ["Frokost du elsker?", "Frokost du hater?"],
 ["Kveldsmat du liker?", "Kveldsmat du unngår?"],
 ["Film du elsker å se med venner?", "Film du aldri ville sett med venner?"],
 ["Serie du liker å binge?", "Serie du aldri binger?"],
 ["Aktivitet du gjør for å slappe av?", "Aktivitet du hater å gjøre for å slappe av?"],
 ["Barnespill du likte?", "Barnespill du mislikte?"],
 ["Favorittdyr i naturen?", "Dyr du ikke liker å møte i naturen?"],
 ["Favorittsted hjemme?", "Sted hjemme du unngår?"],
 ["Favorittmåltid på skolen?", "Måltid på skolen du unngår?"],
 ["Favorittmat fra barndommen?", "Mat du hatet som barn?"],
 ["Favorittsnack på kvelden?", "Snack du aldri spiser på kvelden?"],
 ["Favorittaktivitet med venner?", "Aktivitet du unngår med venner?"],
 ["Favorittreisemål?", "Reisemål du ikke liker?"],
 ["Favorittmåte å feire bursdag på?", "Bursdagsaktivitet du misliker?"],
 ["Favorittsport å prøve?", "Sport du aldri ville prøvd?"],
 ["Favorittdyr i zoo?", "Dyr du unngår i zoo?"],
 ["Favorittmåltid på ferie?", "Måltid du ikke spiser på ferie?"],
 ["Favorittdessert?", "Dessert du misliker?"],
 ["Favorittsnack på fest?", "Snack du aldri spiser på fest?"],
 ["Favorittmåltid med familien?", "Måltid du unngår med familien?"],
 ["FavorittTV-karakter?", "Karakter du misliker?"],
 ["Favorittfilmgenre?", "Filmgenre du hater?"],
 ["Favorittaktivitet ute?", "Aktivitet ute du unngår?"],
 ["Favorittaktivitet inne?", "Innaktivitet du misliker?"],
 ["Favorittfruktjuice?", "Juice du ikke liker?"],
 ["Favorittmåltid til middag?", "Middag du aldri spiser?"],
 ["Favorittdyr på gård?", "Gårdsdyr du ikke liker?"],
 ["Favorittmåltid på skolen?", "Matrett du unngår på skolen?"],
 ["Favorittmåltid på helg?", "Måltid du hater i helgen?"],
 ["Favorittutendørsplass?", "Utendørsplass du unngår?"],
 ["Favorittmåte å starte dagen?", "Måte du hater å starte dagen på?"],
 ["Favorittmåltid på kvelden?", "Kveldsmat du misliker?"],
 ["Favorittmåltid å lage til venner?", "Mat du aldri lager til venner?"],
 ["Favorittdessert å bake?", "Dessert du aldri baker?"]]

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
  en: ["You all cross your legs when you tell a lie - and uncross them when you are telling the truth",
 "Each answer begins with the next letter in the alphabet. (So the first person gives an 'A' answer, and the next gives one that starts with a 'B'...)",
 "Everyone thinks they are the person to their right",
 "Whoever the psychologist is questioning, the people on both sides of them get itchy",
 "Everyone thinks they are the shoes they are currently wearing",
 "Everyone thinks they are in the Napolean Dynamite movie",
 "You all time traveled here (this is fun because you all are trying to figure out what time period people came from)",
 "Whenever someone says 'um' everyone changes positions",
 "You are obsessed with the letter 'R' and you are all super undecisive (this is a double whammy)",
 "You all think you are your current or future spouse (so you answer how you think [or hope] they would answer)",
 "You all have to use a color in your answer somehow",
 "You all think you are someone in the room (so you all think you are Amber and have to answer and act like her)",
 "You have to touch your hair whenever you use a word with a 'T' in it",
 "You all think they are Chuck Norris",
 "Everyone thinks they are a king or queen",
 "Unless the psychiatrist is looking at you, you refuse to show your teeth",
 "You have to use a number in your answer",
 "You all blink rapidly when you lie, and stop blinking when you tell the truth",
 "You must nod when your answer is true and shake your head when it’s false",
 "Every answer must somehow include a lie about yourself",
 "You all think you are invisible unless the psychologist is looking at you",
 "Whenever you answer, you must slightly lean toward the psychologist",
 "You all answer in the past tense only",
 "You all answer as if you are extremely confident, even when unsure",
 "You must whisper when telling the truth and speak loudly when lying",
 "You all think you are the youngest person in the room",
 "Whenever someone else is asked a question, you sigh",
 "You must smile at the end of every answer",
 "You all think you are late for something important",
 "You have to exaggerate your gestures when you lie",
 "Every answer must include a location (real or made-up)",
 "You all think you are famous",
 "Whenever your name is said, you freeze",
 "You all think you are much taller than you actually are",
 "You must cross your arms when you’re uncomfortable",
 "You all think you are terrible liars",
 "You have to pause dramatically before answering",
 "You all think you are extremely lucky",
 "Whenever someone laughs, you immediately stop talking",
 "You must avoid eye contact when telling the truth",
 "You all think you are being filmed",
 "Every answer must include a reason, even if it makes no sense",
 "You all think you are very serious people",
 "You must repeat one word in your answer twice",
 "You all think you are the main character",
 "Whenever the psychologist stands up, you sit up straighter",
 "You all think you are allergic to something in the room",
 "You must answer using a metaphor",
 "You all think you are very cold",
 "You must tilt your head when answering a question",
 "You all think you are very bad at this game",
 "Every answer must include an emotion",
 "You all think you are secretly related",
 "Whenever someone says 'why', you hesitate",
 "You all think you are extremely honest",
 "You must answer as briefly as possible",
 "You all think you are much smarter than you actually are",
 "Whenever the psychologist writes something down, you get nervous",
 "You must answer using a memory",
 "You all think you are in a different country",
 "Every answer must include a sound effect",
 "You all think you are being judged",
 "You must start your answer with 'Honestly…'",
 "You all think you are trying to hide something",
 "Whenever the psychologist makes eye contact, you stop moving"]
,
  no: [
 "Dere krysser bena når dere lyver – og retter dem ut når dere snakker sant",
 "Hvert svar må begynne med neste bokstav i alfabetet (første person med A, neste med B osv.)",
 "Alle tror de er personen til høyre for seg",
 "Den som psykologen spør, får at folkene på begge sider begynner å klø",
 "Alle tror de er skoene de har på seg",
 "Alle tror de er i The Office",
 "Dere har alle tidsreist hit (morsomt fordi alle prøver å finne ut hvilken tidsperiode folk kommer fra)",
 "Når noen sier 'øh' må alle bytte plass",
 "Alle er ekstremt ubesluttsomme",
 "Alle tror de er sin nåværende eller fremtidige ektefelle (så svar slik du tror/håper de ville svart)",
 "Dere må bruke en farge i svaret deres",
 "Alle tror de er en bestemt person i rommet (så alle tror de er Amber og må svare og oppføre seg som henne)",
 "Du må røre håret ditt hver gang du bruker et ord med 'T' i",
 "Alle tror de er konge eller dronning",
 "Med mindre psykologen ser på deg, nekter du å vise tennene dine (vanskelig å holde latteren inne!)",
 "Du må bruke et tall i svaret ditt",
 "Alle må snakke som om de er et dyr de selv velger",
 "Når noen nyser, må alle late som om de hoster",
 "Alle tror de er en kjendis og svarer som denne kjendis",
 "Når noen sier et ord med bokstaven 'S', må alle snu seg 90 grader",
 "Alle må mime et yrke mens de svarer",
 "Dere må alle svare på spørsmålene som om dere er fra en annen planet",
 "Alle må hviske hver gang de sier et ord med vokalen 'A'",
 "Når noen gjesper, må alle late som om de gjesper dramatisk",
 "Alle må inkludere en lyd i svaret sitt, som 'mrrr' eller 'woof'",
 "Når psykologen spør om følelser, må alle overdrive følelsen ti ganger",
 "Alle må late som om de har superkrefter når de svarer",
 "Når noen sier 'jeg', må alle peke på seg selv",
 "Alle må lage en liten dans mens de svarer på spørsmålene",
 "Dere må svare som om dere er veldig små barn",
 "Alle må svare som om de er veldig gamle mennesker",
 "Når noen sier et fargenavn, må alle mime det objektet",
 "Alle må snakke som om de er på en scene i et teaterstykke",
 "Når noen sier et tall, må alle hoppe det antallet ganger",
 "Alle må svare som om de er sin største frykt",
 "Alle må late som om de ikke kan bruke ord med bokstaven 'E'",
 "Alle må bruke et ord som rimer i hvert svar",
 "Når noen ler, må alle gjøre en grimase samtidig",
 "Alle må lage en hemmelig håndbevegelse når de svarer",
 "Dere må svare som om dere har ekstremt dårlig hukommelse",
 "Når noen sier ordet 'psykolog', må alle snu seg rundt",
 "Alle må bruke en lyd som 'plopp' eller 'bzzz' i svaret sitt",
 "Dere må svare som om dere er veldig dramatiske skuespillere",
 "Alle må svare som om de er karakterer fra en barnebok",
 "Når noen gisper, må alle hviske 'wow' samtidig",
 "Alle må late som om de er superraske når de svarer",
 "Alle må bruke et ord fra naturen i svaret sitt",
 "Dere må svare som om dere er veldig sultne",
 "Alle må snakke som om de har veldig høy stemme",
 "Alle må snakke som om de har veldig lav stemme",
 "Når noen klapper, må alle late som om de danser",
 "Alle må svare som om de er en robot",
 "Alle må svare som om de er en zombie",
 "Alle må bruke et ord på et annet språk i svaret sitt",
 "Alle må late som om de er ekstremt fornøyde",
 "Alle må late som om de er ekstremt triste",
 "Alle må svare som om de er fra en annen tidsperiode",
 "Alle må bruke et fantasidyr i svaret sitt",
 "Alle må svare som om de har superkrefter for å fly",
 "Alle må bruke et ord som beskriver en lukt",
 "Alle må bruke et ord som beskriver en smak",
 "Når noen snakker fort, må alle snakke enda raskere",
 "Alle må snakke veldig sakte",
 "Alle må late som om de ikke kan sitte stille",
 "Alle må svare som om de er usynlige",
 "Alle må svare som om de er i en romfilm",
 "Alle må late som om de har ekstremt mye energi",
 "Alle må late som om de er veldig slitne",
 "Alle må bruke minst ett ord som starter med 'B' i svaret sitt",
 "Alle må bruke minst ett ord som starter med 'K' i svaret sitt",
 "Alle må svare som om de er en karakter fra en tegneserie",
 "Alle må svare som om de er en karakter fra en eventyrbok",
 "Alle må snakke med et annet dialekt/aksent",
 "Alle må inkludere et dyr i svaret sitt",
 "Alle må inkludere et objekt de ser i rommet i svaret sitt",
 "Alle må mime et yrke mens de svarer",
 "Alle må late som om de er på en tropisk øy",
 "Alle må late som om de er på et sted de aldri har vært",
 "Alle må bruke en farge i svaret sitt",
 "Alle må late som om de har en hemmelig identitet",
 "Alle må bruke et tall i svaret sitt",
 "Alle må late som om de er superhelter",
 "Alle må snakke som om de er dyr de selv velger",]

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

