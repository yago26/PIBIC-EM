let func;

function setup() {
  createCanvas(400, 400);
  func = new FuncTrigonometrica();
}

function draw() {
  background(255);
  func.mostrarLinhas();
}
