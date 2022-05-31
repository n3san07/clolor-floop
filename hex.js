let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", " B", "C", "D", "E", "F"];

let btn = document.querySelector("#btn");
let color = document.querySelector(".color");

btn.addEventListener("click", function () {
  let hexC = "#";

  for (let i = 0; i < 6; i++) {
    hexC += hex[getRandom()];

    color.textContent = hexC;
    document.body.style.backgroundColor = hexC;
  }
});

function getRandom() {
  return Math.floor(Math.random() * hex.length);
}

/*
let hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", " B", "C", "D", "E", "F"];

let btn = document.querySelector("#btn");
let color = document.querySelector(".color");

function getRandom() {
  return Math.floor(Math.random() * hex.length);
}

btn.addEventListener("click", function () {
  let hexColor = "#";

  for (let i = 0; i < 6; i++) {

    hexColor += hex[getRandom()];
    console.log(getRandom())

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
  }
});


*/
