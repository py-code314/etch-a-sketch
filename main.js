const input = document.querySelector(".form");
const container = document.querySelector(".grid-container");
const reset = document.querySelector("#reset");
const clear = document.querySelector("#clear");
const random = document.querySelector("#random");
const multiColor = document.querySelector("#multicolor");
const shades = document.querySelector("#chiaroscuro");
const colorPicker = document.querySelector("#colorPicker");
const colorShade = document.querySelector("#shade");
// console.log(colorPicker)
const hexCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
const hexOpacityValues = ["1a", "33", "4d", "66", "80", "99", "b3", "cc", "e6", "ff"]


function generateGrid(noOfCells) {
    let cellWidth = (container.offsetWidth - 10) / noOfCells;
    let cellHeight = (container.offsetHeight - 10) / noOfCells;
    let gridDimensions = noOfCells * noOfCells;

    for (let i = 0; i < gridDimensions; i++) {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.style.width = `${cellWidth}px`;
        cell.style.height = `${cellHeight}px`;

        container.appendChild(cell);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    defaultGrid();
    let color = "#ffaa00"
    addColor(color);
});
function defaultGrid() {
    const noOfCells = 16;
    generateGrid(noOfCells);
}

input.addEventListener("submit", (event) => {
    updateGrid(event);
});
function updateGrid(event) {
    event.preventDefault();

    let noOfCells = +event.target[0].value;
    container.innerHTML = "";
    generateGrid(noOfCells);
}


colorPicker.addEventListener("input", () => {
    let color = colorPicker.value;
    console.log(color)
    addColor(color);
});
function addColor(color) {
    // color = generateRandomColor()
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = color;
        });
    });
}


multiColor.addEventListener("click", addMultiColor);
function addMultiColor() {
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            let color = generateRandomColor();
            cell.style.backgroundColor = color;
        });
    });
}

reset.addEventListener("click", resetGrid);
function resetGrid() {
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.style.backgroundColor = "";
    });
}

clear.addEventListener("click", removeColor);
function removeColor() {
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "";
        });
    });
}

random.addEventListener("click", () => {
    randomColor = generateRandomColor();
    addColor(randomColor);
});
function generateRandomColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        const randomPosition = Math.floor(Math.random() * hexCharacters.length);
        hexColor += hexCharacters[randomPosition];
    }
    return hexColor;
}


colorShade.addEventListener("input", () => {
    const hexColor = colorShade.value;
    const newColors = increaseOpacity(hexColor);
    lightToDarkColors(newColors)
});
function increaseOpacity(hexColor) {
    let newColors = [];
    for (let i = 0; i < hexOpacityValues.length; i++) {
        let currentOpacity = hexOpacityValues[i]
        let newColor = hexColor + currentOpacity
        newColors.push(newColor)
        
    }
    console.log(newColors); 
    return newColors
}
function lightToDarkColors(newColors) {
    const cells = container.querySelectorAll(".cell");
    let colorIndex = 0;
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = newColors[colorIndex];
            colorIndex = (colorIndex + 1) % newColors.length;
            console.log(colorIndex)
        });
    });    
}


