//Set how full time to countdown, default 7 days
let daysCount = 7;
let hoursCount = 0;
let minutesCount = 0;
let secoundsCount = 0;

const timeToCount = (daysCount * 24 * 60 * 60 * 1000) + (hoursCount * 60 * 60 * 1000) +
  (minutesCount * 60 * 1000) + (secoundsCount * 24 * 60 * 60 * 1000);

// Day that start counting days
let firstDay = new Date("March 25, 2022 12:00:00").getTime();

// Set the date we're counting down to
let countDownDate = firstDay + timeToCount;

// Update the count down every 1 second
const countToDate = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in counter
  app.counter.innerHTML = ((days) ? days + "d " : '') + ((hours) ? hours + "h " : '') +
    ((minutes) ? minutes + "m" : '');

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(countToDate);
    app.counter.innerHTML = "Sorry, the sale is over";
  }
  // Hide mark on every even number of seconds
  else {
    const dot = document.getElementById('dot');
    (seconds % 2 !== 0) ? dot.style.opacity = "0": dot.style.opacity = "1";
  }
}, 1000);