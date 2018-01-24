function createBarra(){
    this.paddleHeight = 30;
    this.paddleWidth = 70;
    this.paddleX = (canvas.width-this.paddleWidth)/2;
    this.rightPressed = false;
    this.leftPressed = false;
    this.firstOver=true;

}
createBarra.prototype.drawBarra= function(){

        ctx.beginPath();
        var img = new Image()  
        img.src = "images/barra.png";
        ctx.drawImage(img, this.paddleX , canvas.height-this.paddleHeight , this.paddleWidth, this.paddleHeight);

        //ctx.rect(this.paddleX , canvas.height-this.paddleHeight , this.paddleWidth, this.paddleHeight);
        //ctx.fillStyle = "#0095DD";
        //ctx.fill();
        ctx.closePath();
    }
 
createBarra.prototype.moveBarra = function (){
    if(barra.rightPressed && barra.paddleX < canvas.width-barra.paddleWidth) {
        barra.paddleX += 10;
      }
      else if(barra.leftPressed && barra.paddleX > 0) {
        barra.paddleX -= 10;
      }
      
      bola.x += bola.dx;
      bola.y += bola.dy;
      
      }

    
   

