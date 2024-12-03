let func;

function setup() {
  createCanvas(1080, 360);
  func = new FuncTrigonometrica();
}

function draw() {
  background(255);
  translate(360, 0);
  func.mostrarLinhas();
  func.mostrar();
}
