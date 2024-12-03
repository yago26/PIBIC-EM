class FuncTrigonometrica {
  constructor() {
    this.inicio = -360;
    // f(x) = a*sen(b*x + c) + d
  }

  mostrar() {}

  mostrarLinhas() {
    push();
    stroke("gray");
    strokeWeight(0.4);

    for (let i = this.inicio; i <= width; i += width / 30) {
      line(i, 0, i, height);
    }

    for (let i = 0; i <= height; i += height / 10) {
      line(this.inicio, i, width, i);
    }
    pop();
  }
}
