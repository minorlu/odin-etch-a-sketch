const container = document.querySelector(".container");
const r = document.querySelector(":root");
const btn = document.querySelector("#set-size-btn");
let styles = getComputedStyle(r);
let gridRowSize = styles.getPropertyValue("--grid-row-size");

function DrawGrid(size) {
    while (container.firstChild)
        container.removeChild(container.firstChild);

    for (let i = 0; i < gridRowSize; i++) {
        const gridRow = document.createElement("div");
        gridRow.classList.add("grid-row");

        for (let j = 0; j < gridRowSize; j++) {
            const gridSquare = document.createElement("div");
            gridSquare.classList.add("grid-square");
            gridRow.appendChild(gridSquare);
        }

        container.appendChild(gridRow);
    }
}

function GetRandomColor() {
    let letters = "0123456789abcdf";
    let color = "#";

    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }

    return color;
}

DrawGrid(gridRowSize);

container.addEventListener("mouseover", (e) => {
    let style = window.getComputedStyle(e.target);
    let currentColor = style.getPropertyValue("background-color");
    if (style.getPropertyValue("background-color") == "rgb(255, 255, 255)") {
        e.target.style.backgroundColor = GetRandomColor();
    }
});

btn.addEventListener("click", (e) => {
    gridRowSize = prompt("Input grid size:", "16");
    r.style.setProperty("--grid-row-size", gridRowSize);
    DrawGrid(gridRowSize);
});