function launchConfetti() {
  for (let i = 0; i < 80; i++) {
    const confetti = document.createElement("div");
    confetti.classList.add("confetti");

    confetti.style.left = Math.random() * 100 + "vw";
    confetti.style.backgroundColor =
      ["#ff4d6d", "#ff758f", "#ffd166", "#06d6a0"][
        Math.floor(Math.random() * 4)
      ];
    confetti.style.animationDuration =
      Math.random() * 3 + 2 + "s";

    document.body.appendChild(confetti);

    //setTimeout(() => confetti.remove(), 6000);
  }
}

// Fire confetti when YES page loads
window.onload = launchConfetti;
