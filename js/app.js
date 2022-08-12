// Grab elements from DOM
const containerEl = document.querySelector(".grid-container");

let squaresPerRow, gridSize;

// Resizes the grid depending on the squares per row that the user wants
function resizeGrid(squaresAmount) {
  squaresPerRow = parseInt(squaresAmount);

  gridSize = squaresPerRow ** 2;

  // Resize grid according to the squares per row
  containerEl.style.gridTemplateColumns = `repeat(${squaresPerRow}, 1fr)`;
  containerEl.style.gridTemplateAreas = `repeat(${squaresPerRow}, 1fr)`;
}

function populateGrid() {
  for (let i = 0; i < gridSize; i++) {
    // Create the square
    const gridSquareEl = document.createElement("div");
    gridSquareEl.classList.add("grid-square");

    // When hovering, change color to black
    gridSquareEl.addEventListener("mouseover", (e) => {
      e.target.style.backgroundColor = "black";
    });
    containerEl.appendChild(gridSquareEl);
  }
}

resizeGrid(16);
populateGrid();
