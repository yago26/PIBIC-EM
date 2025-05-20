class Tela {
  constructor(areaUtilizavelCanvas, padding) {
    (this.areaUtilizavelCanvas = areaUtilizavelCanvas),
      (this.padding = padding);

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

  mostrarGrades(valorZoom) {
    push();

    stroke("gray");
    strokeWeight(0.4);

    let espacamento = this.areaUtilizavelCanvas.x / 2 / 8;

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
    for (let x = this.padding; x <= width - this.padding; x += espacamento) {
      line(x, this.padding - 30, x, height - this.padding + 30);
    }
    // COLUNA
    for (let y = this.padding; y <= height - padding; y += espacamento) {
      line(this.padding - 30, y, width - this.padding + 30, y);
    }

    pop();
  }

  mostrarLinhas() {
    push();
    //this.#ajustarDimensoesCanvas();
    stroke("purple");
    strokeWeight(0.8);
    // X
    this._linhaPontilhada(
      this.padding,
      height / 2,
      width - this.padding,
      height / 2
    );
    // Y
    this._linhaPontilhada(
      width / 2,
      this.padding,
      width / 2,
      height - this.padding
    );
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

    textSize(20);
    textAlign(CENTER, CENTER);
    // X
    text("x", width - this.padding / 1.75, height / 2);
    beginShape();
    vertex(width - this.padding / 1.35, height / 2);
    vertex(
      width - this.padding / 1.35 - espacamento,
      height / 2 - espacamento / 2
    );
    vertex(
      width - this.padding / 1.35 - espacamento,
      height / 2 + espacamento / 2
    );
    vertex(width - this.padding / 1.35, height / 2);
    endShape();

    // Y
    text("y", width / 2, this.padding / 1.5);
    beginShape();
    vertex(width / 2, this.padding);
    vertex(width / 2 - this.padding / 8, espacamento + this.padding);
    vertex(width / 2 + this.padding / 8, espacamento + this.padding);
    vertex(width / 2, this.padding);
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
