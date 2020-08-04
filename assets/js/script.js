let interval = 0;
let currentTimer = 0;
let lastUpdateTime = new Date().getTime();

const stopwatch = document.querySelector('.stopwatch');

const minutes = document.querySelector('.stopwatch__minutes');
const seconds = document.querySelector('.stopwatch__seconds');
const centiseconds = document.querySelector('.stopwatch__centiseconds');

const startStopBtn = document.querySelector('.stopwatch__start');
const resetBtn = document.querySelector('.stopwatch__reset');

startStopBtn.addEventListener('click', startStopTimer);
resetBtn.addEventListener('click', resetTimer);

function pad(number) {
  return (`00${number}`).substr(-2);
}

function updateTimer() {
  let now = new Date().getTime();
  let dateTime = now - lastUpdateTime;

  currentTimer += dateTime;

  let time = new Date(currentTimer);

  minutes.innerHTML = pad(time.getMinutes());
  seconds.innerHTML = pad(time.getSeconds());
  centiseconds.innerHTML = pad(Math.floor(time.getMilliseconds() / 10));

  lastUpdateTime = now;
}

function startStopTimer() {
  if (!interval) {
    lastUpdateTime = new Date().getTime();
    interval = setInterval(updateTimer, 1);

    startStopBtn.innerHTML = 'Stop';
    startStopBtn.classList.add('stopwatch__start--danger');
  } else {
    stopTimer();
  }
}

function stopTimer() {
  clearInterval(interval);
  interval = 0;

  startStopBtn.innerHTML = 'Start';
  startStopBtn.classList.remove('stopwatch__start--danger');
}

function resetTimer() {
  stopTimer();

  currentTimer = 0;

  minutes.innerHTML = pad(0);
  seconds.innerHTML = pad(0);
  centiseconds.innerHTML = pad(0);
}
