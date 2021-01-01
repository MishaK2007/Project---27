
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(400, 400);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  roofObject = new Roof(150,100,width,height);

	bobObject1 = new Bob(100,300,50);
	bobObject2 = new Bob(150,300,50);
	bobObject3 = new Bob(200,300,50);
	bobObject4 = new Bob(250,300,50);
  bobObject5 = new Bob(300,300,50);
  
  rope1 = new Rope(bobObject1.body,roofObject.body,bobObject1*2,0);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("black");

  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  drawSprites();
}

