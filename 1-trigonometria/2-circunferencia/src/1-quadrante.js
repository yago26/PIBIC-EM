let graus;
let tamanho = 20;

function setup() {
  createCanvas(400, 400);

  graus = [
    new Angulo(0, 40, tamanho, 90),
    new Angulo(90, 52, tamanho, 75),
    new Angulo(180, 90, tamanho, 60),
    new Angulo((width * 2) / 3 - 10, height / 3 + 15, tamanho, 45),
    new Angulo(315, 225, tamanho, 30),
    new Angulo(350, 315, tamanho, 15),
    new Angulo(width - 40, height, tamanho, 0),
  ];
}

function draw() {
  background(220);
  strokeWeight(0.4);
  fill("white");
  stroke("black");
  circle(0, height, 720);
  for (let grau of graus) {
    grau.mostrar();
    grau.mostrarValores();
  }
}
