
function createNewGrid() {
    let squaresPerSide = Number(prompt("How many squares per side for your new grid?"));

    while (squaresPerSide > 100 || isNaN(squaresPerSide)) {
        squaresPerSide = +prompt("Invalid input. Please enter a number. Maximum squares accepted is 100.");
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

        newSquare.addEventListener("mouseenter", applyRGBHover, {once: true});
        newSquare.addEventListener("mouseenter", applyOpacityHover);
        container.appendChild(newSquare);
    }
};

//Change element's background color to a random color on hover
function applyRGBHover(event) {
    let square = event.target;

    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);

    square.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`
}

//Darkens square's color by 10% on each hover
function applyOpacityHover(event) {
    let square = event.target;
    
    let squareOpacity = Number(square.style.opacity);

    if (squareOpacity < 1) {
        squareOpacity += 0.1;
        square.style.opacity = String(squareOpacity);
    } 

}

const container = document.querySelector(".container");

//Default grid is 16x16
let squaresPerSide = 16;
addSquares(squaresPerSide);

//Adjust button prompts changes in the grid
const adjustSquaresButton = document.querySelector("button");
adjustSquaresButton.addEventListener("click", createNewGrid);


