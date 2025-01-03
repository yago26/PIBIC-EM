let func;
let tamanho = 360;
let espacamento = 50;

function setup() {
  createCanvas(tamanho * 4, tamanho);
  func = new FuncTrigonometrica();
}

function draw() {
  background(255);
  func.mostrar();
  func.mostrarValores();
}
