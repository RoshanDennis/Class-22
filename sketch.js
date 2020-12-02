const Engine=Matter.Engine
const World= Matter.World
const Bodies= Matter.Bodies

var myengine,myworld,ground,ball




function setup() {
  createCanvas(400,400)
  myengine=Engine.create()
  myworld=myengine.world
  var ground_options={
    isStatic:true
  }
  ground=Bodies.rectangle(100,390,300,50,ground_options)
  World.add(myworld,ground)
  //createSprite(400, 200, 50, 50);
  var ball_options={
    restitution:3
  }
  ball=Bodies.circle(200,200,25,ball_options)
  World.add(myworld,ball)
}

function draw() {
  background(0)
  Engine.update(myengine)  
  rectMode(CENTER)
  //drawSprites()
  rect(ground.position.x,ground.postion.y,300,50)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25)
}