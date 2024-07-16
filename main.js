const input = document.querySelector(".form");
const container = document.querySelector(".grid-container");
const reset = document.querySelector("#reset")
const erase = document.querySelector("#erase")
const random = document.querySelector("#random")
const multiColor = document.querySelector("#multicolor");

document.addEventListener('DOMContentLoaded', () => {
    defaultGrid();
    // addColor();
})
    
function defaultGrid() {
    const cellNumber = 16
    generateGrid(cellNumber)
}

input.addEventListener('submit', (event) => {
    updateGrid(event);
    // addColor();
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

function addColor(color) {
    // color = generateRandomColor()
    const cells = container.querySelectorAll(".cell");
    cells.forEach(cell => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = color
        })
    })
}

function addMultiColor() {
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            let color = generateRandomColor()
            cell.style.backgroundColor = color;
        });
    });
}
multiColor.addEventListener("click", addMultiColor);

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

const colorPicker = document.querySelector("#colorPicker")
colorPicker.addEventListener('change', () => {
    let color = colorPicker.value
    addColor(color)
})

const hexCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F']
function generateRandomColor() {
    let hexColor = "#"
    for (let i = 0; i < 6; i++) {
        const randomPosition = Math.floor(Math.random() * hexCharacters.length)
        hexColor += hexCharacters[randomPosition]
    }
    return hexColor
}
random.addEventListener('click', () => {
    randomColor = generateRandomColor()
    addColor(randomColor)
})

