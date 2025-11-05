// Hent elementerne
const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("movementSound");
const gameoverSound = document.getElementById("gameoverSound");
const game = document.getElementById("game");

// Funktion til bevægelseslyd
function playMovementSound() {
  if (!movementSound) return;
  movementSound.currentTime = 0;
  movementSound.volume = 1.0;
  movementSound.muted = false;
  movementSound.play().catch(() => {});
}

// Funktion til gameover lyd 
function playGameOverSound() {
  if (!gameoverSound) return;
  gameoverSound.currentTime = 0;
  gameoverSound.volume = 1.0;
  gameoverSound.muted = false;
  gameoverSound.play().catch(() => {});
}

// --- Bevægelsesfunktioner ---
function moveDodgerLeft() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    playMovementSound();
  } else {
    playGameOverSound(); // ramte venstre kant
  }
}

function moveDodgerRight() {
  const left = parseInt(dodger.style.left.replace("px", ""), 10);
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
    playMovementSound();
  } else {
    playGameOverSound(); // ramte højre kant
  }
}

function moveDodgerUp() {
  const bottom = parseInt(dodger.style.bottom.replace("px", ""), 10);
  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 1}px`;
    playMovementSound();
  } else {
    playGameOverSound(); // ramte topkant
  }
}

function moveDodgerDown() {
  const bottom = parseInt(dodger.style.bottom.replace("px", ""), 10);
  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
    playMovementSound();
  } else {
    playGameOverSound(); // ramte bundkant
  }
}

// --- Key events ---
document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") moveDodgerLeft();
  if (e.key === "ArrowRight") moveDodgerRight();
  if (e.key === "ArrowUp") moveDodgerUp();
  if (e.key === "ArrowDown") moveDodgerDown();
});

// Fokus på spillet
if (game) {
  game.tabIndex = 0;
  game.focus();
}
