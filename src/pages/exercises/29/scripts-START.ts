let countdown;
const timerDisplay = document.querySelector(".display__time-left");
const endTime = document.querySelector(".display__end-time");
const buttons = document.querySelectorAll("[data-time]");
console.log({ endTime });
document.customForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const mins = this.minutes.value * 60;
  console.log({ mins });
  this.reset();
  timer(mins);
});
function timer(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds: number = seconds % 60;

  if (minutes < 0 || remainderSeconds < 0) {
    minutes = 0;
    remainderSeconds = 0;
  }
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  endTime.textContent = `Be Back At ${hour}:${
    minutes < 10 ? "0" : ""
  }${minutes}`;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  console.log(seconds);
  timer(seconds);
}

buttons.forEach((button) => button.addEventListener("click", startTimer));
