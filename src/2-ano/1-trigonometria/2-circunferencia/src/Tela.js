class Tela {
  constructor(raio) {
    this.raio = raio;
    this.pontoTamanho = 10;

    const divAgrupador = document.getElementById("agrupador");
    const hrDivisor = document.getElementById("divisorPrincipal");
    const main = document.querySelector("main");
    divAgrupador.insertBefore(main, hrDivisor);
  }

  mostrarValores() {
    push();
    textAlign(CENTER, CENTER);
    if (this.sobCanvas() || document.getElementById("modoQuadrantes").checked) {
      this._mostrarSetas(7.5);

      textSize(14);
      fill("gray");
      stroke("gray");

      text("SEN", width / 2, 15);
      text("COS", width - 20, height / 2 + 1);
      text("TAN", width / 2 + this.raio, 15);

      textSize(16);
      fill("black");
      stroke("black");

      // SENO
      text("1", width / 2, height / 2 - this.raio + this.pontoTamanho * 1.5);
      text("-1", width / 2, height / 2 + this.raio - this.pontoTamanho * 1.5);

      // COSSENO
      text("1", width / 2 + this.raio - this.pontoTamanho * 1.5, height / 2);
      text("-1", width / 2 - this.raio + this.pontoTamanho * 1.5, height / 2);
    } else {
      textSize(16);

      this._mostrarSetas(10);

      fill("red");
      stroke("red");
      text("SEN", width / 2, 15);

      fill("blue");
      stroke("blue");
      text("COS", width - 20, height / 2 + 1.5);

      fill("green");
      stroke("green");
      text("TAN", width / 2 + this.raio, 15);

      fill("black");
      stroke("black");
      textSize(18);
      // SENO
      circle(width / 2, height / 2 - this.raio, this.pontoTamanho);
      text("1", width / 2, height / 2 - this.raio - this.pontoTamanho * 2);

      circle(width / 2, height / 2 + this.raio, this.pontoTamanho);
      text("-1", width / 2, height / 2 + this.raio + this.pontoTamanho * 2.5);

      // COSSENO
      circle(width / 2 - this.raio, height / 2, this.pontoTamanho);
      text("1", width / 2 + this.raio + this.pontoTamanho * 2, height / 2);

      circle(width / 2 + this.raio, height / 2, this.pontoTamanho);
      text("-1", width / 2 - this.raio - this.pontoTamanho * 2.5, height / 2);
    }
    pop();
  }

  mostrarGrades() {
    push();
    stroke("gray");
    strokeWeight(0.4);

    for (let x = 0; x <= width; x += this.raio / 2) {
      line(x, 0, x, height);
    }
    for (let y = 0; y <= height; y += this.raio / 2) {
      line(0, y, width, y);
    }
    pop();
  }

  mostrarLinhas() {
    push();
    stroke("purple");
    strokeWeight(0.8);
    // SENO
    line(width / 2, 20 + 7, width / 2, height);
    // COSSENO
    line(0, height / 2, width - this.raio / 2 + 6, height / 2);
    // TANGENTE
    line(width / 2 + this.raio, 0, width / 2 + this.raio, height);
    pop();
  }

  sobCanvas() {
    return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
  }

  _mostrarSetas(espacamento) {
    push();
    noFill();
    stroke("purple");
    strokeWeight(1.6);

    // SENO
    beginShape();
    vertex(width / 2 - espacamento / 2, 20 + 7 + espacamento);
    vertex(width / 2, 20 + 7);
    vertex(width / 2 + espacamento / 2, 20 + 7 + espacamento);
    endShape();

    // COSSENO
    beginShape();
    vertex(width - 40 - espacamento, height / 2 - espacamento / 2);
    vertex(width - 40, height / 2);
    vertex(width - 40 - espacamento, height / 2 + espacamento / 2);
    endShape();
    pop();
  }
}
