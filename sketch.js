const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1 = new Ground(630, 600, 320, 20);
	ground2 = new Ground(1300, 300, 350, 20);
	ground3 = new Ground(800, 690, 1600, 20);

	box1 = new Box1(650, 565, 50, 50);
	box2 = new Box1(620, 565, 50, 50);
	box3 = new Box1(590, 565, 50, 50);
  box4 = new Box1(570, 565, 50, 50);
	box5 = new Box1(690, 565, 50, 50);

	box6 = new Box2(650, 545, 50, 50);
	box7 = new Box2(629, 545, 50, 50);
	box8 = new Box2(605, 545, 50, 50);

	box9 = new Box3(635, 525, 50, 50);
	box10 = new Box3(615, 525, 50, 50);

	box11 = new Box4(620, 420, 50, 50);

  box12 = new Box1(1300, 260, 50, 50);
	box13 = new Box1(1250, 260, 50, 50);
	box14 = new Box1(1270, 260, 50, 50);
  box15 = new Box1(1320, 260, 50, 50);
  box16 = new Box1(1340, 260, 50, 50);

  box17 = new Box2(1250, 230, 50, 50);
	box18 = new Box2(1300, 230, 50, 50);
  box19 = new Box2(1320, 230, 50, 50);
  
  box20 = new Box3(1280, 200, 50, 50);
  box21 = new Box3(1300, 200, 50, 50);
  
  box22 = new Box4(1290, 170, 50, 50);

  //box23 = new Box5(50, 50, 50);

  

  polygon = new Polygon(100, 400, 50);

  slingShot = new SlingShot(polygon.body, {x : 100, y : 200});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("yellow");
  
  ground1.display();
  ground2.display();
  ground3.display();

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  //box23.display();
  polygon.display();
  slingShot.display();
}

function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

