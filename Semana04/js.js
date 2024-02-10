const box = 32;
const snake =[{x:8*box,y:8*box}];
const canvas = document.getElementById("snake");
const context = canvas.getContext("2d");


const direction ="right";
const food = {
    x: Math.floor(Math.random() * 10) * box,
    y: Math.floor(Math.random() * 10) * box
};


function createBg(){

    context.fillStyle = "lightgreen";
    context.fillRect(0,0,16*box,16*box);
    
}
createBg();
