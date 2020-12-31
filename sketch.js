const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Constraint=Matter.Constraint;


var myEngine,myWorld;

var ball1,ball2,ball3;
var rope1,rope2,rope3;
var roof;

function setup(){
  var canvas=createCanvas(600,600);
  myEngine=Engine.create();
  myWorld=myEngine.world;

  roof = new Roof();

  ball1  = new Ball(250,400);
  ball2  = new Ball(300,400);
  ball3  = new Ball(350,400);

  //roof = new Roof();

  rope1= new Rope(ball1.body,roof.body);
  rope2= new Rope(ball2.body,roof.body);
  rope3= new Rope(ball3.body,roof.body);

  

  /*rect1=Bodies.rectangle(200,100,50,50);
  World.add(myWorld,rect1);
  console.log(rect1);*/

}
function draw(){
  rectMode(CENTER);
  background(0);
  Engine.update(myEngine);
  roof.display();

    ball1.display();
    ball2.display();
    ball3.display();

  rope1.display();
 rope2.display();
  rope3.display();
  
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-50});
  }
}