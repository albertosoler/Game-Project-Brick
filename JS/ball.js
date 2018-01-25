function createBall() {

  this.x = canvas.width / 2;
  this.y = canvas.height - 30;
  this.dx = 5;
  this.dy = -5;
  this.firstOver=true;
  this.sizex=15;
  this.sizey=15;
          
  }

  createBall.prototype.drawBall = function() {
    var img = new Image()  
    img.src = "images/DragonBall.png";
    ctx.drawImage(img, this.x, this.y, this.sizex,this.sizey);
     }
     createBall.prototype.reboteMargen = function (){
      if (this.x + this.dx > canvas.width-this.sizex || this.x + this.dx < 0) {
          this.dx = -this.dx;
        }
        else if(this.y +this.dy < 0) {
          this.dy = -this.dy;
      }
  }
  createBall.prototype.rebotePaddle = function (){
        if(this.y + this.dy > canvas.height - barra.paddleHeight-this.sizey) {
      
          if(this.x > barra.paddleX && this.x < barra.paddleX + barra.paddleWidth-this.sizex) { //Rebote con el paddle
              this.dy = -this.dy  ;
            
              
             
          }

      }
  }
 
    
  
 

    

