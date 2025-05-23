let b = document.body;  // declaration d'une variable faisant reference au body de l'html
let H = document.createElement('h1'); // variable pour creer un titre
H.textContent = 'Bonita s brick breaker '; // le titre
b.prepend(H);  //pour le position en haut du body
H.style.color = "hotpink";  // colorer le titre
H.style.textAlign = "center"; // centrer le titre
          // mettre un background image
document.body.style.backgroundImage = "url('spring.webp')" 
         //declaration des variable du jeu
var canvas = document.getElementById("jeu");  //variable qui concerne le canvas
var ctx = canvas.getContext("2d");    //variable pour tout les elements dessiner dans le canvas
   //la balle
var ballRadius = 15;
var x = canvas.width/2;
var y = canvas.height-30; 
var dx = 3;
var dy = -3;
   //le paddle
var paddleHeight = 20;
var paddleWidth = 90;
var paddleX = (canvas.width-paddleWidth)/2;

var rightPressed = false;
var leftPressed = false;
    //les briques
var brickRowCount = 7;
var brickColumnCount = 6;
var brickWidth = 50;
var brickHeight = 30;
var brickPadding = 20;
var brickOffsetTop = 90;
var brickOffsetLeft = 130;
var brickcolor = 'yellow';

var score = 0;
var lives = 3;

canvas.style.border ='5px double rgba(166, 66, 166, 0.897)' // mettre une bordure à la canvas
ctx.linewidht = 4;

var bricks = [];
for(var c=0; c<brickColumnCount; c++) {
  bricks[c] = [];
  for(var r=0; r<brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0, status: 1 };
  }
}

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
document.addEventListener("mousemove", mouseMoveHandler, false);

function keyDownHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if(e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if(e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if(relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth/2;
  }
}

function collisionDetection() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      var b = bricks[c][r];
      if(b.status == 1) {
        if(x > b.x && x < b.x+brickWidth && y > b.y && y < b.y+brickHeight) {
          dy = -dy;
          ctx.fillStyle = 'blue';
          b.status = 0;
          score++;
          if(score == brickRowCount*brickColumnCount) {
            alert("YOU WIN, CONGRATS!");
            document.location.reload();
          }
          
        }
      }
    }
  }
}

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = "hotpink";
  ctx.fill();
  ctx.strokeStyle = " yellow";
  ctx.stroke();
  ctx.closePath();
}
function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "hotpink";
  ctx.fill();
  ctx.strokeStyle = "yellow";   //couleur de la bordure
  ctx.strokeRect(paddleX, canvas.height-paddleHeight, paddleWidth, paddleHeight);  //bordure
  ctx.closePath();
}

function drawBricks() {
  for(var c=0; c<brickColumnCount; c++) {
    for(var r=0; r<brickRowCount; r++) {
      if(bricks[c][r].status == 1) {
        var brickX = (r*(brickWidth+brickPadding))+brickOffsetLeft;
        var brickY = (c*(brickHeight+brickPadding))+brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
        ctx.beginPath();
        ctx.rect(brickX, brickY, brickWidth, brickHeight);
        ctx.fillStyle = "rgba(166, 66, 166, 0.897)"; 
        ctx.strokeStyle = "yellow";
        ctx.strokeRect(brickX, brickY, brickWidth, brickHeight);
        ctx.fill();
        ctx.closePath();
      }
    }
  }
}

function drawScore() {
  ctx.font = "20px Arial";
  ctx.fillStyle = "hotpink";
  ctx.fillText("Score: "+score, 8, 20);
}

function drawLives() {
  ctx.font = "20px Arial";
  ctx.fillStyle = "hotpink"
  ctx.fillText("Lives: "+lives, canvas.width-65, 20);
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBricks();
  drawBall();
  drawPaddle();
  drawScore();
  drawLives();
  collisionDetection();

  if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
    dx = -dx;
  }
  if(y + dy < ballRadius) {
    dy = -dy;
  }
  else if(y + dy > canvas.height-ballRadius) {
    if(x > paddleX && x < paddleX + paddleWidth) {
      dy = -dy;
    }
    else {
      lives--;
      if(!lives) {
        alert("GAME OVER");
        document.location.reload();
      }
      else {
        x = canvas.width/2;
        y = canvas.height-30;
        dx = 5;
        dy = -5;
        paddleX = (canvas.width-paddleWidth)/2;
      }
    }
  }

  if(rightPressed && paddleX < canvas.width-paddleWidth) {
    paddleX += 7;
  }
  else if(leftPressed && paddleX > 0) {
    paddleX -= 7;
  }

  x += dx;
  y += dy;
  requestAnimationFrame(draw);
}

draw();