var interval;

function digialClock() {
  var currentDate = new Date();
  // Get the hours and minutes from the date object.
  var hours = currentDate.getHours();
  var minutes = currentDate.getMinutes();
  var seconds = currentDate.getSeconds();
  var data = {
    hours,
    minutes,
    seconds,
  };
  console.log(data, "data---");

  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
}

function startClock() {
  interval = setInterval(digialClock, 1000);
}

startClock();

function darkMode() {
  console.log("darkmode");
  var element = document.body;
  element.classList.toggle("dark-mode");
}
