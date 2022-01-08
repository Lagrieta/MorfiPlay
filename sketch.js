var Paddle, ball, edges, ballImg, paddleImg;
var ball1, ball2, ball3, ball4, ball5, ball6, ball7, ball8, ball9, ball10, ball11, ball12, ball13, ball14, ball15, ball16, ball17;
var gana, ganaImg;
var score=0;

 

function preload(){
  ballImg = loadImage("pizza.png");
  paddleImg = loadImage("morfi.png");
  ganaImg = loadImage("ganaste.png");
}

function setup(){
  createCanvas(windowWidth,windowHeight);
  Paddle = createSprite(0,0,20,20);
  Paddle.addImage(paddleImg);
  Paddle.scale = 0.5;
  
  gana = createSprite(width/2, height/2,10,10);
  gana.addImage(ganaImg);
  gana.scale = 0.5;
  gana.visible=false;
  
  ball = createSprite(width/2,height-5,200,20);
  ball.addImage(ballImg);
  ball.scale = 0.7;
  
  ball1 = createSprite(width/2,height-10,200,20);
  ball1.addImage(ballImg);
  ball1.scale = 0.7;
  
  ball2 = createSprite(width/2,height-15,200,20);
  ball2.addImage(ballImg);
  ball2.scale = 0.7;
  
  ball3 = createSprite(width/2,height-20,200,20);
  ball3.addImage(ballImg);
  ball3.scale = 0.7;
  
  ball4= createSprite(width/2,height-25,200,20);
  ball4.addImage(ballImg);
  ball4.scale = 0.7;
  
  ball5= createSprite(width/2,height-30,200,20);
  ball5.addImage(ballImg);
  ball5.scale = 0.7;
  
  ball6= createSprite(width/2,height-25,200,20);
  ball6.addImage(ballImg);
  ball6.scale = 0.7;
  
  ball7= createSprite(width-5,height/2,200,20);
  ball7.addImage(ballImg);
  ball7.scale = 0.7;
  
  ball8= createSprite(width-10,height/2,200,20);
  ball8.addImage(ballImg);
  ball8.scale = 0.7;
  
  ball9= createSprite(width-15,height/2,200,20);
  ball9.addImage(ballImg);
  ball9.scale = 0.7;
  
  ball10= createSprite(width-20,height/2,200,20);
  ball10.addImage(ballImg);
  ball10.scale = 0.7;
  
  ball11= createSprite(width-25,height/2,200,20);
  ball11.addImage(ballImg);
  ball11.scale = 0.7;
  
  ball12= createSprite(width-30,height/2,200,20);
  ball12.addImage(ballImg);
  ball12.scale = 0.7;

  ball13= createSprite(width/2,height/2,200,20);
  ball13.addImage(ballImg);
  ball13.scale = 0.7;
  
  ball14= createSprite(width/2,height/2,200,20);
  ball14.addImage(ballImg);
  ball14.scale = 0.7;
  
  ball15= createSprite(width/2,height/2,200,20);
  ball15.addImage(ballImg);
  ball15.scale = 0.7;
  
  edges = createEdgeSprites();
  ball.velocityX = 2;
  ball.velocityY = 3;

  ball1.velocityX = 3;
  ball1.velocityY = 2;
  
  ball2.velocityX = 4;
  ball2.velocityY = 2;
  
  ball3.velocityX = 2;
  ball3.velocityY = 4;
  
  ball4.velocityX = 4;
  ball4.velocityY = 5;
  
  ball5.velocityX = 5;
  ball5.velocityY = 4;

  ball6.velocityX = 4;
  ball6.velocityY = 4;
  
  ball7.velocityX = 5;
  ball7.velocityY = 5;
  
  ball8.velocityX = 2;
  ball8.velocityY = 2;
  
  ball9.velocityX = 3;
  ball9.velocityY = 3;
  
  ball10.velocityX = 3;
  ball10.velocityY = 5;
  
  ball11.velocityX = 3;
  ball11.velocityY = 4;
  
  ball12.velocityX = 3;
  ball12.velocityY = 3;

  ball13.velocityX = 3;
  ball13.velocityY = 2;

  ball14.velocityX = 3;
  ball14.velocityY = 1;

  ball15.velocityX = 4;
  ball15.velocityY = 5;

  }

