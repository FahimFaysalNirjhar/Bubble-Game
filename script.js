const palateBottom = document.querySelector(".palate-bottom");
const timerValue = document.getElementById("timer");
const scoreValue = document.getElementById("score");

let hitNum = 0;
let score = 0;

const createBubble = () => {
  let container = "";
  for (let i = 0; i <= 206; i++) {
    let num = Math.floor(Math.random() * 10);
    container += `<div class="round">${num}</div>`;
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
  scoreValue.textContent = score;
};
palateBottom.addEventListener("click", (event) => {
  console.log(event.target.textContent);
  let number = Number(event.target.textContent);
  if (hitNum === number) {
    updateScore();
  }
});
