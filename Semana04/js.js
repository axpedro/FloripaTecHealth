var box = 32;
var snake =[{ x : 8 * box , y : 8 * box } ];
var canvas = document.getElementById("snake");
var context = canvas.getContext("2d");
var direction ="right";
var food = {
    x: Math.floor(Math.random() * 10) * box,
    y: Math.floor(Math.random() * 10) * box
};
var game = setInterval(startGame,100);

function createBg(){

    context.fillStyle = "lightgreen";
    context.fillRect( 0, 0 ,16 * box,16 * box);
    //Criando o fundo do game - ex2
    
}

function createSnake(){
    //snake.forEach((position)=>{
//canvas.fillRect(position.x, position.y,box,box)

    
    for (var i = 0; i < snake.length; i++) {
    context.fillStyle = "blue";
     context.fillRect(snake[i].x, snake[i].y, box, box);
        //Ex3- criando a
    }

}


function createFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
//ex4- criando a comida
}

document.addEventListener("keydown", update); // ex9- callback da funcao update

function update(event){
    if(event.keyCode ===37 && direction !=="right" ){
    direction = "left";
}   else if (event.keyCode === 38 && direction !== "down") {
    direction = "up";
}   else if (event.keyCode === 39 && direction !== "left") {
    direction = "right";
}   else if (event.keyCode === 40 && direction !== "up") {
    direction = "down";
}
//Ex 5 solicitado - Movimento cobrinha
    }

  
function startGame(){
    //mecanica principal do game - ex6
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].x < 0 && direction == 'left') snake[0].x = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
       if (snake[0].y < 0 && direction == 'up') snake[0].y = 16 * box;


       for (var i = 1; i < snake.length; i++) { //verifica se a cobra bateu nela mesma x/y
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            
            
            alert("Game Over! Pressione OK para reiniciar.");
            clearInterval(game);
            
            
        }

        }
           
    

    createBg();
    createSnake();
    createFood();
    
    
//ex 7: formando a cabeça da snake
    var snakeX = snake[0].x;
    var snakeY = snake[0].y;

    if (direction === "right") snakeX += box;
    if (direction === "left") snakeX -= box;
    if (direction === "up") snakeY -= box;
    if (direction === "down") snakeY += box;
    
//ex 8 : verifica se o eixo da cobrinha bate no eixo da comida
    if (snakeX != food.x || snakeY != food.y) {
        snake.pop();
    }
        
    else {
        
             food = { x: Math.floor(Math.random() * 10) * box,
                y: Math.floor(Math.random() * 10) * box
//gera um novo local pra food
        }
    }
        let newHead = {
            x:snakeX,
            y:snakeY
        };
        snake.unshift(newHead);
    }
   
       
        
    
    
    
    
    
    

   
                    
                