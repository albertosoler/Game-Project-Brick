
function createLadrillos(){ 
//Funcion constructora 
var bola = new createBall();
this.brickRowCount = 3;
this.brickColumnCount = 7;
this.brickWidth = 45;
this.brickHeight = 20;
this.brickPadding = 10;
this.brickOffsetTop = 45;
this.brickOffsetLeft = 15;
this.brickX;
this.brickY;
this.bricks = [];
//Recorrer el array Bidimiensional;
    for(c=0; c<this.brickColumnCount; c++) {
        this.bricks[c] = [];
    for(r=0; r<this.brickRowCount; r++) {
        this.bricks[c][r] = { x: 0, y: 0 };
    }
}
}
//Funcion que dibuja los brick
createLadrillos.prototype.drawLadrillos = function (){
    for(c=0; c<this.brickColumnCount; c++) {
        for(r=2; r<this.brickRowCount; r++) {
            this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
            this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
            this.bricks[c][r].x = this.brickX;
            this.bricks[c][r].y = this.brickY;
            ctx.beginPath();
            var img = new Image()  
            img.src = "images/css.png";
            ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
            //ctx.rect(this.brickX, this.brickY, this.brickWidth, this.brickHeight);
            //ctx.fillStyle = "#0095DD";
            //ctx.fill();
            ctx.closePath();
        }
    } 
    for(c=0; c<this.brickColumnCount; c++) {
        for(r=1; r<this.brickRowCount-1; r++) {
            this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
            this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
            this.bricks[c][r].x = this.brickX;
            this.bricks[c][r].y = this.brickY;
            ctx.beginPath();
            var img = new Image()  
            img.src = "images/html.png";
            ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
            //ctx.rect(this.brickX, this.brickY, this.brickWidth, this.brickHeight);
            //ctx.fillStyle = "#0095DD";
            //ctx.fill();
            ctx.closePath();
        }
    } 
    for(c=0; c<this.brickColumnCount; c++) {
        for(r=0; r<this.brickRowCount-2; r++) {
            this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
            this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
            this.bricks[c][r].x = this.brickX;
            this.bricks[c][r].y = this.brickY;
            ctx.beginPath();
            var img = new Image()  
            img.src = "images/JS.jpeg";
            ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
            //ctx.rect(this.brickX, this.brickY, this.brickWidth, this.brickHeight);
            //ctx.fillStyle = "#0095DD";
            //ctx.fill();
            ctx.closePath();
        }
    } 
 }
 createLadrillos.prototype.Colision= function (){
    for(c=0; c<this.brickColumnCount; c++) {
        for(r=0; r<this.brickRowCount; r++) {
            var b = this.bricks[c][r];
                if(bola.x > b.x && bola.x < b.x+this.brickWidth && bola.y > b.y && bola.y < b.y+this.brickHeight) {
                    bola.dy = -bola.dy;
                }
            }
        }
    }
 
