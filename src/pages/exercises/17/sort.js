const bands = [
  "The Plot in You",
  "The Devil Wears Prada",
  "Pierce the Veil",
  "Norma Jean",
  "The Bled",
  "Say Anything",
  "The Midway State",
  "We Came as Romans",
  "Counterparts",
  "Oh, Sleeper",
  "A Skylit Drive",
  "Anywhere But Here",
  "An Old Dog",
];

const answer = bands.sort((firstEl, secondEl) => {
  const re = /A\b|The|An\b/;

  if (firstEl.match(re)) {
    let tempAr = firstEl.split(" ");
    tempAr.shift();
    firstEl = tempAr.join(" ");
  }
  if (secondEl.match(re)) {
    let tempAr = secondEl.split(" ");
    tempAr.shift();
    secondEl = tempAr.join(" ");
  }

  if (firstEl < secondEl) {
    return -1;
  } else {
    return 1;
  }
});

const bandList = document.querySelector("#bands");
answer.forEach((band) => {
  const li = document.createElement("li");
  li.appendChild(document.createTextNode(`${band}`));
  bandList.appendChild(li);
});
