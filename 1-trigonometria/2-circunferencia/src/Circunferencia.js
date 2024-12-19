class Circunferencia {
  constructor(raio) {
    this.raio = raio;
    this.vetorLinha = new VetorLinha(width / 2, height / 2, raio, "orange");
    this.telaInicial = new TelaInicial(raio * 2);
    this.quadrantes = [
      [
        new Angulo(raio, 0),
        new Angulo(raio, 30),
        new Angulo(raio, 45),
        new Angulo(raio, 60),
        new Angulo(raio, 90),
      ],
      [
        new Angulo(raio, 90),
        new Angulo(raio, 120),
        new Angulo(raio, 135),
        new Angulo(raio, 150),
        new Angulo(raio, 180),
      ],
      [
        new Angulo(raio, 180),
        new Angulo(raio, 210),
        new Angulo(raio, 225),
        new Angulo(raio, 240),
        new Angulo(raio, 270),
      ],
      [
        new Angulo(raio, 270),
        new Angulo(raio, 300),
        new Angulo(raio, 315),
        new Angulo(raio, 330),
        new Angulo(raio, 360),
      ],
    ];
  }

  mostrar() {
    push();
    stroke("black");
    circle(width / 2, height / 2, this.raio * 2);
    pop();
  }

  mostrarLinhas() {
    push();
    stroke("gray");
    strokeWeight(0.4);
    for (let i = 0; i <= width; i += this.raio / 2) {
      line(i, 0, i, height);
    }
    for (let i = 0; i <= height; i += this.raio / 2) {
      line(0, i, width, i);
    }

    stroke("purple");
    strokeWeight(0.8);
    line(width / 2, 27, width / 2, height);
    line(0, height / 2, width - 44, height / 2);
    pop();
  }

  renderizarTelaInicial() {
    this.telaInicial.mostrar();
  }

  mostrarVetorLinha() {
    if (
      this.telaInicial.sobCanvas() &&
      !document.getElementById("modoQuadrantes").checked
    ) {
      this.vetorLinha.mostrar();
      this.vetorLinha.mostrarAngulo();
      this.vetorLinha.mostrarLinhas();
      this.vetorLinha.mostrarPonto();
    }
  }

  mostrarQuadrantes() {
    if (document.getElementById("modoQuadrantes").checked) {
      push();
      let espacamento = this.raio / 3.5;

      textSize(18);
      textAlign(CENTER, CENTER);

      fill("orange");
      stroke("orange");

      // QUADRANTES
      text("I", width / 3.25 + width / 2, height / 5);
      text("II", width / 5, height / 5);
      text("III", width / 5, height / 3.25 + height / 2);
      text("IV", width / 3.25 + width / 2, height / 3.25 + height / 2);

      // POSITIVOS
      fill("blue");
      stroke("blue");

      text(
        "+ Sen",
        width / 2 - this.raio / 3,
        height / 2 - (4 * this.raio) / 6
      );

      text(
        "Sen +",
        width / 2 + this.raio / 3,
        height / 2 - (4 * this.raio) / 6
      );
      text(
        "Cos +",
        width / 2 + this.raio / 3,
        height / 2 - (4 * this.raio) / 6 + espacamento
      );
      text(
        "Tan +",
        width / 2 + this.raio / 3,
        height / 2 - (4 * this.raio) / 6 + espacamento * 2
      );

      text(
        "+ Tan",
        width / 2 - this.raio / 3,
        height / 2 + this.raio / 8 + espacamento * 2
      );

      text(
        "Cos +",
        width / 2 + this.raio / 3,
        height / 2 + this.raio / 8 + espacamento
      );

      // NEGATIVOS
      fill("red");
      stroke("red");

      text(
        "- Cos",
        width / 2 - this.raio / 3,
        height / 2 - (4 * this.raio) / 6 + espacamento
      );
      text(
        "- Tan",
        width / 2 - this.raio / 3,
        height / 2 - (4 * this.raio) / 6 + espacamento * 2
      );

      text("- Sen", width / 2 - this.raio / 3, height / 2 + this.raio / 8);
      text(
        "- Cos",
        width / 2 - this.raio / 3,
        height / 2 + this.raio / 8 + espacamento
      );

      text("Sen -", width / 2 + this.raio / 3, height / 2 + this.raio / 8);
      text(
        "Tan -",
        width / 2 + this.raio / 3,
        height / 2 + this.raio / 8 + espacamento * 2
      );
      pop();

      for (let quad of this.quadrantes) {
        for (let i = 1; i < quad.length; i++) {
          if (quad[i].angulo === 0) {
            quad[i].angulo = 360;
          }
          if (
            document.getElementById("modoNegativo").checked &&
            quad[i].angulo === 360
          ) {
            quad[i].angulo = 0;
          }
          quad[i].mostrar();
          quad[i].mostrarValores();
        }
      }
      return;
    }

    if (!this.telaInicial.sobCanvas()) return;

    if (mouseX >= width / 2 && mouseX < width && mouseY <= height / 2) {
      for (let angulo of this.quadrantes[0]) {
        angulo.mostrar();
        angulo.mostrarValores();
      }
    } else if (mouseX <= width / 2 && mouseY <= height / 2) {
      for (let angulo of this.quadrantes[1]) {
        angulo.mostrar();
        angulo.mostrarValores();
      }
    } else if (mouseX <= width / 2 && mouseY >= height / 2 && mouseY < height) {
      for (let angulo of this.quadrantes[2]) {
        angulo.mostrar();
        angulo.mostrarValores();
      }
    } else if (
      mouseX >= width / 2 &&
      mouseX < width &&
      mouseY >= height / 2 &&
      mouseY < height
    ) {
      for (let angulo of this.quadrantes[3]) {
        if (angulo.angulo === 0) {
          angulo.angulo = 360;
        }
        angulo.mostrar();
        angulo.mostrarValores();
      }
    }
  }
}
