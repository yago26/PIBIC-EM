let valoresAngulos, angulos;

function setup() {
  createCanvas(400, 400);

  angulos = [
    new Angulo(0, 40, "90°"),
    new Angulo(90, 52, "75°"),
    new Angulo(180, 90, "60°"),
    new Angulo((width * 2) / 3 - 10, height / 3 + 15, "45°"),
    new Angulo(315, 225, "30°"),
    new Angulo(350, 315, "15°"),
    new Angulo(width - 40, height, "0°"),
  ];

  valoresAngulos = {
    "0°": { seno: sin(0), cosseno: cos(0), tangente: tan(0) },
    "15°": { seno: sin(15), cosseno: cos(15), tangente: tan(15) },
    "30°": { seno: sin(30), cosseno: cos(30), tangente: tan(30) },
    "45°": { seno: sin(45), cosseno: cos(45), tangente: tan(45) },
    "60°": { seno: sin(60), cosseno: cos(60), tangente: tan(60) },
    "75°": { seno: sin(75), cosseno: cos(75), tangente: tan(75) },
    "90°": { seno: sin(90), cosseno: cos(90), tangente: tan(90) },
  };
}

function draw() {
  background(220);
  strokeWeight(0.4);
  fill("white");
  stroke("black");
  circle(0, height, 720);
  for (let angulo of angulos) {
    angulo.desenhar();
    angulo.mostrarAngulo();
    angulo.mostrarValores();
  }
}
