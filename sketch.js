// asteroid Mithra from NASA
// https://nasa3d.arc.nasa.gov/detail/mithra

const sketch1 = (p) => {
  let x = 100;
  let y = 100;

  p.preload = () => {
    blob = p.loadModel("asteroid.obj");
  };
  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight, p.WEBGL);
  };

  p.draw = () => {
    // p.background(0);
    p.clear();
    p.scale(p.width / 5);
    p.rotateX(p.frameCount * 0.006);
    p.rotateY(p.frameCount * 0.004);
    p.stroke(255);
    // p.noFill();
    p.fill(255, 30);
    // p.noStroke();
    p.model(blob);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

const sketch2 = (p) => {
  let t = 0;
  let rez = 0.003;
  let scale;

  p.setup = () => {
    p.createCanvas(p.windowWidth, p.windowHeight);
    p.colorMode(p.HSB);
    scale = p.height / 2;
  };

  p.draw = () => {
    // p.background(63, 91, 116);
    p.clear();
    p.noStroke();
    for (i = 0; i < p.width; i += scale / 100) {
      for (j = 0; j < p.height; j += scale) {
        var n = p.noise(i * rez, j * rez, t);
        var n1 = p.noise(j * rez, t, i * rez);
        var n2 = p.noise(t, j * rez, i * rez);
        p.fill(n * 40 + 207, n1 * 100 + 50, n2 * 100 * 1.8);
        p.rect(i, j, scale / 8, scale);
      }
      t += 0.00004;
    }
  };

  p.windowResized = () => {
    p.resizeCanvas(p.windowWidth, p.windowHeight);
  };
};

let myp52 = new p5(sketch2);
let myp5 = new p5(sketch1);

// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
//   video.size(width, height);
// }
