
const container = document.querySelector(".container");

addSquares(256);

function addSquares(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.className = "square";
        container.appendChild(newSquare);
    }
}
