class FuncTrigonometrica {
  constructor() {}

  mostrar() {
    push();
    fill("black");
    stroke("black");
    let x, y;
    pop();
  }

  mostrarLinhas() {
    push();
    stroke("gray");
    strokeWeight(0.4);

    for (let i = 0; i <= width; i += height / 8) {
      line(i, 0, i, height);
    }
    for (let i = 0; i <= height; i += height / 8) {
      line(0, i, width, i);
    }

    stroke("purple");
    strokeWeight(0.8);

    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);

    this._mostrarSetas(7.5);
    pop();
  }

  _mostrarSetas(espacamento) {
    push();
    fill("purple");
    stroke("purple");
    strokeWeight(1.6);

    // Seno
    line(width / 2, 1, width / 2 - espacamento / 2, espacamento);
    line(width / 2, 1, width / 2 + espacamento / 2, espacamento);

    // Cosseno
    line(
      width - 1,
      height / 2,
      width - espacamento,
      height / 2 - espacamento / 2
    );
    line(
      width - 1,
      height / 2,
      width - espacamento,
      height / 2 + espacamento / 2
    );
    pop();
  }
}
