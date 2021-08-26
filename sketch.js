var fixedrect, movingrect

function setup() {
  createCanvas(800,400);
  
  fixedrect=createSprite(400,200, 50,50)
  movingrect=createSprite(400, 150, 50, 50);


movingrect.shapeColor="blue"
fixedrect.shapeColor="lightblue"


}

function draw() {
  background( "black");  
movingrect.x=mouseX
movingrect.y= mouseY

if(movingrect.x-fixedrect.x<=movingrect.width/2 + fixedrect.width/2
  && fixedrect.x-movingrect.x<=movingrect.width/2+ fixedrect.width/2
  && movingrect.y-fixedrect.y <=movingrect.height/2 + fixedrect.height/2
  && fixedrect.y-movingrect.y <=movingrect.height/2+ fixedrect.height/2){

    fixedrect.shapeColor="purple"
    movingrect.shapeColor="yellow"
  
  }
  else {
    fixedrect.shapeColor= "lightblue"
    movingrect.shapeColor= "blue"
  }
  drawSprites();
}