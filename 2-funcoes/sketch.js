let espacamento;
let passos;
let tamanhoLinha = 10;

function setup() {
  createCanvas(400, 400);
  passos = createVector(12, 14);
  espacamento = createVector(width / passos.x, height / passos.y);
}

function draw() {
  background(220);

  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);

  for (let i = 1; i < passos.x; i++) {
    line(
      width / 2,
      i * espacamento.y,
      width / 2 + tamanhoLinha,
      i * espacamento.y
    );
  }
  for (let i = 1; i < passos.y; i++) {
    line(
      i * espacamento.x,
      height / 2,
      i * espacamento.x,
      height / 2 + tamanhoLinha
    );
  }

  drawFunction((x) => -3 * x);
}

function drawFunction(func) {
  let functions = ["2*x+3", "x", "-3*x"];
  let minimo = -2,
    maximo = 2;
  for (let i = minimo; i <= maximo; i++) {
    circle(
      i * espacamento.x + width / 2,
      -func(i) * espacamento.y + height / 2,
      tamanhoLinha
    );
  }
}
