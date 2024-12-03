class TelaInicial {
  constructor(diametro) {
    this.diametro = diametro;
    this.pontoTamanho = 10;

    let divAgrupador = document.getElementById("agrupador");
    let hrDivisor = document.getElementById("divisorPrincipal");
    let main = document.querySelector("main");
    divAgrupador.insertBefore(main, hrDivisor);
  }

  mostrar() {
    push();
    if (this.sobCanvas()) {
      this.mostrarSetas(7.5);
      textSize(16);
      strokeWeight(0.8);

      fill("gray");
      stroke("gray");

      text("Sen", width / 2 - 15, 20);
      text("Cos", width - 35, height / 2 + 5.5);

      fill("black");
      stroke("black");
      // SENO
      text(
        "1",
        width / 2 - 5,
        height / 2 - this.diametro / 2 + this.pontoTamanho + 10
      );
      text(
        "-1",
        width / 2 - 6,
        height / 2 + this.diametro / 2 - this.pontoTamanho
      );

      // COSSENO
      text(
        "1",
        width / 2 + this.diametro / 2 - this.pontoTamanho * 1.5,
        height / 2 + 5
      );
      text(
        "-1",
        width / 2 - this.diametro / 2 + this.pontoTamanho * 1,
        height / 2 + 5
      );
    } else {
      textSize(19);
      strokeWeight(0.8);

      this.mostrarSetas(10);

      fill("black");
      stroke("black");

      // SENO
      text("Sen", width / 2 - 18, 20);
      circle(width / 2, height / 2 - this.diametro / 2, this.pontoTamanho);
      text(
        "1",
        width / 2 - 8,
        height / 2 - this.diametro / 2 - this.pontoTamanho
      );
      circle(width / 2, height / 2 + this.diametro / 2, this.pontoTamanho);
      text(
        "-1",
        width / 2 - 12,
        height / 2 + this.diametro / 2 + this.pontoTamanho * 2.5
      );

      // COSSENO
      text("Cos", width - 36, height / 2 + 6.5);
      circle(width / 2 - this.diametro / 2, height / 2, this.pontoTamanho);
      text("1", width / 2 + this.diametro / 2 + 8, height / 2 + 5);
      circle(width / 2 + this.diametro / 2, height / 2, this.pontoTamanho);
      text(
        "-1",
        width / 2 - this.diametro / 2 - this.pontoTamanho * 2.5,
        height / 2 + 5
      );
    }
    pop();
  }

  mostrarSetas(espacamento) {
    push();
    fill("purple");
    stroke("purple");
    strokeWeight(1.6);

    // Seno
    line(width / 2, 20 + 7, width / 2 - espacamento / 2, 20 + 7 + espacamento);
    line(width / 2, 20 + 7, width / 2 + espacamento / 2, 20 + 7 + espacamento);

    // Cosseno
    line(
      width - 40,
      height / 2,
      width - 40 - espacamento,
      height / 2 - espacamento / 2
    );
    line(
      width - 40,
      height / 2,
      width - 40 - espacamento,
      height / 2 + espacamento / 2
    );
    pop();
  }

  sobCanvas() {
    return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
  }
}
