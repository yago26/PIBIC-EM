let triRent;
function setup() {
  createCanvas(400, 400);
  triRent = new TrianguloRetangulo();
}

function draw() {
  background(245);
  triRent.mostrar();
}
