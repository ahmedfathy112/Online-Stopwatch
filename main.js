document.addEventListener("DOMContentLoaded", function () {
  let startTime = 0;
  let elapsedTime = 0;
  let timerInterval;
  let running = false;

  const display = document.getElementById("display");
  const startStopButton = document.getElementById("startStopButton");
  const resetButton = document.getElementById("resetButton");

  function updateTime() {
    elapsedTime = Date.now() - startTime;
    const time = new Date(elapsedTime);
    const minutes = String(time.getUTCMinutes()).padStart(2, "0");
    const seconds = String(time.getUTCSeconds()).padStart(2, "0");
    const milliseconds = String(
      Math.floor(time.getUTCMilliseconds() / 10)
    ).padStart(2, "0");
    display.textContent = `${minutes}:${seconds}:${milliseconds}`;
  }

  function startStop() {
    if (running) {
      clearInterval(timerInterval);
      startStopButton.textContent = "Start";
    } else {
      startTime = Date.now() - elapsedTime;
      timerInterval = setInterval(updateTime, 10);
      startStopButton.textContent = "Pause";
    }
    running = !running;
  }

  function reset() {
    clearInterval(timerInterval);
    running = false;
    elapsedTime = 0;
    display.textContent = "00:00:00";
    startStopButton.textContent = "Start";
  }

  startStopButton.addEventListener("click", startStop);
  resetButton.addEventListener("click", reset);
});
