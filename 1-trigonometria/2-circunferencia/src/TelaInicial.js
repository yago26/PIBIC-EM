class TelaInicial {
  constructor(diametro, pontoTamanho) {
    this.diametro = diametro;
    this.pontoTamanho = pontoTamanho;
  }

  mostrar() {
    push();
    if (this.sobCanvas()) {
      textSize(16);
      strokeWeight(0.8);

      fill("gray");
      stroke("gray");

      text("Seno", width / 2 - 20, 25);
      text("Cos", width - 45, height / 2 + 5);

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
      textSize(20);
      strokeWeight(0.8);

      fill("red");
      stroke("red");
      line(
        width / 2 - this.diametro / 2,
        height / 2,
        width / 2 + this.diametro / 2,
        height / 2
      );

      fill("blue");
      stroke("blue");
      line(
        width / 2,
        height / 2 - this.diametro / 2,
        width / 2,
        height / 2 + this.diametro / 2
      );

      fill("black");
      stroke("black");

      // SENO
      text("Seno", width / 2 - 25, 25);
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
      text("Cos", width - 45, height / 2 + 5);
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

  sobCanvas() {
    return mouseX >= 0 && mouseX < width && mouseY >= 0 && mouseY < height;
  }
}