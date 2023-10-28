var minutes = 0;
var seconds = 0;
var miliseconds = 0;

var getmin = document.getElementById("min");
var getsec = document.getElementById("sec");
var getmsec = document.getElementById("msec");

var interval;

function handleStart() {
  document.getElementById("startBtn").disabled = true;
  interval = setInterval(function () {
    miliseconds++;
    getmsec.innerHTML = miliseconds;

    if (miliseconds >= 100) {
      seconds++;
      getsec.innerHTML = seconds;
      miliseconds = 0;
    } else if (seconds >= 60) {
      minutes++;
      getmin.innerHTML = minutes;
      seconds = 0;
    }
  }, 10);
}

function handleStop() {
  clearInterval(interval);
  document.getElementById("startBtn").disabled = false;
}

function handleReset() {
  getmin.innerHTML = 0;
  getsec.innerHTML = 0;
  getmsec.innerHTML = 0;
}
