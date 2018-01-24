function createBall() {

  this.x = canvas.width / 2;
  this.y = canvas.height - 20;
  this.dx = 5;
  this.dy = -5;
  this.firstOver=true;
          
  }

  createBall.prototype.drawBall = function() {
     var img = new Image()  
    img.src = "images/descarga.png";
      ctx.drawImage(img, this.x, this.y, 10, 10);
     }
     createBall.prototype.reboteMargen = function (){
      if (this.x + this.dx > canvas.width || this.x + this.dx < 0) {
          this.dx = -this.dx;
        }
        else if(this.y +this.dy < 0) {
          this.dy = -this.dy;
      }
  }
  createBall.prototype.rebotePaddle = function (){
        if(this.y + this.dy > canvas.height - barra.paddleHeight) {
      
          if(this.x > barra.paddleX && this.x < barra.paddleX + barra.paddleWidth) { //Rebote con el paddle
              this.dy = -this.dy;
          }

      }
  }
  createBall.prototype.gameOver = function (){
    if(this.y>canvas.height+5 ){
        if(this.firstOver == true){
          alert("Game Over");
          this.firstOver = false;
        }
      
     
  
        window.location.reload();
        
        
        
      } 
}
    
  
 

    

