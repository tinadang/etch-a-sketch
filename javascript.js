
function addNewGrid() {
    const squaresPerSide = prompt("How many squares per side for your new grid?");

    deleteCurrentGrid();
    // addSquares(squaresPerSide);
}

function deleteCurrentGrid() {
    squares.forEach((square) => container.removeChild(square));
}

//Insert nth number of squares into the container
function addSquares(squaresPerSide) {
    for (let i = 0; i < Math.pow(squaresPerSide, 2); i++) {
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
let squaresPerSide = 16;
addSquares(squaresPerSide);

const adjustSquaresButton = document.querySelector("button");
adjustSquaresButton.addEventListener("click", addNewGrid);

//Apply a hover action to all squares
const squares = document.querySelectorAll(".square");
squares.forEach(square => square.addEventListener("mouseenter", applyHover));

