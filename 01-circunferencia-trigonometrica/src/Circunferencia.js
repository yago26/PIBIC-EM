class Circunferencia {
  constructor(diametro) {
    this.diametro = diametro;
    this.sobAngulo = false;
    this.vetorLinha = new VetorLinha(
      width / 2,
      height / 2,
      this.diametro / 2,
      "orange"
    );
    this.telaInicial = new TelaInicial(this.diametro, 10);
    this.pontoTamanho = 7.5;
    this.quadrantes = {
      1: [
        new Angulo(
          width / 2 + this.diametro / 2,
          height / 2,
          this.pontoTamanho,
          0
        ),
        new Angulo(
          width / 2 + width / 5,
          height / 2 - 40,
          this.pontoTamanho,
          30
        ),
        new Angulo(
          width / 2 + width / 6,
          height / 2 - 60,
          this.pontoTamanho,
          45
        ),
        new Angulo(
          width / 2 + width / 8,
          height / 2 - 75,
          this.pontoTamanho,
          60
        ),
        new Angulo(
          width / 2,
          height / 2 - this.diametro / 2,
          this.pontoTamanho,
          90
        ),
      ],
      2: [
        new Angulo(
          width / 2,
          height / 2 - this.diametro / 2,
          this.pontoTamanho,
          90
        ),
        new Angulo(
          width / 2 - width / 8,
          height / 2 - 75,
          this.pontoTamanho,
          120
        ),
        new Angulo(
          width / 2 - width / 6,
          height / 2 - 60,
          this.pontoTamanho,
          135
        ),
        new Angulo(
          width / 2 - width / 5,
          height / 2 - 40,
          this.pontoTamanho,
          150
        ),
        new Angulo(
          width / 2 - this.diametro / 2,
          height / 2,
          this.pontoTamanho,
          180
        ),
      ],
      3: [
        new Angulo(
          width / 2 - this.diametro / 2,
          height / 2,
          this.pontoTamanho,
          180
        ),
        new Angulo(
          width / 2 - width / 5,
          height / 2 + 40,
          this.pontoTamanho,
          210
        ),
        new Angulo(
          width / 2 - width / 6,
          height / 2 + 60,
          this.pontoTamanho,
          225
        ),
        new Angulo(
          width / 2 - width / 8,
          height / 2 + 75,
          this.pontoTamanho,
          240
        ),
        new Angulo(
          width / 2,
          height / 2 + this.diametro / 2,
          this.pontoTamanho,
          270
        ),
      ],
      4: [
        new Angulo(
          width / 2,
          height / 2 + this.diametro / 2,
          this.pontoTamanho,
          270
        ),
        new Angulo(
          width / 2 + width / 8,
          height / 2 + 75,
          this.pontoTamanho,
          300
        ),
        new Angulo(
          width / 2 + width / 6,
          height / 2 + 60,
          this.pontoTamanho,
          315
        ),
        new Angulo(
          width / 2 + width / 5,
          height / 2 + 40,
          this.pontoTamanho,
          330
        ),
        new Angulo(
          width / 2 + this.diametro / 2,
          height / 2,
          this.pontoTamanho,
          360
        ),
      ],
    };
  }

  mostrar() {
    fill("white");
    stroke("black");
    circle(width / 2, height / 2, this.diametro);
  }

  mostrarLinhas() {
    stroke("red");
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
  }

  renderizarTelaInicial() {
    if (!this.sobCanvas()) {
      this.telaInicial.mostrar();
    }
  }

  mostrarVetorLinha() {
    if (this.sobCanvas()) {
      this.vetorLinha.mostrar();
    }
  }

  mostrarQuadrantes() {
    if (!this.sobCanvas()) return;

    if (mouseX >= width / 2 && mouseX < width && mouseY <= height / 2) {
      if (mouseIsPressed) window.location = "quadrantes/1-quadrante.html";
      for (let graus of this.quadrantes[1]) {
        graus.mostrar();
        graus.mostrarValores();
      }
    } else if (mouseX <= width / 2 && mouseY <= height / 2) {
      for (let graus of this.quadrantes[2]) {
        graus.mostrar();
        graus.mostrarValores();
      }
    } else if (mouseX <= width / 2 && mouseY >= height / 2 && mouseY < height) {
      for (let graus of this.quadrantes[3]) {
        graus.mostrar();
        graus.mostrarValores();
      }
    } else if (
      mouseX >= width / 2 &&
      mouseX < width &&
      mouseY >= height / 2 &&
      mouseY < height
    ) {
      for (let graus of this.quadrantes[4]) {
        graus.mostrar();
        graus.mostrarValores();
      }
    }
  }

  sobCanvas() {
    return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
  }
}
