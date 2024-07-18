// Global variables
const input = document.querySelector(".form");
const container = document.querySelector(".grid-container");

const colorPicker = document.querySelector("#colorPicker");
const random = document.querySelector("#random");
const multiColor = document.querySelector("#multicolor");
const shades = document.querySelector("#chiaroscuro");
const colorShade = document.querySelector("#shade");
const clear = document.querySelector("#clear");
const reset = document.querySelector("#reset");

const hexCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const hexOpacityValues = ["1a", "33", "4d", "66", "80", "99", "b3", "cc", "e6", "ff"]


// Initialize the grid
document.addEventListener("DOMContentLoaded", () => {
    initializeDefaultGrid();
    let color = "#ffaa00"
    addColor(color);
});

// Initializes the default grid with a minimum of 16x16
function initializeDefaultGrid() {
    const initialGridSize = 16;
    createGrid(initialGridSize);
}

// Creates a grid with the user given number of cells
function createGrid(cellsPerSide) {
    const cellSize = (container.offsetWidth - 10) / cellsPerSide;

    for (let i = 0; i < cellsPerSide ** 2; i++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        cell.style.cssText = `width: ${cellSize}px; height: ${cellSize}px;`;
        container.appendChild(cell);
    }
}


// Change the grid size
input.addEventListener("submit", (event) => {
    updateGrid(event);
    let color = "#ffaa00";
    addColor(color);
});

// Updates the grid with the new grid size
function updateGrid(event) {
    event.preventDefault();

    const gridSize = +event.target.elements[0].value;
    container.innerHTML = "";
    createGrid(gridSize);
}


// Change the color of the cells to the user selected color
colorPicker.addEventListener("input", () => {
    let color = colorPicker.value;
    addColor(color);
});

// Adds user-selected color to the cells
function addColor(newColor) {
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = newColor;
        });
    });
}


// Change the color of the cells to a random color
random.addEventListener("click", () => {
    randomColor = generateRandomColor();
    addColor(randomColor);
});

// Adds a random color to the cells
function generateRandomColor() {
    let color = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * hexCharacters.length);
        color += hexCharacters[randomIndex];
    }
    return `#${color}`;
}


// Change the color of each consecutive cell to a different color
multiColor.addEventListener("click", addMultiColor);

// Adds random colors to the cells
function addMultiColor() {
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            let randomColor = generateRandomColor();
            cell.style.backgroundColor = randomColor;
        });
    });
}


// Change the opacity of a color
colorShade.addEventListener("input", () => {
    const color = colorShade.value;
    const opaqueColors = generateOpacityColors(color);
    changeColorsLightToDark(opaqueColors);
});

// Generates an array of progressively more opaque color.
function generateOpacityColors(color) {
  return hexOpacityValues.map(opacity => `${color}${opacity}`);
}

// Add the selected color to the cells from light to dark
function changeColorsLightToDark(opaqueColors) {
    const cells = container.querySelectorAll(".cell");
    let colorIndex = 0;

    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = opaqueColors[colorIndex];
            colorIndex = (colorIndex + 1) % opaqueColors.length;
        });
    });
}


// Clear the color of the cells
clear.addEventListener("click", clearColor);

// Clears the color of the cells
function clearColor() {
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "";
        });
    });
}


// Reset the grid
reset.addEventListener("click", resetGrid);

// Resets the grid
function resetGrid() {
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "";
    });
}









