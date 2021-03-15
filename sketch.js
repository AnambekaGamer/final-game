
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var room1;
var zombie1,zombie1Img;
var zombie2,zombie2Img;
var zombie3,zombie3Img;
var zombie4,zombie4Img;
var zombie5,zombie5Img;
var zombie6,zombie6Img;
function preload(){
	room1Img=loadImage("sprites/hallway.jpg");
  zombie1Img=loadImage("sprites/zombie1.png");
  zombie2Img=loadImage("sprites/zombie2.png");
  zombie3Img=loadImage("sprites/zombie3.png");
  zombie4Img=loadImage("sprites/zombie4.png");
  zombie5Img=loadImage("sprites/zombie5.png");
  zombie6Img=loadImage("sprites/zombie6.png");
  }

function setup() {
	createCanvas(800, 800);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
     zombie1=new Zombie(300,300,60,60);
     zombie2=new Zombie(250,400,30,30);
     zombie3=new Zombie(300,400,40,40);
     zombie4=new Zombie(350,400,30,10);
     zombie5=new Zombie(400,450,70,70);
     zombie6=new Zombie(450,500,50,50);
  	Engine.run(engine);
  
}


function draw() {
  background(room1Img);
  Engine.update(engine);
  zombie1.display();
  zombie2.display();
  zombie3.display();
  zombie4.display();
  zombie5.display();
  zombie6.display();
  //drawSprites();
 
}



