function updateCountdown() {
  let today = new Date();
  let birthday = new Date(2025, 9, 17);

  let timeDiff = birthday - today;

  if (timeDiff <= 0) {
    document.getElementById("countdown").textContent = "День народження";
    return;
  }

  let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
  let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

  document.getElementById(
    "countdown"
  ).textContent = `До дня народження залишилось: ${days} днів ${hours} годин ${minutes} хвилин ${seconds} секунд.`;
}

setInterval(updateCountdown, 1000);
