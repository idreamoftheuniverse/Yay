var bg;
var yay;
var yayImage

function preload(){

  yayImage = loadAnimation("yay.png","nay.png")
}
function setup() 
{
  createCanvas(1000,800);
  yay = createSprite(100,300,40,50)
  yay.addAnimation("yay",yayImage)
  yay.scale=0.5

}

function draw() 
{
  background("skyblue");
 
  drawSprites()
}

 

