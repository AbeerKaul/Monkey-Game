
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score, ground
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
  FoodGroup= new Group()
  obstacleGroup= new Group()
  
}



function setup() {
  createCanvas(670, 400);
  score=0
  survivalTime=0
  
  ground=createSprite(0,360,1500,10)
  
   monkey=createSprite(90,350,10,10)
  monkey.addAnimation("monkey_running",monkey_running)
  monkey.scale=0.1
  
  
  

  }
function draw() {
  background("white")
  
  if(keyDown("space")&&monkey.y >= 320){
    monkey.velocityY=-10
  }
  monkey.velocityY = monkey.velocityY + 0.3
  monkey.collide(ground)
  
  
  ground.velocityX = -7 
 ground.x = ground.width/2;
    
 if(World.frameCount%200===0){
    fruits()
 }
  
  if(World.frameCount%300===0){
    stones()
 }
  
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach()
    score=score+1
      }
  
 
 drawSprites()
  fill("black") 
  text("Score: "+ score, 500,50);
  
  fill("black")
  survivalTime = survivalTime + Math.round(frameCount%60 === 0);
  text("Survival Time: "+ survivalTime,350,50)
  
}

function fruits(){
  banana=createSprite(670,Math.round(random(130,200)),10,10)
  banana.addImage(bananaImage)
  banana.scale=0.1
  banana.velocityX=-10
  FoodGroup.add(banana)
}

function stones(){
  obstacle=createSprite(670,320,10,10)
  obstacle.addImage(obstaceImage)
  obstacle.velocityX=-10
  obstacle.scale=0.2
  obstacleGroup.add(obstacle)
}







