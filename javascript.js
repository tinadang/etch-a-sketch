
//Insert nth number of squares into the container
function addSquares(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        const newSquare = document.createElement("div");
        newSquare.className = "square";
        container.appendChild(newSquare);
    }
};

//Change element's background color on hover
function applyHover(event) {
    event.target.style.backgroundColor = "lightgray";
}

//Add nth number of squares to container
const container = document.querySelector(".container");
addSquares(256);

//Apply a hover action to all squares
const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseenter", applyHover));

