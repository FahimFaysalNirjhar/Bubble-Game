const palateBottom = document.querySelector(".palate-bottom");
const timerValue = document.getElementById("timer");
const scoreValue = document.getElementById("score");
const hit = document.getElementById("hit");

palateBottom.style.width = "100%";
palateBottom.style.height = "calc(100% - 100px)";
palateBottom.style.padding = "10px";
palateBottom.style.display = "flex";
palateBottom.style.flexWrap = "wrap";
palateBottom.style.justifyContent = "center";
palateBottom.style.alignItems = "center";
palateBottom.style.gap = "5px";

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
      clearInterval(timeInterval);
      palateBottom.innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
};
const updateHit = () => {
  hitNum = Math.floor(Math.random() * 10);
  hit.textContent = hitNum;
};

updateHit();
timer();

const updateScore = () => {
  score += 10;
  scoreValue.textContent = score;
};

const decreaseScore = () => {
  if (score > 0) {
    score -= 10;
    scoreValue.textContent = score;
  }
};

palateBottom.addEventListener("click", (event) => {
  console.log(event.target.textContent);
  let number = Number(event.target.textContent);
  if (hitNum === number) {
    updateScore();
    updateHit();
    createBubble();
  } else {
    decreaseScore();
  }
});
