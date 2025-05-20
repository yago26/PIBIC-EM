class Circunferencia {
  constructor(raio) {
    this.raio = raio;
    this.vetorLinha = new VetorLinha(width / 2, height / 2, raio);
    this.tela = new Tela(raio);
    this.quadrantes = [];
    for (let i = 0; i < 4; i++) {
      let quadrante = [];
      for (let j = 0; j <= 90; j += j === 0 || j === 60 ? 30 : 15) {
        quadrante.push(new Angulo(raio, j + i * 90));
      }
      this.quadrantes[i] = quadrante;
    }
  }

  mostrar() {
    push();
    this.tela.mostrarGrades();

    noFill();
    stroke("black");
    circle(width / 2, height / 2, this.raio * 2);

    this.tela.mostrarLinhas();
    this.tela.mostrarValores();
    pop();
  }

  mostrarVetorLinha() {
    if (
      this.tela.sobCanvas() &&
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

      // Seno
      fill("red");
      stroke("red");

      text(
        "Sen +",
        width / 2 - this.raio / 3,
        height / 2 - (2 * this.raio) / 3
      );
      text(
        "Sen +",
        width / 2 + this.raio / 3,
        height / 2 - (2 * this.raio) / 3
      );
      text("Sen -", width / 2 - this.raio / 3, height / 2 + this.raio / 8);
      text("Sen -", width / 2 + this.raio / 3, height / 2 + this.raio / 8);

      // Cosseno
      fill("blue");
      stroke("blue");

      text(
        "Cos +",
        width / 2 + this.raio / 3,
        height / 2 - (2 * this.raio) / 3 + espacamento
      );
      text(
        "Cos +",
        width / 2 + this.raio / 3,
        height / 2 + this.raio / 8 + espacamento
      );
      text(
        "Cos -",
        width / 2 - this.raio / 3,
        height / 2 - (2 * this.raio) / 3 + espacamento
      );
      text(
        "Cos -",
        width / 2 - this.raio / 3,
        height / 2 + this.raio / 8 + espacamento
      );

      // Tangente
      fill("green");
      stroke("green");

      text(
        "Tan +",
        width / 2 + this.raio / 3,
        height / 2 - (2 * this.raio) / 3 + espacamento * 2
      );
      text(
        "Tan +",
        width / 2 - this.raio / 3,
        height / 2 + this.raio / 8 + espacamento * 2
      );
      text(
        "Tan -",
        width / 2 - this.raio / 3,
        height / 2 - (2 * this.raio) / 3 + espacamento * 2
      );
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

    if (!this.tela.sobCanvas()) return;

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
