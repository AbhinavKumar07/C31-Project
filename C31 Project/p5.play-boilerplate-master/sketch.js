const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = []
var divisions = [];

var divisionHeight = 400;

var ground1;

function setup() {
  createCanvas(480,800);

  ground1 = new ground(240,795,480,9);

  
}

function draw() {
  background("black");  
  
  ground1.display();
  
  
  for(var k = 0; k <= width ,k = k + 80;) {
    divisions.push(new division(k , height-divisionHeight/2 , 10,divisionHeight));
  }

  for (var x = 40; x <= width; x = x + 50) {
    plinkos.push(new plinko(x,75));
  }

  for (var x = 15; x <= width; x = x + 40) {
    plinkos.push(new plinko(x,125));
  }

  for (var x = 40; x <= width; x = x + 50) {
    plinkos.push(new plinko(x,175));
  }

  for (var x = 15; x <= width; x = x + 40) {
    plinkos.push(new plinko(x,225))
  }

  for (var x = 40; x <= width; x = x + 50) {
    plinkos.push(new plinko(x,275))
  }

  for (var x = 15; x <= width; x = x + 40) {
    plinkos.push(new plinko(x,325))
  }

  for (var x = 40; x <= width; x = x + 50) {
    plinkos.push(new plinko(x,375))
  }

  if(World.frameCount % 50 === 0) {
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }

  for(var j =  0; j < particles.length; j + 1) {
    particles[j].display();
  }

  for(var d =  0; d < particles.length; d + 1) {
    divisions[d].display();
  }

  for(var p =  0; p < particles.length; p + 1) {
    plinkos[p].display();
  }

  drawSprites();
}