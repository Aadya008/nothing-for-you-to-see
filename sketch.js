
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var flat, rightSide, leftSide;
var Ball;


function setup() {
	createCanvas(800, 700);
	
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.World;
	flat =new Ground(200,390,400,20);
	rightSide = new Ground(390,200,20,400);
	leftSide = new Ground(10,200,20,400);
	var Ball_options={
	
		restitution:0.3,
		friction:0,
		density:1.2 
	}


	

	//Create the Bodies Here.no mister matter!!!

	Ball = Bodies.circle(200,100,20, Ball_options);
	World.add(world,Ball);


	Engine.run(Engine);
  

}



function draw() {
 
  background(0);
  flat.display();
rightSide.display();
leftSide.display();

ellipse(Ball.position.x, Ball.position.y, 20)

  drawSprites();
 
}
/*
function hForce(){
	Matter.Body.applyForce(Ball,{x:0, y:0}, {x:0.05, y:0});
  }
*/
  function keyPressed(){
if(keyCode == UP_ARROW ){
	Matter.Body.applyForce(Ball,{x:0, y:0}, {x:0, y:-0.05});

}

	
 

}

