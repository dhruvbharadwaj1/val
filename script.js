//const noBtn = document.getElementById("no");
let noClicks = 0;

const yesBtn = document.getElementById("yes");
const noBtn = document.getElementById("no");
const emotion = document.getElementById("emotion");

const messages = [
  "Hey… please don’t say no 🥺",
  "That kinda hurt… 💔",
  "I really mean it ❤️",
  "How can you do this Raghvi 😭",
  "You’re my favorite person 💕",
  "Okay now YES is the only option 😌"
];

noBtn.addEventListener("click", () => {
  noClicks++;

  // Change emotional text
  emotion.innerText = messages[Math.min(noClicks - 1, messages.length - 1)];

  // Increase YES button size
  let newSize = 20 + noClicks * 10;
  yesBtn.style.fontSize = newSize + "px";
  yesBtn.style.padding = `${10 + noClicks * 5}px ${20 + noClicks * 10}px`;

  // Optional: make NO smaller
  noBtn.style.fontSize = Math.max(10, 20 - noClicks * 2) + "px";

if (noClicks > 7) {
    noBtn.style.position = "absolute";
    noBtn.style.left = Math.random() * 80 + "vw";
    noBtn.style.top = Math.random() * 80 + "vh";
  }
});

const yesmessages = [
  "I LOVE YOU 😭❤️"
];

let i = 0;

document.getElementById("yes").addEventListener("click", () => {
  if (i < yesmessages.length) {
    document.querySelector("h1").innerText = yesmessages[i++];
  }
});

document.getElementById("yes").addEventListener("click", () => {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.innerText = "❤️";
    confetti.style.fontSize = "20px";
    confetti.style.background = "transparent";
    confetti.classList.add("confetti");
    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(confetti);
  }
});

document.getElementById("yes").addEventListener("click", () => {
  window.location.href = "yes.html";
});
