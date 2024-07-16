const input = document.querySelector(".form");
const container = document.querySelector(".grid-container");

document.addEventListener('DOMContentLoaded', defaultGrid)
function defaultGrid() {
    const cellNumber = 16
    generateGrid(cellNumber)
}

input.addEventListener('submit', updateGrid)
function updateGrid(event) {
    event.preventDefault()

    let cellNumber = +(event.target[0].value)
    container.innerHTML = ""
    generateGrid(cellNumber)
}

function generateGrid(cellNumber) {
    let cellWidth = (container.offsetWidth - 10) / cellNumber;
    let cellHeight = (container.offsetHeight - 10) / cellNumber;
    let gridDimensions = cellNumber * cellNumber;

    for (let i = 0; i < gridDimensions; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;

        container.appendChild(cell);
    }
}

const cells = document.querySelector(".grid-container")
cells.addEventListener('mouseover', addColor)
function addColor(event) {
    const cell = event.target
    cell.style.backgroundColor = 'blue'
}
