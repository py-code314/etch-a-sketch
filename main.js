const input = document.querySelector(".form");
const container = document.querySelector(".grid-container");
const reset = document.querySelector("#reset");
const erase = document.querySelector("#erase");
const random = document.querySelector("#random");
const multiColor = document.querySelector("#multicolor");
const shades = document.querySelector("#chiaroscuro");

document.addEventListener("DOMContentLoaded", () => {
    defaultGrid();
    // addColor();
});

function defaultGrid() {
    const noOfCells = 16;
    generateGrid(noOfCells);
}

input.addEventListener("submit", (event) => {
    updateGrid(event);
    // addColor();
});
function updateGrid(event) {
    event.preventDefault();

    let noOfCells = +event.target[0].value;
    container.innerHTML = "";
    generateGrid(noOfCells);
}

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

function addColor(color) {
    // color = generateRandomColor()
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = color;
        });
    });
}

function addMultiColor() {
    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            let color = generateRandomColor();
            cell.style.backgroundColor = color;
        });
    });
}
multiColor.addEventListener("click", addMultiColor);

reset.addEventListener("click", resetGrid);
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
erase.addEventListener("click", removeColor);

const colorPicker = document.querySelector("#colorPicker");
colorPicker.addEventListener("change", () => {
    let color = colorPicker.value;
    addColor(color);
});

const hexCharacters = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
];
function generateRandomColor() {
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        const randomPosition = Math.floor(Math.random() * hexCharacters.length);
        hexColor += hexCharacters[randomPosition];
    }
    return hexColor;
}
random.addEventListener("click", () => {
    randomColor = generateRandomColor();
    addColor(randomColor);
});

const colorShade = document.querySelector("#shade");
colorShade.addEventListener("change", () => {
    const hexColor = colorShade.value;
    console.log(hexColor);
    const rgbColor = getRgbValues(hexColor);
    increaseColorShade(rgbColor);
    // addColor(shadeColor)
});

function getRgbValues(hexColor) {
    let rgbColor = hexColor.slice(1);

    const r = parseInt(rgbColor.substring(0, 2), 16);
    const g = parseInt(rgbColor.substring(2, 4), 16);
    const b = parseInt(rgbColor.substring(4, 6), 16);

    rgbColor = `${r}, ${g}, ${b}`;
    return rgbColor;
}
function increaseColorShade(rgbColor) {
    console.log(rgbColor);
    let currentOpacity = 0;

    const cells = container.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", () => {
            currentOpacity += 10;
            if (currentOpacity <= 100) {
                let part = rgbColor.slice(0, -1);
                let newColor = `${part}, ${currentOpacity}%`;
                console.log(newColor);
                cell.style.backgroundColor = `rgba(${newColor})`;
            }
            
        });
    });
}
