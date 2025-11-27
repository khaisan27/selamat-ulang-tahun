// Tangkap elemen
const form = document.getElementById("birthday-form");
const formContainer = document.getElementById("form-container");
const animationContainer = document.getElementById("animation-container");
const birthdayText = document.getElementById("birthday-text");
const subText = document.getElementById("sub-text");

// Event listener untuk form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value;

  if (name && age) {
    // Update teks dengan nama dan usia
    birthdayText.textContent = `Selamat Ulang Tahun ${name}!`;
    subText.textContent = `Sekarang Anda sudah ${age} tahun! Semoga hari ini penuh kebahagiaan dan tahun depan lebih baik lagi!`;

    // Sembunyikan form dan tampilkan animasi dengan transisi
    formContainer.style.opacity = "0";
    setTimeout(() => {
      formContainer.classList.add("hidden");
      animationContainer.classList.remove("hidden");
      animationContainer.style.opacity = "1";

      // Mulai animasi balon dan confetti
      startAnimations();
    }, 1000);
  } else {
    alert("Harap isi nama dan usia!");
  }
});

// Fungsi untuk mulai animasi balon dan confetti
function startAnimations() {
  // Balon
  function createBalloon() {
    const balloon = document.createElement("div");
    balloon.classList.add("balloon");
    balloon.style.left = Math.random() * 100 + "vw";
    balloon.style.animationDuration = Math.random() * 3 + 5 + "s";
    document.querySelector(".balloons").appendChild(balloon);
    setTimeout(() => balloon.remove(), 7000);
  }
  setInterval(createBalloon, 1200);
  for (let i = 0; i < 7; i++) {
    setTimeout(createBalloon, i * 600);
  }

  // Confetti
  function createConfetti() {
    const confetti = document.querySelector(".confetti");
    for (let i = 0; i < 50; i++) {
      const piece = document.createElement("div");
      piece.classList.add("confetti-piece");
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.animationDelay = Math.random() * 5 + "s";
      piece.style.animationDuration = Math.random() * 3 + 3 + "s";
      confetti.appendChild(piece);
      setTimeout(() => piece.remove(), 8000);
    }
  }
  setInterval(createConfetti, 3000);
  createConfetti();
}

// Kontrol musik
const musicBtn = document.getElementById("play-music");
const bgMusic = document.getElementById("bg-music");

musicBtn.addEventListener("click", () => {
  if (bgMusic.paused) {
    bgMusic.play();
    musicBtn.textContent = "Pause Musik ⏸️";
  } else {
    bgMusic.pause();
    musicBtn.textContent = "Putar Musik 🎵";
  }
});
