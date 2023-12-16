function setup() {
  createCanvas(600, 600, WEBGL);
  angleMode(DEGREES);
}

function draw() {
  background(30);
  rotateX(60);
  noFill();

  for (let i = 0; i < 50; i++) {
    let r = map(sin(frameCount / 2), -1, 1, 100, 200);
    let g = map(i, 0, 50, 100, 200);
    let b = map(cos(frameCount / 2), -1, 1, 200, 100);

    stroke(r, g, b);

    rotate(frameCount / 20);

    beginShape();
    for (let j = 0; j < 360; j += 90) {
      let rad = i * 3;
      let x = rad * cos(j);
      let y = rad * sin(j);
      let z = sin(frameCount * 2 + i * 5) * 50;

      vertex(x, y, z);
    }
    endShape();
  }
}
