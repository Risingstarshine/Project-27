
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObject;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;
var bobDiameter;

function preload()
{
	//radius = 2;
}

function setup() {
	createCanvas(800, 700);

  bobDiameter = 6;

	engine = Engine.create();
	world = engine.world;

	Engine.run(engine);
	
	//Create the Bodies Here.

	roofObject = new roofClass(400,100,400,20);
	
	bobObject1 = new bob(700,320,70,70);
    bobObject2 = new bob(920,320,70,70);
    bobObject3 = new bob(810, 350, 50, 50);
	bobObject4 = new bob(810, 350, 50, 50);
	bobObject5 = new bob(810, 350, 50, 50);

	rope1 = new Rope(bobObject1.body, roofObject.body, -bobDiameter*2, 0)
	rope2 = new Rope(bobObject2.body, roofObject.body, -bobDiameter*2, 0)
	rope3 = new Rope(bobObject3.body, roofObject.body, -bobDiameter*2, 0)
	rope4 = new Rope(bobObject4.body, roofObject.body, -bobDiameter*2, 0)
	rope5 = new Rope(bobObject5.body, roofObject.body, -bobDiameter*2, 0)
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display(); 

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  //drawSprites();
 
}


function keyPressed() {
    if (keyCode === UP_ARROW) {
      Matter.Body.applyForce(roofObject.body,bobObject1.body.position,{x:855,y:-85});
    }
}
