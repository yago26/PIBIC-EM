class TelaInicial {
  constructor(diametro, pontoTamanho) {
    this.diametro = diametro;
    this.pontoTamanho = pontoTamanho;
  }
  mostrar() {
    textSize(20);
    strokeWeight(0.8);

    fill("blue");
    stroke("blue");
    line(
      width / 2,
      height / 2 - this.diametro / 2,
      width / 2,
      height / 2 + this.diametro / 2
    );

    // SENO
    fill("black");
    stroke("black");
    text("Seno", width / 2 - 25, 20);
    circle(width / 2, height / 2 - this.diametro / 2, this.pontoTamanho);
    text(
      "1",
      width / 2 - 8,
      height / 2 - this.diametro / 2 - this.pontoTamanho
    );
    text(
      "-1",
      width / 2 - 12,
      height / 2 + this.diametro / 2 + this.pontoTamanho * 2.5
    );
    circle(width / 2, height / 2 + this.diametro / 2, this.pontoTamanho);

    fill("red");
    stroke("red");
    line(
      width / 2 - this.diametro / 2,
      height / 2,
      width / 2 + this.diametro / 2,
      height / 2
    );

    // COSSENO
    fill("black");
    stroke("black");
    text("Cos", 2, height / 2 + 5);
    text("1", width / 2 + this.diametro / 2 + 8, height / 2 + 5);
    circle(width / 2 - this.diametro / 2, height / 2, this.pontoTamanho);
    text(
      "-1",
      width / 2 - this.diametro / 2 - this.pontoTamanho * 2.5,
      height / 2 + 5
    );
    circle(width / 2 + this.diametro / 2, height / 2, this.pontoTamanho);

    strokeWeight(0.4);
  }
}
