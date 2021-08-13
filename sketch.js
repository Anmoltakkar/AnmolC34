const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var box1,box2,box3,box4,box5
var ball
var rope

function preload() {
   
    
}

function setup(){
    var canvas = createCanvas(3000,800);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(1500,750,3000,20)
    box1 = new Box(900,100,70,70);
    box2 = new Box(900,100,70,70);
    box3 = new Box(900,100,70,70);
    box4 = new Box(900,100,70,70);
    box5 = new Box(900,100,70,70);
    ball = new Ball(400,500,70,70)
    rope = new Rope(ball.body,{x:700,y:300})
}

function draw(){
    background("white")
    Engine.update(engine)
    ground.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ball.display();
    rope.display();
}

function mouseDragged(){
    Matter.body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
