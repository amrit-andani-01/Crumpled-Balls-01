var ground,dustbin1,dustbin2,dustbin3,paper;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {

}

function setup() {

	createCanvas(800, 700);

	engine = Engine.create();

	world = engine.world;

    ground = new Ground(600,height,1200,20);

	dustbin1 = new Dustbin(680,640,20,100);

	dustbin2 = new Dustbin(500,640,20,100);

	dustbin3 = new Dustbin(590,680,200,20);

	paper = new Paper(700,100,50,50);


	Engine.run(engine);

}


function draw() {

	rectMode(CENTER);

	background(0);

	Engine.update(engine);

	ground.display();

	dustbin1.display();

	dustbin2.display();

	dustbin3.display();

	paper.display();

	drawSprites();

}



