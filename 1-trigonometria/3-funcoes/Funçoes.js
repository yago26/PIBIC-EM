class FuncTrigonometrica {
  constructor() {}

  mostrar() {}

  mostrarLinhas() {
    push();
    stroke("gray");
    strokeWeight(0.4);

    for (let i = 0; i <= width; i += width / 10) {
      line(i, 0, i, height);
    }

    for (let i = 0; i <= height; i += height / 10) {
      line(0, i, width, i);
    }
    pop();
  }
}
