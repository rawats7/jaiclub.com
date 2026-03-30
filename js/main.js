let time = 299;

setInterval(() => {
  let m = Math.floor(time / 60);
  let s = time % 60;

  document.getElementById("timer").innerHTML =
    `${m}:${s < 10 ? '0' + s : s}`;

  time--;

  if (time < 0) {
    time = 299;
  }
}, 1000);