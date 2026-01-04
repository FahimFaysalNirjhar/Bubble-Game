const palateBottom = document.querySelector(".palate-bottom");
let hitNum = 0;
const createBubble = () => {
  let container = "";
  for (let i = 0; i <= 206; i++) {
    hitNum = Math.floor(Math.random() * 10);
    container += `<div class="round">${hitNum}</div>`;
  }
  palateBottom.innerHTML = container;
};
createBubble();
