const words = [
  "Dancing Queen",
  "Brushing teeth",
  "Harry Potter",
  "Swimming",
  "The Office",
  "Cat stuck in a tree"
];

function newWord() {
  const random = Math.floor(Math.random() * words.length);
  document.getElementById("word").textContent = words[random];
}
