
function addNewGrid() {
    let squaresPerSide = +prompt("How many squares per side for your new grid?");

    while (squaresPerSide > 100) {
        squaresPerSide = +prompt("Maximum squares accepted is 100. Please enter another number.");
    }

    deleteCurrentGrid();
    addSquares(squaresPerSide);
}

function deleteCurrentGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => container.removeChild(square));
}

//Insert nth number of squares into the container
function addSquares(squaresPerSide) {
    const pxSize = container.clientWidth / squaresPerSide;
    
    for (let i = 0; i < Math.pow(squaresPerSide, 2); i++) {
        const newSquare = document.createElement("div");
        newSquare.className = "square";

        newSquare.style.width = pxSize + "px";
        newSquare.style.height = pxSize + "px";

        newSquare.addEventListener("mouseenter", applyHover)
        container.appendChild(newSquare);
    }
};

//Change element's background color on hover
function applyHover(event) {
    event.target.style.backgroundColor = "#a9bd93";
}


//Add nth number of squares to container
const container = document.querySelector(".container");
let squaresPerSide = 16;
addSquares(squaresPerSide);

const adjustSquaresButton = document.querySelector("button");
adjustSquaresButton.addEventListener("click", addNewGrid);


