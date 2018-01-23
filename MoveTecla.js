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