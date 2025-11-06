const container = document.querySelector(".container");

for (let i = 0; i < 256; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add("grid-square");

    container.appendChild(gridSquare);
}

container.addEventListener("mouseover", (e) => {
    e.target.classList.add("hovered-square");
});
