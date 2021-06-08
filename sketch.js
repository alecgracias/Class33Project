
const Bodies = Matter.Bodies
const Engine = Matter.Engine
const World = Matter.World

var bgImg
 snow = []
var snow
var snow1 = []

var ground


function preload(){
  bgImg=loadImage("snow3.jpg")
}



function setup() {
  createCanvas(1400,700);

  engine = Engine.create();
  world  = engine.world; 
   
  imageMode(CENTER)

  ground = new Ground()
  
}

function draw() {

  Engine.update(engine);
  background("pink");  
  image(bgImg,700,350,2000,1000)

  if(frameCount%10===0){
   snow.push(new Snow(random(width/2-10 , width/2+10)))
  }

  if(frameCount%30===0){
    snow1.push(new Snow2(random(width/2-10 , width/2+10)))
   }


  for(var a = 0; a < snow.length; a++){
    snow[a].display();
  }

  for(var a = 0; a < snow1.length; a++){
    snow1[a].display();
  }

 /* if(snow.collied(ground)){
     snow.destroyEach()
  }*/

  ground.display()

  drawSprites();
}