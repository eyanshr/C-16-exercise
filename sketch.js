
var box1;
var box2;

function setup() {
  createCanvas(800, 400);
  box1 = new Box(350,300,50,50);
  box2 = new Box(240,100,50,100);
}

function draw() {
  background(0);
  box1.display();
  box2.display();
  
}