function draw(){
  background("black");
  
  Paddle.y = World.mouseY;
  Paddle.x = World.mouseX;

  fill("white");
  stroke(20);
  textSize(20);
  text("Puntuación:"+score, 200,20);
  
  if (score > 799){
  gana.visible = true;
  }
 
  if (Paddle.isTouching(ball)) {
      ball.y = 1000;
      score=score + 50;
    }
  
  if (Paddle.isTouching(ball1)) {
      ball1.y = 1000;
      score=score + 50;
    }
  
if (Paddle.isTouching(ball2)) {
      ball2.y = 1000;
      score=score + 50;
    }
  
if (Paddle.isTouching(ball3)) {
      ball3.y = 1000;
      score=score + 50;
    }
  
if (Paddle.isTouching(ball4)) {
      ball4.y = 1000;
      score=score + 50;
    }
  
if (Paddle.isTouching(ball5)) {
      ball5.y = 1000;
      score=score + 50;
    }

if (Paddle.isTouching(ball6)) {
      ball6.y = 1000;
      score=score + 50;
    }

if (Paddle.isTouching(ball7)) {
      ball7.y = 1000;
      score=score + 50;
    }

if (Paddle.isTouching(ball8)) {
      ball8.y = 1000;
      score=score + 50;
    }

if (Paddle.isTouching(ball9)) {
      ball9.y = 1000;
      score=score + 50;
    }
  
if (Paddle.isTouching(ball10)) {
      ball10.y = 1000;
      score=score + 50;
    }

if (Paddle.isTouching(ball11)) {
      ball11.y = 1000;
      score=score + 50;
    }

if (Paddle.isTouching(ball12)) {
      ball12.y = 1000;
      score=score + 50;
    }

if (Paddle.isTouching(ball13)) {
      ball13.y = 1000;
      score=score + 50;
    }

if (Paddle.isTouching(ball14)) {
      ball14.y = 1000;
      score=score + 50;
    }

if (Paddle.isTouching(ball15)) {
      ball15.y = 1000;
      score=score + 50;
    }
  
  ball.bounceOff(edges[3]);
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[1]);
  ball.bounceOff(edges[0]);
  ball.bounce(Paddle);
  
  ball1.bounceOff(edges[3]);
  ball1.bounceOff(edges[2]);
  ball1.bounceOff(edges[1]);
  ball1.bounceOff(edges[0]);
  ball1.bounce(Paddle);
  
  ball2.bounceOff(edges[3]);
  ball2.bounceOff(edges[2]);
  ball2.bounceOff(edges[1]);
  ball2.bounceOff(edges[0]);
  ball2.bounce(Paddle);
  
  ball3.bounceOff(edges[3]);
  ball3.bounceOff(edges[2]);
  ball3.bounceOff(edges[1]);
  ball3.bounceOff(edges[0]);
  ball3.bounce(Paddle);
  
  ball4.bounceOff(edges[3]);
  ball4.bounceOff(edges[2]);
  ball4.bounceOff(edges[1]);
  ball4.bounceOff(edges[0]);
  ball4.bounce(Paddle);
  
  ball5.bounceOff(edges[3]);
  ball5.bounceOff(edges[2]);
  ball5.bounceOff(edges[1]);
  ball5.bounceOff(edges[0]);
  ball5.bounce(Paddle);
  
  ball6.bounceOff(edges[3]);
  ball6.bounceOff(edges[2]);
  ball6.bounceOff(edges[1]);
  ball6.bounceOff(edges[0]);
  ball6.bounce(Paddle);
  
  ball7.bounceOff(edges[3]);
  ball7.bounceOff(edges[2]);
  ball7.bounceOff(edges[1]);
  ball7.bounceOff(edges[0]);
  ball7.bounce(Paddle);
  
  ball8.bounceOff(edges[3]);
  ball8.bounceOff(edges[2]);
  ball8.bounceOff(edges[1]);
  ball8.bounceOff(edges[0]);
  ball8.bounce(Paddle);

  ball9.bounceOff(edges[3]);
  ball9.bounceOff(edges[2]);
  ball9.bounceOff(edges[1]);
  ball9.bounceOff(edges[0]);
  ball9.bounce(Paddle);
  
  ball10.bounceOff(edges[3]);
  ball10.bounceOff(edges[2]);
  ball10.bounceOff(edges[1]);
  ball10.bounceOff(edges[0]);
  ball10.bounce(Paddle);
  
  ball11.bounceOff(edges[3]);
  ball11.bounceOff(edges[2]);
  ball11.bounceOff(edges[1]);
  ball11.bounceOff(edges[0]);
  ball11.bounce(Paddle);

  ball12.bounceOff(edges[3]);
  ball12.bounceOff(edges[2]);
  ball12.bounceOff(edges[1]);
  ball12.bounceOff(edges[0]);
  ball12.bounce(Paddle);
  
  ball13.bounceOff(edges[3]);
  ball13.bounceOff(edges[2]);
  ball13.bounceOff(edges[1]);
  ball13.bounceOff(edges[0]);
  ball13.bounce(Paddle);
  
  ball14.bounceOff(edges[3]);
  ball14.bounceOff(edges[2]);
  ball14.bounceOff(edges[1]);
  ball14.bounceOff(edges[0]);
  ball14.bounce(Paddle);
  
  ball15.bounceOff(edges[3]);
  ball15.bounceOff(edges[2]);
  ball15.bounceOff(edges[1]);
  ball15.bounceOff(edges[0]);
  ball15.bounce(Paddle);
  
  drawSprites();
}
