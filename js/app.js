// Grab elements from DOM
const containerEl = document.querySelector(".grid-container");
const resetBtn = document.querySelector(".reset-btn");

let squaresPerRow, gridSize;

// Resizes the grid depending on the squares per row that the user wants
function resizeGrid(squaresAmount) {
  squaresPerRow = parseInt(squaresAmount);

  gridSize = squaresPerRow ** 2;

  // Resize grid according to the squares per row
  containerEl.style.gridTemplateColumns = `repeat(${squaresPerRow}, 1fr)`;
  containerEl.style.gridTemplateAreas = `repeat(${squaresPerRow}, 1fr)`;
}

// Populate the grid with squares that color themselves
function populateGrid() {
  for (let i = 0; i < gridSize; i++) {
    // Create the square
    const gridSquareEl = document.createElement("div");
    gridSquareEl.classList.add("grid-square");

    // When clicking, change color to black
    gridSquareEl.addEventListener("mouseover", colorSquare);
    containerEl.appendChild(gridSquareEl);
  }
}

// Resets, recreates and populates the grid with the specified size
function resetGrid() {
  // Empty the grid
  containerEl.textContent = "";

  // Ask for the size and repopulate
  const size = prompt("How many squares per row?");
  resizeGrid(size);
  populateGrid();
}

// When a square is clicked, colour it with the current colour
function colorSquare(e) {
  e.target.style.backgroundColor = "black";
}
resetBtn.addEventListener("click", resetGrid);
resizeGrid(16);
populateGrid();
