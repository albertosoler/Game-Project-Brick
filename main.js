var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var barra = new createBarra();

window.onload = function(){


  
  var x = canvas.width / 2;
  var y = canvas.height - 20;
  var dx = 5;
  var dy = -5;

  document.addEventListener("keydown", keyDownHandler);
  document.addEventListener("keyup", keyUpHandler);

  function keyDownHandler(e) {
    if(e.keyCode == 39) {
        barra.rightPressed = true;
        
        
    }
    else if(e.keyCode == 37) {
        barra.leftPressed = true;
        
        
        
    }
}
  function keyUpHandler(e) {
    if(e.keyCode == 39) {
      
      barra.rightPressed = false;
        
    }
    else if(e.keyCode == 37) {
        
       barra.leftPressed = false;
       
        
                

    }
}

function drawBall() {
  var img = new Image();
  img.src = "images/descarga.png";
  ctx.drawImage(img, x, y, 10, 10);
}

function draw(e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  barra.drawBarra();
 



  if (x + dx > canvas.width || x + dx < 0) {
    dx = -dx;
  }
  if(y + dy < 0) {
    dy = -dy;
}
else if(y + dy > canvas.height - barra.paddleHeight) {

    if(x > barra.paddleX && x < barra.paddleX + barra.paddleWidth) {
        dy = -dy;
    }
    else if(y > canvas.height ){
      
       document.location.reload();
    }
}//haha

  if(barra.rightPressed && barra.paddleX < canvas.width-barra.paddleWidth) {
    barra.paddleX += 10;
}
  else if(barra.leftPressed && barra.paddleX > 0) {
    barra.paddleX -= 10;
  }

  x += dx;
  y += dy;

}
  


function startGame(){
setInterval(draw,1000/60)
}
startGame();

};
  

  

 

  
 
  
 

