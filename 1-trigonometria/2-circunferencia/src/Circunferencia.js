class Circunferencia {
  constructor(diametro) {
    this.diametro = diametro;
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
          0,
          { x: 10, y: 5 }
        ),
        new Angulo(
          width / 2 + width / 5,
          height / 2 - 41,
          this.pontoTamanho,
          30,
          { x: 5, y: -10 }
        ),
        new Angulo(
          width / 2 + width / 6,
          height / 2 - 60,
          this.pontoTamanho,
          45,
          { x: 5, y: -10 + 1 }
        ),
        new Angulo(
          width / 2 + width / 8,
          height / 2 - 75,
          this.pontoTamanho,
          60,
          { x: 5, y: -10 }
        ),
        new Angulo(
          width / 2,
          height / 2 - this.diametro / 2,
          this.pontoTamanho,
          90,
          { x: -10, y: -10 }
        ),
      ],
      2: [
        new Angulo(
          width / 2,
          height / 2 - this.diametro / 2,
          this.pontoTamanho,
          90,
          { x: -10, y: -10 }
        ),
        new Angulo(
          width / 2 - width / 8,
          height / 2 - 75,
          this.pontoTamanho,
          120,
          { x: -35, y: -10 }
        ),
        new Angulo(
          width / 2 - width / 6,
          height / 2 - 60,
          this.pontoTamanho,
          135,
          { x: -35, y: -10 + 1 }
        ),
        new Angulo(
          width / 2 - width / 5,
          height / 2 - 42,
          this.pontoTamanho,
          150,
          { x: -35, y: -10 }
        ),
        new Angulo(
          width / 2 - this.diametro / 2,
          height / 2,
          this.pontoTamanho,
          180,
          { x: -45, y: 5 }
        ),
      ],
      3: [
        new Angulo(
          width / 2 - this.diametro / 2,
          height / 2,
          this.pontoTamanho,
          180,
          { x: -45, y: 5 }
        ),
        new Angulo(
          width / 2 - width / 5,
          height / 2 + 41,
          this.pontoTamanho,
          210,
          { x: -35, y: 25 }
        ),
        new Angulo(
          width / 2 - width / 6,
          height / 2 + 60,
          this.pontoTamanho,
          225,
          { x: -35, y: 25 - 1 }
        ),
        new Angulo(
          width / 2 - width / 8,
          height / 2 + 75,
          this.pontoTamanho,
          240,
          { x: -35, y: 25 }
        ),
        new Angulo(
          width / 2,
          height / 2 + this.diametro / 2,
          this.pontoTamanho,
          270,
          { x: -15, y: 25 }
        ),
      ],
      4: [
        new Angulo(
          width / 2,
          height / 2 + this.diametro / 2,
          this.pontoTamanho,
          270,
          { x: -15, y: 25 }
        ),
        new Angulo(
          width / 2 + width / 8,
          height / 2 + 75,
          this.pontoTamanho,
          300,
          { x: 0, y: 25 }
        ),
        new Angulo(
          width / 2 + width / 6,
          height / 2 + 60,
          this.pontoTamanho,
          315,
          { x: 0, y: 25 }
        ),
        new Angulo(
          width / 2 + width / 5,
          height / 2 + 40,
          this.pontoTamanho,
          330,
          { x: 0, y: 25 }
        ),
        new Angulo(
          width / 2 + this.diametro / 2,
          height / 2,
          this.pontoTamanho,
          360,
          { x: 10, y: 5 }
        ),
      ],
    };
  }

  mostrar() {
    push();
    stroke("black");
    circle(width / 2, height / 2, this.diametro);
    pop();
  }

  mostrarLinhas() {
    push();
    stroke("red");
    strokeWeight(0.4);
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
    pop();
  }

  renderizarTelaInicial() {
    this.telaInicial.mostrar();
  }

  mostrarVetorLinha() {
    if (this.telaInicial.sobCanvas()) {
      this.vetorLinha.mostrar();
    }
  }

  mostrarQuadrantes() {
    if (!this.telaInicial.sobCanvas()) return;

    if (mouseX >= width / 2 && mouseX < width && mouseY <= height / 2) {
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
}
