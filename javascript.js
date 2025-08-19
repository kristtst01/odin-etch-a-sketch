const content = document.querySelector(".container");
const resizeGridBtn = document.querySelector("#resizeGrid");
let gridSize = 16;

function createGrid() {
  content.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const pixel = document.createElement("div");
    pixel.className = "pixel";
    pixel.style.width = `${100 / gridSize}%`;
    pixel.style.height = `${100 / gridSize}%`;
    content.appendChild(pixel);
  }
}

content.addEventListener("mouseover", (event) => {
  let target = event.target;
  if (target.classList.contains("pixel")) {
    target.classList.add("colored");
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
