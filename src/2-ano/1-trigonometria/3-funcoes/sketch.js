let func;
const tam = 360;
const margem = 50;

function setup() {
  createCanvas(tam * 4, tam);
  func = new FuncTrigonometrica();
}

function draw() {
  background(255);
  func.mostrar();
  func.mostrarValores();
}
