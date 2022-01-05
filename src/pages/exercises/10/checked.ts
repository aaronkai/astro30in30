let checkboxes: NodeList = document.querySelectorAll(
  ".inbox input[type='checkbox']"
);

let lastChecked: HTMLInputElement;

function clickHandler(e: MouseEvent) {
  //check if shift key was depressed on click
  // and check if they are checking it
  let inBetween = false;
  if (e.shiftKey && this.checked) {
    checkboxes.forEach((box: HTMLInputElement) => {
      if (box === this || box === lastChecked) {
        inBetween = !inBetween;
      }

      if (inBetween) {
        box.checked = true;
      }
    });
  }

  lastChecked = this;
}

checkboxes.forEach((box) => {
  box.addEventListener("click", clickHandler);
});
