// Grab elements from DOM
const containerEl = document.querySelector(".grid-container");

const squareAmount = 3;

containerEl.style.gridTemplateColumns = `repeat(${squareAmount}, 1fr)`;
containerEl.style.gridTemplateAreas = `repeat(${squareAmount}, 1fr)`;

for (let i = 0; i < squareAmount * squareAmount; i++) {
  // Create the square
  const gridSquareEl = document.createElement("div");
  gridSquareEl.classList.add("grid-square");

  containerEl.appendChild(gridSquareEl);
}
