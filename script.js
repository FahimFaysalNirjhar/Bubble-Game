const palateBottom = document.querySelector(".palate-bottom");
const timerValue = document.getElementById("timer");

let hitNum = 0;
let score = 0;

const createBubble = () => {
  let container = "";
  for (let i = 0; i <= 206; i++) {
    hitNum = Math.floor(Math.random() * 10);
    container += `<div class="round">${hitNum}</div>`;
  }
  palateBottom.innerHTML = container;
};

createBubble();

let time = 60;
const timer = () => {
  const timeInterval = setInterval(() => {
    if (time > 0) {
      time--;
      timerValue.textContent = time;
    } else {
      closeInterval(timeInterval);
    }
  }, 1000);
};

timer();

const updateScore = () => {
  score += 10;
};
updateScore();
