class Tela {
  #ajustarDimensoesCanvas;
  constructor(metodo) {
    this.#ajustarDimensoesCanvas = metodo;
  }

  mostrarValores() {
    push();

    pop();
  }

  mostrarGrades() {
    push();
    this.#ajustarDimensoesCanvas();

    stroke("gray");
    strokeWeight(0.4);

    // LINHA
    for (let x = -width / 2; x <= width / 2; x += width / 16) {
      line(x, 0, x, height);
    }
    // COLUNA
    for (let y = 0; y <= height; y += width / 16) {
      line(-width / 2, y, width / 2, y);
    }
    pop();
  }

  mostrarLinhas() {
    push();
    this.#ajustarDimensoesCanvas();
    stroke("purple");
    strokeWeight(0.8);
    // X
    this._linhaPontilhada(-width / 2, height / 2, width / 2, height / 2);
    // Y
    this._linhaPontilhada(0, 0, 0, height);
    this._mostrarSetas(10);
    pop();
  }

  sobCanvas() {
    return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
  }

  _mostrarSetas(espacamento) {
    push();
    fill("purple");
    stroke("purple");
    strokeWeight(1.6);

    // X
    beginShape();
    vertex(width / 2, height / 2);
    vertex(width / 2 - espacamento, height / 2 - espacamento / 2);
    vertex(width / 2 - espacamento, height / 2 + espacamento / 2);
    vertex(width / 2, height / 2);
    endShape();

    // Y
    beginShape();
    vertex(0, 0);
    vertex(-espacamento / 2, espacamento);
    vertex(espacamento / 2, espacamento);
    vertex(0, 0);
    endShape();
    pop();
  }

  _linhaPontilhada(x1, y1, x2, y2) {
    push();
    fill("purple");
    stroke("purple");
    let distancia = dist(x1, y1, x2, y2);

    let numPontos = floor(distancia / 5);

    let dx = (x2 - x1) / numPontos;
    let dy = (y2 - y1) / numPontos;

    for (let i = 0; i <= numPontos; i++) {
      let x = x1 + dx * i;
      let y = y1 + dy * i;
      circle(x, y, 2);
    }
    pop();
  }
}
