 function createBall() {

            this.x = canvas.width / 2;
            this.y = canvas.height - 20;
            this.dx = 5;
            this.dy = -5;
          
            
            
         
 }

createBall.prototype.drawBall = function() {
     var img = new Image()  
    img.src = "images/descarga.png";
      ctx.drawImage(img, this.x, this.y, 10, 10);
     }
    
  
 

    

