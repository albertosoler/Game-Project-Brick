function createLadrillos(){ 
//Funcion constructora 
    
    this.brickRowCount = 5;
    this.brickColumnCount = 10;
    this.brickWidth = 45;
    this.brickHeight = 20;
    this.brickPadding = 10;
    this.brickOffsetTop = 45;
    this.brickOffsetLeft = 30;    
    this.brickX;
    this.brickY;
    this.bricks = [];
    this.score = 0;
    this.lvl=0;
    this.audio=new Audio("audio/golpe.mp3");
//Recorrer el array Bidimiensional;
   for(c=0; c<this.brickColumnCount; c++) {
        this.bricks[c] = [];
    for(r=0; r<this.brickRowCount; r++) {
        this.bricks[c][r] = { x: 0, y: 0, status: 1 }; //Creamos 1 objetos donde metemos 2 propiedades(refiriendonos ha columnas y filas) y un estado 
    }
}
}

createLadrillos.prototype.drawLadrillos = function (){
    for(c=0; c<this.brickColumnCount; c++) {
        for(r=0; r<this.brickRowCount-4; r++) {
            if(this.bricks[c][r].status == 1) {
            this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
            this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
            this.bricks[c][r].x = this.brickX ;
            this.bricks[c][r].y = this.brickY;
            ctx.beginPath();
            var img = new Image()  
            img.src = "images/canvas.png";
            ctx.drawImage(img, this.brickX+ Math.random(10) *3, this.brickY+ Math.random(10) *3, this.brickWidth, this.brickHeight);
            ctx.closePath();
        }
    } 
}   
    for(c=0; c<this.brickColumnCount; c++) {
         for(r=3; r<this.brickRowCount-1; r++) {
             if(this.bricks[c][r].status == 1) {
             this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
             this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
             this.bricks[c][r].x = this.brickX;
             this.bricks[c][r].y = this.brickY;
             ctx.beginPath();
             var img = new Image()  
             img.src = "images/css.png";
             ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
             ctx.closePath();
            }
        } 
    }   
   for(c=0; c<this.brickColumnCount; c++) {
         for(r=4; r<this.brickRowCount; r++) {
             if(this.bricks[c][r].status == 1) {
             this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
             this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
             this.bricks[c][r].x = this.brickX;
             this.bricks[c][r].y = this.brickY;
             ctx.beginPath();
             var img = new Image()  
             img.src = "images/html.png";
             ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
             ctx.closePath();
            }
        } 
    }
     for(c=0; c<this.brickColumnCount; c++) {
         for(r=1; r<this.brickRowCount-3; r++) {
             if(this.bricks[c][r].status == 1) {
             this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
             this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
             this.bricks[c][r].x = this.brickX;
             this.bricks[c][r].y = this.brickY;
             ctx.beginPath();
             var img = new Image()  
             img.src = "images/jquery.png";
             ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
             ctx.closePath();
             }
         } 
     }
     for(c=0; c<this.brickColumnCount; c++) {
         for(r=2; r<this.brickRowCount-2; r++) {
             if(this.bricks[c][r].status == 1) {
             this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
             this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
             this.bricks[c][r].x = this.brickX;
             this.bricks[c][r].y = this.brickY;
             ctx.beginPath();
             var img = new Image()  
             img.src = "images/JS.jpeg";
             ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
             ctx.closePath();
             }
         } 
     }
}
