const input = document.querySelector(".form");
const container = document.querySelector(".grid-container");
// console.log(container)
// const cells = container.querySelectorAll(".cell");
// console.log(cells)
const reset = document.querySelector("#reset")
const erase = document.querySelector("#erase")

document.addEventListener('DOMContentLoaded', () => {
    defaultGrid();
    addColor();
})
    
function defaultGrid() {
    const cellNumber = 16
    generateGrid(cellNumber)
}

input.addEventListener('submit', (event) => {
    updateGrid(event);
    addColor();
})
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

// document.addEventListener('DOMContentLoaded',() => {
//     const cells = container.querySelectorAll(".cell");
//     cells.forEach(cell => {
//         cell.addEventListener('mouseover', () => {
//             cell.style.backgroundColor = "blue"
//         })
//     })
// })
// const cells = container.querySelectorAll(".cell");
function addColor() {
    const cells = container.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "blue"
        })
    })
}

reset.addEventListener('click', resetGrid)
function resetGrid() {
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        
            cell.style.backgroundColor = "";
        });
    
}

function removeColor() {
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "";
        });
    });
}
erase.addEventListener('click', removeColor)

