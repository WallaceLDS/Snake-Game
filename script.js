let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let snake = [];
snake [0] = {
    x: 8 * box,
    y: 8 * box
};
let direction = "right";
let food = {
    x: Math.floor(Math.random()*15 + 1) * box,
    y: Math.floor(Math.random()*15 + 1) * box
};

//Criar Background
function criarBG(){
    context.fillStyle  = "lightgreen";
    context.fillRect(0,0,16 * box, 16 * box);    
}
//Criar Cobra(Personagem)
function criarSnake(){
    for (i = 0; i < snake.length; i++){
        context.fillStyle  = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);        
    }
}

function drawFood() {
    context.fillStyle = "red",
    context.fillRect(food.x, food.y, box, box)
}

document.addEventListener('keydown', update);

//function para pegar a tecla de movimento
function update(event) {
    if(event.keyCode == 37 && direction != "right") direction = "left"; 
    if(event.keyCode == 38 && direction != "up") direction = "down";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "down") direction = "up";

}
//Iniciar jogo (main)
function iniciarJogo(){

    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "up") snake[0].y = 0;
    if(snake[0].y < 0 && direction == "down") snake[0].y = 16 *box;

    for (i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) {
            clearInterval(jogo);
            alert('GAME OVER')      
        }  
    }





    

    criarBG();
    criarSnake();
    drawFood();

    let snake_X= snake [0].x;
    let snake_Y= snake [0].y;

    if (direction == "right") snake_X +=box;
    if (direction == "left") snake_X -=box;
    if (direction == "up") snake_Y +=box;
    if (direction == "down") snake_Y -=box;

    if (snake_X != food.x || snake_Y != food.y){
     snake.pop();   
    }else{
        food.x = Math.floor(Math.random()*15 + 1) * box;
        food.y = Math.floor(Math.random()*15 + 1) * box;
    }

    

    let newHead = {
        x: snake_X , 
        y: snake_Y
    }
    
    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);
