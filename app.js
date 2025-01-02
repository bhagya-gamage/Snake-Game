const board = document.getElementById("game-board");
const scoreElement = document.getElementById("score");

let snake = [{x:10, y:10}];
let food = {x:15, y: 15};
let direction = {x:0, y:0};
let score = 0;

function createBoard(){
    board.innerHTML='';
    snake.forEach(segment => {
        const snakeElement = document.createElement("div");
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.classList.add("snake");
        board.appendChild(snakeElement);
    });

    const foodElement = document.createElement("div");
    foodElement.style.gridColumnStart = food.x;
    foodElement.style.gridRowStart = food.y;
    foodElement.classList.add("food");
    board.appendChild(foodElement);
}