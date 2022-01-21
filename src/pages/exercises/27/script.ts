const slider: HTMLDivElement = document.querySelector(".items");
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener("mousedown", (e: MouseEvent) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  slider.classList.add("active");
});
slider.addEventListener("mouseleave", () => {
  slider.classList.remove("active");
  isDown = false;
});
slider.addEventListener("mouseup", () => {
  slider.classList.remove("active");

  isDown = false;
});
slider.addEventListener("mousemove", (e: MouseEvent) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  console.log({ walk });
  slider.scrollLeft = scrollLeft - walk;
});
