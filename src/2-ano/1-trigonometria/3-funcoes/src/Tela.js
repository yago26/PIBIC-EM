class Tela {
  #ajustarDimensoesCanvas;
  constructor(metodo) {
    this.#ajustarDimensoesCanvas = metodo;

    const divAgrupador = document.getElementById("agrupador");
    const sectionConfigs = document.getElementById("configs");
    const main = document.querySelector("main");
    divAgrupador.insertBefore(main, sectionConfigs);

    const canvas = document.querySelector("canvas");
    canvas.addEventListener("wheel", zoom);

    function zoom(event) {
      event.preventDefault();
      if (event.deltaY > 0) {
        ampliar.click();
      } else {
        reduzir.click();
      }
    }
  }

  mostrarValores() {
    push();

    pop();
  }

  mostrarGrades(valorZoom) {
    push();
    this.#ajustarDimensoesCanvas();

    stroke("gray");
    strokeWeight(0.4);

    this._mostrarMoldura();

    let espacamento = width / 2 / 8;

    switch (Math.sign(valorZoom)) {
      case -1:
        for (let i = 0; i < abs(valorZoom); i++) {
          espacamento *= 2;
        }
        break;
      case 1:
        for (let i = 0; i < valorZoom; i++) {
          espacamento /= 2;
        }
        break;
    }

    // LINHA
    for (let x = -width / 2 + espacamento; x < width / 2; x += espacamento) {
      line(x, 0, x, height);
    }
    // COLUNA
    for (let y = espacamento; y < height; y += espacamento) {
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

  _mostrarMoldura() {
    push();
    // LINHA
    line(-width / 2, 0, width / 2, 0);
    line(-width / 2, height, width / 2, height);
    // COLUNA
    line(-width / 2, 0, -width / 2, height);
    line(width / 2, 0, width / 2, height);
    pop();
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
