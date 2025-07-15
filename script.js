const players = [];
let currentPlayerIndex = 0;

const truths = [
  "What's your biggest fear?",
  "What's an embarrassing memory?",
  "Have you ever cheated on a test?",
  "What's a secret you've never told anyone?",
  "Who was your first crush?",
  "What’s the worst gift you’ve ever received?",
  "What’s your guilty pleasure?",
  "Have you ever lied to get out of trouble?"
];

const dares = [
  "Do a funny dance!",
  "Act like a monkey for 30 seconds.",
  "Sing the chorus of your favorite song.",
  "Do 15 jumping jacks.",
  "Speak in a weird accent until your next turn.",
  "Balance a book on your head for 1 minute.",
  "Make a funny face and hold it for 20 seconds.",
  "Pretend you're a cat for the next round."
];

function addPlayer() {
  const name = document.getElementById("playerInput").value.trim();
  if (name) {
    players.push(name);
    updatePlayersList();
    document.getElementById("playerInput").value = '';
  }
}

function updatePlayersList() {
  document.getElementById("playersList").innerHTML =
    `<strong>Players:</strong> ${players.join(', ')}`;
}

function startGame() {
  if (players.length < 2) {
    alert("Please add at least 2 players!");
    return;
  }
  document.getElementById("setup").style.display = "none";
  document.getElementById("game").style.display = "block";
  showCurrentPlayer();
}

function showCurrentPlayer() {
  const name = players[currentPlayerIndex];
  document.getElementById("currentPlayer").innerText = `${name}'s Turn 🎯`;
  document.getElementById("resultText").innerText = 'Choose Truth or Dare!';
}

function play(type) {
  const list = type === 'truth' ? truths : dares;
  const choice = list[Math.floor(Math.random() * list.length)];
  document.getElementById("resultText").innerText = `${type.toUpperCase()}: ${choice}`;
}

function nextPlayer() {
  currentPlayerIndex = (currentPlayerIndex + 1) % players.length;
  showCurrentPlayer();
}

function restartGame() {
  currentPlayerIndex = 0;
  document.getElementById("game").style.display = "none";
  document.getElementById("setup").style.display = "block";
  players.length = 0;
  updatePlayersList();
  document.getElementById("playerInput").value = '';
  document.getElementById("resultText").innerText = '';
}