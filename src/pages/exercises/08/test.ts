let x: number = 8;
console.log(x);

let canvas: HTMLCanvasElement = document.querySelector("canvas#draw");
const ctx = canvas.getContext("2d");
let isDrawing = false;
let lastX = 0;
let lastY = 0;
let hue = 0;
let lineDirection = true;

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = "#BADA55";
ctx.lineCap = "round";
ctx.lineJoin = "round";

function draw(e: MouseEvent) {
  if (!isDrawing) return; //stop the function when not drawing
  ctx.strokeStyle = `hsl(${hue}, 100%, 50% )`;

  ctx.beginPath();
  ctx.moveTo(lastX, lastY);
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue++;
  if (hue > 360) {
    hue = 0;
  }
  ctx.lineWidth++;
}

canvas.addEventListener("mousemove", draw);
canvas.addEventListener("mousedown", (e) => {
  isDrawing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
  ctx.lineWidth = 0;
});
canvas.addEventListener("mouseup", () => {
  isDrawing = false;
  console.log(ctx.lineWidth);
  ctx.lineWidth = 1;
});
// canvas.addEventListener("mouseout", () => (isDrawing = false));

console.log({ canvas });
