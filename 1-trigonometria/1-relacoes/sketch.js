let triRet;
function setup() {
  createCanvas(400, 400);
  triRet = new TrianguloRetangulo();
}

function draw() {
  background(245);
  triRet.mostrar();
}
