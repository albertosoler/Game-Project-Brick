window.onload = function() {
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
  
   function Jesii (){
    
    this.x = canvas.width/2;
    this.y = canvas.height-30;
    this.dx = 20;
    this.dy = -20;
  }
  
  
   Jesii.prototype.drawBall = function () {
      ctx.beginPath();
      ctx.arc(this.x, this.y, 10, 0, Math.PI*2);
      ctx.fillStyle = "#0095DD";
      ctx.fill();
      ctx.closePath();
   }
   Jesii.prototype.draw=function() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    this.x += this.dx;
    this.y += this.dy;
      }
  console.log(Jesii.draw);
  setInterval(Jesii.draw, 1000/30);
  
  }