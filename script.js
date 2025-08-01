const vibeText = document.getElementById('vibe-text');
const changeVibeBtn = document.getElementById('change-vibe-btn');
const body = document.querySelector('body');

let intervalId;
let speed = 1000;
const speeds = {
  '1.5x': 1000 / 1.5,
  '1.75x': 1000 / 1.75,
  '2x': 1000 / 2,
};
let currentSpeedIndex = 0;
const speedMultipliers = Object.keys(speeds);

const getRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const changeColor = () => {
  vibeText.style.color = getRandomColor();
};

const startColorChange = () => {
  intervalId = setInterval(changeColor, speed);
};

const stopColorChange = () => {
  clearInterval(intervalId);
};

changeVibeBtn.addEventListener('click', () => {
  stopColorChange();
  if (currentSpeedIndex < speedMultipliers.length - 1) {
    currentSpeedIndex++;
    const nextSpeed = speedMultipliers[currentSpeedIndex];
    speed = speeds[nextSpeed];
    changeVibeBtn.textContent = `Change my lowkey vibe to ${speedMultipliers[currentSpeedIndex]}`;
  } else {
    currentSpeedIndex++;
    changeVibeBtn.style.display = 'none';
    body.style.backgroundColor = 'blue';
  }
  startColorChange();
});

changeVibeBtn.textContent = `Change my lowkey vibe to ${speedMultipliers[0]}`;
startColorChange();