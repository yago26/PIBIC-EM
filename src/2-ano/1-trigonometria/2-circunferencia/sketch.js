let circ;
function setup() {
  createCanvas(400, 400);
  circ = new Circunferencia(100);
}

function draw() {
  background(255);

  circ.mostrar();
  circ.mostrarVetorLinha();
  circ.mostrarQuadrantes();
}
