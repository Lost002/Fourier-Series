let angle = 0.0;
var wave = [];
var slider;


function setup() {
  createCanvas(windowWidth, 400);
  let label = createDiv("Iterations");
  label.id("iterationsLabel");
  slider = createSlider(1,50, 1);
  slider.parent(label);
}

function draw() {
  var iterations = slider.value();

  background(0);

  translate(200, height/2);
  stroke("yellow");
  noFill();

  let x = 0;
  let y = 0;

  for (let i = 0; i < iterations; i++) {
    let prevx = x;
    let prevy = y;
    n = i*2+1;
    let radius = 100 * (4/(n*PI));

    if (radius/25 > 1) {
      strokeWeight(radius/25);
    } else {
      strokeWeight(1);
    }
    
    ellipse(prevx, prevy, radius*2)

    x += radius * (cos(n * angle));
    y += radius * (sin(n * angle));

    line(prevx, prevy, x, y);


  }

  wave.unshift(y);
  line(x, y, 600, wave[0]);

  if (iterations <= 10) {
    strokeWeight(5);
  } else if (iterations <= 20) {
    strokeWeight(4);
  } else if (iterations <= 30) {
    strokeWeight(3);
  } else if (iterations <= 40) {
    strokeWeight(2);
  } else {
    strokeWeight(1);
  }

    beginShape();
  for (let i = 0.0; i < wave.length; i++) {
    vertex((i/4)+600, wave[i]);
  }
  endShape();

  if (wave.length > 2000) {
    wave.pop();
  }


  angle -= .01
}
 