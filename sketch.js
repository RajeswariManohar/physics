const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var engine,world;
var ball;
function setup() {
  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  var ball_options={
    isStatic:true
  }
  ball=Bodies.circle(200,100,60,ball_options);
  World.add(world,ball);
  console.log(ball);
 
}

function draw() {
  background(0); 
  Engine.update(engine); 
  circle(ball.position.x,ball.position.y,60);
}