var PLAY = 1;
var END = 0;
var gameState = PLAY;

var tarzan, tarzan_img, tarzan_f;
var ground, invisibleGround;
var snake, snake_img, tiger, tiger_img, jungle;

var score;


function preload(){
  tarzan_img = loadImage("Tarzan.jpg");
  snake_img = loadImage("Sanke.jpg");
  tiger_img = loadImage("Tiger.jpg");
  
}

function setup() {
  createCanvas(600, 200);
  
 tarzan = createSprite(50,180,20,50);
  trex.scale = 0.5;
  
  ground = createSprite(200,180,400,20);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  // create enemies group
  enemiesGroup = new Group();
  
  
  score = 0;
}

function draw() {
  background(180);
  text("Score: "+ score, 500,50);
  
  
  if(gameState === PLAY){
    //move the ground
    ground.velocityX = -4;
    //increasing the score
    score = score + Math.round(frameCount/60);
    //making the Tarzan jump
    if(keyDown("space")&& tarzan.y >= 100) {
      tarzan.velocityY = -13;
    }
    // giving gravity to Tarzan
    tarzan.velocityY = tarzan.velocityY + 0.8
    
    if (ground.x < 0){
      ground.x = ground.width/2;
    }

    spawnEnemies();
    if(enemiesGroup.isTouching(tarzan)){
      gameState = END; 
    }
  }
  else if(gameState === END){
    //stop the ground
    ground.velocityX = 0;
    enemiesGroup.setVelocityXEach(0);  
  }
  
 
  
 tarzan.collide(invisibleGround);
  
  
  drawSprites();
}

function spawnEnemies(){
 if (frameCount % 60 === 0){
   var enemies = createSprite(400,165,10,40);
   enemies.velocityX = -6;

      }
   
    //assign scale and lifetime to the enemies           
    enemies.scale = 0.5;
    enemies.lifetime = 300;
   
   //adding enemies to the group
   enemiesGroup.add(enemies);
 }



