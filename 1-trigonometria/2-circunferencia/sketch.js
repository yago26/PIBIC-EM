let circ;
function setup() {
  createCanvas(400, 400);
  circ = new Circunferencia(180);
}

function draw() {
  background(220);

  circ.mostrar();
  circ.mostrarLinhas();
  circ.renderizarTelaInicial();
  circ.mostrarVetorLinha();

  circ.mostrarQuadrantes();
}
