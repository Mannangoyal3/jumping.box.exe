var canvas;
var block1,block2,block3,block4;
var ball, edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}

function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(0,580,360,30);
    block1.shapeColor = ("cyan");

    block2 = createSprite(295,580,200,30);
    block2.shapeColor = ("orange");


    block3 = createSprite(510,580,200,30);
    block3.shapeColor = ("lime");

    block4 = createSprite(730,580,220,30);
    block4.shapeColor = ("magenta");

    ball = createSprite(random(20,750),100, 40,40);
    ball.shapeColor = ("red");
    ball.velocityX = 4;
    ball.velocityY = 9;

}

function draw() {
    background("black");
    edges=createEdgeSprites();
    ball.bounceOff(edges);

    if(block1.isTouching(ball) && ball.bounceOff(block1)){
        ball.shapeColor = ("cyan");
        music.play();

    }

    if(ball.isTouching(block2)){
        ball.shapeColor = ("red");
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }

    if(block3.isTouching(ball) && ball.bounceOff(block3)){
        ball.shapeColor = ("lime");

    }

    if(block4.isTouching(ball) && ball.bounceOff(block4)){
        ball.shapeColor = ("magenta");

    }

    if (keyDown("SPACE")&&ball.isTouching(block2)){
        ball.bounceOff(block2);
    }

    drawSprites();

}
