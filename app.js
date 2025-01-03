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


function updateSnake(){
    const newHead = {x:snake[0].x + direction.x, y:snake[0].y + direction.y};

    if(newHead.x === food.x && newHead.y === food.y){
        score++;
        scoreElement.textContent = score;
        snake.push({});
        placeFood();
    }else{
        snake.pop();
    }

    snake.unshift(newHead);

    if(isGameOver()){
        alert(`Game Over! Your score : ${score}`);
        resetGame();
    }
}

function placeFood(){
    food = {
        x: Math.floor(Math.random() * 20) +1,
        y: Math.floor(Math.random() * 20) +1,
    };
}

function isGameOver(){
    const head = snake[0];
    if(
        head.x < 1 ||
        head.x > 20 ||
        head.y < 1 ||
        head.y > 20 ||
        snake.slice(1).some(segment => segment.x === head.x && segment.y === head.y)
    ){
        return true;
    }

    return false;
}
