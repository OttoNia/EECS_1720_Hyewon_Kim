
var w;

function setup() {
  createCanvas(640, 360);
  // Make a Walker object
  w = new Walker();
}

function draw() {
  background(50);
  // Update and display object
  w.update();
  w.display();
  
  let c = color('Aquamarine');
    fill(c);
    rect(50, 50, 250, 150); 
}


function Walker() {

  // Start Walker in center
  this.pos = createVector(width / 2, height / 2);

  this.update = function() {
    // Move Walker randomly
    var vel = createVector(random(-5, 5), random(-5, 5));
    this.pos.add(vel);
  }

  this.display = function() {
    // Draw Walker as circle
    fill(125,60,122);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}