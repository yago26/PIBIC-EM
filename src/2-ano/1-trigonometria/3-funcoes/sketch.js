let func;
let areaUtilizavelCanvas = {
  x: 1440,
  y: 360,
};
const padding = 50;

function setup() {
  createCanvas(
    areaUtilizavelCanvas.x + 2 * padding,
    areaUtilizavelCanvas.y + 2 * padding
  );
  func = new FuncTrigonometrica(areaUtilizavelCanvas, padding);
}

function draw() {
  background(255);
  func.mostrar();
  func.mostrarValores();
  func.definirPonto();
}
