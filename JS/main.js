var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var barra = new createBarra();
var bola = new createBall();
var brick = new createLadrillos();
window.onload = function(){
  document.getElementById("btn-start").onclick = function (){
    startGame();
    document.getElementById('canvas').style.display = 'block';
  }

function draw(e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  brick.drawLadrillos();
  bola.drawBall();
  barra.drawBarra();
  brick.Colision();
  bola.reboteMargen();
  bola.rebotePaddle();
  barra.moveBarra();
  bola.gameOver();
  drawScore();

  
}

function startGame(){
setInterval(draw,1000/50)
}



  

  

 

  
 
  
 
};
