const allButtons = document.querySelectorAll(".drum");

allButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const audio = selectedSound(btn.classList[0]);
    btnAnimation(btn.classList[0]);
    audio.play();
  });
});

document.addEventListener("keydown", (e) => {
  btnAnimation(e.key);
  const audio = selectedSound(e.key);
  audio.play();
});

const selectedSound = (btn) => {
  switch (btn) {
    case "w":
      return new Audio("sounds/crash.mp3");
      break;
    case "a":
      return new Audio("sounds/kick-bass.mp3");
      break;
    case "s":
      return new Audio("sounds/snare.mp3");
      break;
    case "d":
      return new Audio("sounds/tom-1.mp3");
      break;
    case "j":
      return new Audio("sounds/tom-2.mp3");
      break;
    case "k":
      return new Audio("sounds/tom-3.mp3");
      break;
    case "l":
      return new Audio("sounds/tom-4.mp3");
      break;
  }
};

function btnAnimation(currentKey) {
  const activeBtn = document.querySelector(`.${currentKey}`);
  activeBtn.classList.toggle("pressed");

  setTimeout(() => {
    activeBtn.classList.toggle("pressed");
  }, 300);
}
