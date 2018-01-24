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
        for(r=0; r<this.brickRowCount; r++) {
            if(this.bricks[c][r].status == 1) {
            this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
            this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
            this.bricks[c][r].x = this.brickX;
            this.bricks[c][r].y = this.brickY;
            ctx.beginPath();
            var img = new Image()  
            img.src = "images/fragon.png";
            ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
            ctx.closePath();
        }
    } 
}   
//     for(c=0; c<this.brickColumnCount; c++) {
//         for(r=3; r<this.brickRowCount-1; r++) {
//             if(this.bricks[c][r].status == 1) {
//             this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
//             this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
//             this.bricks[c][r].x = this.brickX;
//             this.bricks[c][r].y = this.brickY;
//             ctx.beginPath();
//             var img = new Image()  
//             img.src = "images/fragon.png";
//             ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
//             ctx.closePath();
//         }
//     } 
// }   
//     for(c=0; c<this.brickColumnCount; c++) {
//         for(r=4; r<this.brickRowCount; r++) {
//             if(this.bricks[c][r].status == 1) {
//             this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
//             this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
//             this.bricks[c][r].x = this.brickX;
//             this.bricks[c][r].y = this.brickY;
//             ctx.beginPath();
//             var img = new Image()  
//             img.src = "images/fragon.png";
//             ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
//             ctx.closePath();
//             }
//         } 
//     }
//     for(c=0; c<this.brickColumnCount; c++) {
//         for(r=1; r<this.brickRowCount-3; r++) {
//             if(this.bricks[c][r].status == 1) {
//             this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
//             this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
//             this.bricks[c][r].x = this.brickX;
//             this.bricks[c][r].y = this.brickY;
//             ctx.beginPath();
//             var img = new Image()  
//             img.src = "images/fragon.png";
//             ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
//             ctx.closePath();
//             }
//         } 
//     }
    // for(c=0; c<this.brickColumnCount; c++) {
    //     for(r=0; r<this.brickRowCount-4; r++) {
    //         if(this.bricks[c][r].status == 1) {
    //         this.brickX = (c*(this.brickWidth+this.brickPadding))+this.brickOffsetLeft;
    //         this.brickY = (r*(this.brickHeight+this.brickPadding))+this.brickOffsetTop;
    //         this.bricks[c][r].x = this.brickX;
    //         this.bricks[c][r].y = this.brickY;
    //         ctx.beginPath();
    //         var img = new Image()  
    //         img.src = "images/fragon.png";
    //         ctx.drawImage(img, this.brickX, this.brickY, this.brickWidth, this.brickHeight);
    //         ctx.closePath();
    //         }
    //     } 
    // }
}
    //Metodo que provoca la colision
 createLadrillos.prototype.Colision= function (){
    for(c=0; c<this.brickColumnCount; c++) {
        for(r=0; r<this.brickRowCount; r++) {
            var b = this.bricks[c][r];
            if(b.status == 1) { 
                if(bola.x > b.x && bola.x < b.x+this.brickWidth && bola.y > b.y && bola.y < b.y+this.brickHeight) {
                    this.audio.play();
                    bola.dy = -bola.dy;
                    b.status = 0;
                    this.score++;
                    if(b.status == 0){
                        ctx.beginPath();
                        var img = new Image()  
                        img.src = "images/attack.gif";
                        ctx.drawImage(img, bola.x, bola.y, this.brickWidth, this.brickHeight);
                        ctx.closePath();


                    }if(this.score == 5){
                        bola.dy *=1.2;
                        bola.dx *=1.2;
                        barra.paddleWidth -=25;

                    }
                    if(this.score == 10){
                        bola.dy*=1.6;
                        bola.dx*=1.6;
                        barra.paddleWidth +=50;
                    }
                    if(this.score == 20){
                        bola.dy*=2;
                        bola.dx*=2;
                        barra.paddleWidth +=75;
                    }
                    
                    if(this.score == this.brickRowCount*this.brickColumnCount) {
                        alert("YOU WIN, CONGRATS!");
                        
                    }
            }
        }
    }
}
 }