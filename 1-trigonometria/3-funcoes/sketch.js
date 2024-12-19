let func;

function setup() {
  createCanvas(1080, 360);
  func = new FuncTrigonometrica();
}

function draw() {
  background(255);
  func.mostrar();
  func.mostrarLinhas();
}
