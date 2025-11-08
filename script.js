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

DrawGrid(gridRowSize);

container.addEventListener("mouseover", (e) => {
    e.target.classList.add("hovered-square");
});

btn.addEventListener("click", (e) => {
    gridRowSize = prompt("Input grid size:", "16");
    r.style.setProperty("--grid-row-size", gridRowSize);
    DrawGrid(gridRowSize);
});