let countDownDate = new Date("Apr 30, 2024 00:00:00").getTime();
let x = setInterval(function () {
  let now = new Date().getTime();
  let timeLeft = countDownDate - now;

  let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("days").innerHTML = days;
}, 1000);
