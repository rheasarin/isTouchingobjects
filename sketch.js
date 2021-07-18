var fixedRect, movingRect;
 gameob1,gameob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameob1=createSprite(100,100,50,50);
  gameob1.shapeColor = "blue";

  gameob2=createSprite(400,100,50,50);
  gameob2.shapeColor = "blue";

}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameob2)){
    movingRect.shapeColor = "red";
    gameob2.shapeColor = "red";
  }

    
  
  else {
    movingRect.shapeColor = "green";
    gameob2.shapeColor = "blue";
  }

  if(isTouching(movingRect,fixedRect)){
    movingRect.shapeColor = "yellow";
    fixedRect.shapeColor = "yellow";
  }

    
  
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }

  drawSprites();

}

function isTouching(object1,object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) 
{
  return true;
}

else{
  return false;
}
}
