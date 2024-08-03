const start = document.querySelector(".start");
const reset = document.querySelector(".reset");
const timer = document.querySelector(".timer");
const resume = document.querySelector(".resume");
const centiseconds = document.querySelector(".centiseconds");
const seconds = document.querySelector(".seconds");
const minutes = document.querySelector(".minutes");

let interval;
let active = false;

const timerStart = () => {
  interval = setInterval(() => {
    if (centiseconds > 0) {
    }
    centiseconds.innerHTML++;
    if (centiseconds.innerHTML == 60) {
      seconds.innerHTML++;
      centiseconds.innerHTML = 0;
    }
    if (seconds.innerHTML == 60) {
      minutes.innerHTML++;
      seconds.innerHTML = 0;
    }
  }, 1);
  start.innerHTML = "Pause";
  active = true;
};

const timerPause = () => {
  clearInterval(interval);
  active = false;
  start.innerHTML = "Resume";
};

const timerReset = () => {
  centiseconds.innerHTML = "00";
  seconds.innerHTML = "00";
  minutes.innerHTML = "00";
  if (!active) {
    start.innerHTML = "Start";
  }
};

start.addEventListener("click", () => {
  !active ? timerStart() : timerPause();
});

reset.addEventListener("click", () => timerReset());
