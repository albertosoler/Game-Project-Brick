var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var barra = new createBarra();
var bola = new createBall();
var brick = new createLadrillos();
window.onload = function(){
  document.getElementById("btn-start").onclick = function (){
    startGame();
  }


      
   
  

   
  
    
    
  


  

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


function draw(e) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  brick.drawLadrillos();
  bola.drawBall();
  barra.drawBarra();
  brick.Colision();
 



  if (bola.x + bola.dx > canvas.width || bola.x + bola.dx < 0) {
    bola.dx = -bola.dx;
  }
  else if(bola.y +bola.dy < 0) {
    bola.dy = -bola.dy;
}
  else if(bola.y + bola.dy > canvas.height - barra.paddleHeight) {

    if(bola.x > barra.paddleX && bola.x < barra.paddleX + barra.paddleWidth) {
        bola.dy = -bola.dy;
    }
    else if(bola.y -10> canvas.height +10 ){

      window.location.reload(true);
      
      
      
    }  
}

  if(barra.rightPressed && barra.paddleX < canvas.width-barra.paddleWidth) {
    barra.paddleX += 10;
}
  else if(barra.leftPressed && barra.paddleX > 0) {
    barra.paddleX -= 10;
  }

  bola.x += bola.dx;
  bola.y += bola.dy;

}
  


function startGame(){
setInterval(draw,1000/60)
}



  

  

 

  
 
  
 
};
