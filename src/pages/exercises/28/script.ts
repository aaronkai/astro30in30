const speed: HTMLDivElement = document.querySelector(".speed");
const bar: HTMLDivElement = speed.querySelector(".speed-bar");
const video: HTMLVideoElement = document.querySelector(".flex");

speed.addEventListener("mousemove", function (e) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + "%";
  console.log(height);
  bar.style.height = height;
  const playbackRate = percent * (max - min) + min;
  bar.textContent = playbackRate.toFixed(2) + "x";
  video.playbackRate = playbackRate;
});
