var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var barra = new createBarra();
var bola = new createBall();
var bola2 = new createBall();
var brick = new createLadrillos();
var mierda=new Audio("audio/main.mp3");
window.onload = function() {
  mierda.play();
  document.getElementById("btn-start").onclick = function() {
    startGame();
    document.getElementById("canvas").style.display = "block";
  };

  function Colision() {
    for (c = 0; c < brick.brickColumnCount; c++) {
      for (r = 0; r < brick.brickRowCount; r++) {
        var b = brick.bricks[c][r];
        if (b.status == 1) {
          if (
            bola.x > b.x &&
            bola.x < b.x + brick.brickWidth &&
            bola.y > b.y &&
            bola.y < b.y + brick.brickHeight
          ) {
            brick.audio.play();
            brick.audio.volume =0.1;
            bola.dy = -bola.dy;
            b.status = 0;
            brick.score++;

            if (b.status == 0) {
              ctx.beginPath();
              var img = new Image();
              img.src = "images/attack.gif";
              ctx.drawImage(
                img,
                bola.x,
                bola.y,
                brick.brickWidth,
                brick.brickHeight
              );
              ctx.closePath();
            }
            if (brick.score == 10) {
              bola.dy *= 1.2;
              bola.dx *= 1.2;
              barra.paddleWidth -= 20;
            }
            if (brick.score == 20) {
              bola.dy += 1.1;
              bola.dx += 1.1;
              barra.paddleWidth -= 5;
            }
            if (brick.score == 30) {
              bola.dy *= 1.2;
              bola.dx *= 1.2;
              barra.paddleWidth -= 5;
            }
            if (brick.score == 40) {
              barra.paddleWidth += 35;
              bola.dy *= 1.2;
              bola.dx *= 1.2;
            }
          }

          if (brick.score == brick.brickRowCount * brick.brickColumnCount) {
            alert("Felicidades!!! Has superado el juego...");
            window.location.reload();
          }
          if (bola.y > canvas.height + 30) {
            if (bola.firstOver == true) {
              alert("Game Over");
              bola.firstOver = false;
              window.location.reload();
            }
          }
        }
      }
    }
  }
  function render(e) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    brick.drawLadrillos();
    bola.drawBall();
    barra.drawBarra();
    Colision();
    bola.reboteMargen();
    bola.rebotePaddle();
    barra.moveBarra();
    drawScore();

    bola.x += bola.dx;
    bola.y += bola.dy;
  }

  function startGame() {
    setInterval(render, 1000 / 60);
  }
};
