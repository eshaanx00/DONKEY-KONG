
var monkey , monkey_running
var banana ,bImage, obstacle, obImage
var FoodGroup, obGroup
var ground
var score=0

var game="scr"
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bImage = loadImage("banana.png");
  obImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600,300)
monkey = createSprite(60,240)
  monkey.addAnimation("run",monkey_running)
  monkey.scale=0.15
  ground=createSprite(300,240,600,15)
   obGroup = createGroup();
  FoodGroup=createGroup();
  monkey.debug=false
  monkey.setCollider("rectangle",0,0,250,570)
     

}


function draw() {
background("white")
    
    var time = 100
    time=time-World.seconds
   
  if(game==="scr"){
     
     monkey.visible=false
    ground.visible=false
    fill("black")
    textSize(20)

    text("U HAVE TO COLLECT AS MUCH BANANAS IN 100 SECONDs",25,150)
    text("TIME STARTS NOW",225,200)
    text("PRESS W TO START",220,250)
     
     }

  if (game==="play"){
   
    text("TIME "+time,300,50)
    monkey.visible=true
    ground.visible=true
    text("SCORE "+score,100,50)
  SO();
    SB();
      if(monkey.y>=186 && keyDown("space")){
         
         monkey.velocityY=-17
         }
      
      }
  else if(game==="end"){
    fill("black")
    textSize(20)
    text("GREAT YOU GOT "+score+" BANANAS",170,100)
    text("NOW DONKEY KONG IS HAPPY MAYBE?",130,200)
  monkey.visible=false
  ground.visible=false
  obGroup.visible=false
    obGroup.destroyEach();
    FoodGroup.visible=false
    FoodGroup.destroyEach();
    
  }
  
  if (time<0&&game==="play"){
      game="end"
      
      }
  if (game==="scr"&&keyDown("w")){
      game="play"
      
      }
  if(monkey.isTouching(obGroup)){
    obGroup.destroyEach();
     score=score-1
     }
  if(monkey.isTouching(FoodGroup)){
     FoodGroup.destroyEach();
    score=score+1
     
     
     }
  monkey.velocityY=monkey.velocityY+1
  monkey.collide(ground)
  drawSprites();
  
  
}
function SO (){
if(frameCount%100===0){
obstacle = createSprite(600,210)
obstacle.addImage(obImage)
  obstacle.scale=0.13
  obstacle.velocityX=-7
  obGroup.add(obstacle)
  obstacle.lifetime=200
}

}
function SB(){
if(frameCount%100===0){

banana = createSprite(600,70)
banana.addImage(bImage)
  banana.scale=0.13
  banana.velocityX=-7
  FoodGroup.add(banana)
  banana.lifetime=200



}

}






