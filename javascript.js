const content = document.querySelector(".container");
const resizeGridBtn = document.querySelector("#resizeGrid");
const resetGridBtn = document.querySelector("#resetGrid");
let gridSize = 16;

document.addEventListener("DOMContentLoaded", createGrid);

function createGrid() {
  content.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.backgroundColor = "lightgray";
    pixel.style.width = `${100 / gridSize}%`;
    pixel.style.height = `${100 / gridSize}%`;
    content.appendChild(pixel);
  }
}

function getRandomColor() {
  const r = Math.floor(Math.random() * 256); // 0–255
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

content.addEventListener("mouseover", (event) => {
  let target = event.target;
  if (
    target.classList.contains("pixel") &&
    target.style.backgroundColor === "lightgray"
  ) {
    target.style.backgroundColor = getRandomColor();
    target.style.opacity = `${0.1}`;
  } else {
    target.style.opacity = `${parseFloat(target.style.opacity) + 0.1}`;
  }
});

resizeGridBtn.addEventListener("click", resizeGrid);

function resizeGrid() {
  let newSize = prompt("What size grid would you like? 0-150");
  if (newSize > 0 && newSize <= 150) {
    gridSize = newSize;
  }
  createGrid();
}

resetGridBtn.addEventListener("click", createGrid);
