function createBarra(){
    this.paddleHeight = 10;
    this.paddleWidth = 70;
    this.paddleX = (canvas.width-this.paddleWidth)/2;
    this.rightPressed = false;
    this.leftPressed = false;

}
createBarra.prototype.drawBarra= function(){

        ctx.beginPath();
        ctx.rect(this.paddleX , canvas.height-this.paddleHeight , this.paddleWidth, this.paddleHeight);
        ctx.fillStyle = "#0095DD";
        ctx.fill();
        ctx.closePath();
    }


   

