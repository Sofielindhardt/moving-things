const dodger = document.getElementById("dodger");
const movementSound = document.getElementById("playSoundOnMovement");

function moveDodgerLeft() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    dodger.style.left = `${left - 1}px`;
    playMovementSound();
  }
}

function moveDodgerRight() {
  const leftNumbers = dodger.style.left.replace("px", "");
  const left = parseInt(leftNumbers, 10);

  // Dodger er 40px bred, containeren er 400px → max position = 360px
  if (left < 360) {
    dodger.style.left = `${left + 1}px`;
    playMovementSound();
  }
}

function moveDodgerUp() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  // Dodger er 20px høj, containeren 400px → max position = 380px
  if (bottom < 380) {
    dodger.style.bottom = `${bottom + 1}px`;
    playMovementSound();
  }
}

function moveDodgerDown() {
  const bottomNumbers = dodger.style.bottom.replace("px", "");
  const bottom = parseInt(bottomNumbers, 10);

  if (bottom > 0) {
    dodger.style.bottom = `${bottom - 1}px`;
    playMovementSound();
  }
}

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    moveDodgerLeft();
  }

  if (e.key === "ArrowRight") {
    moveDodgerRight();
  }

  if (e.key === "ArrowUp") {
    moveDodgerUp();
  }

  if (e.key === "ArrowDown") {
    moveDodgerDown();
  }
});

function playMovementSound() {
  movementSound.currentTime = 0;
  movementSound.play();
}
