class VetorLinha {
  constructor(x, y, raio, cor) {
    this.origem = createVector(x, y);
    this.sentido;
    this.raio = raio;
    this.cor = cor;
  }
  mostrar() {
    push();
    fill(this.cor);

    this.sentido = createVector(mouseX - this.origem.x, mouseY - this.origem.y);
    this.sentido.setMag(this.raio);

    stroke(this.cor);
    strokeWeight(1.8);

    line(
      this.origem.x,
      this.origem.y,
      this.origem.x + this.sentido.x,
      this.origem.y + this.sentido.y
    );
    pop();
  }
  mostrarLinhas() {
    push();
    stroke("green");
    line(
      this.origem.x + this.sentido.x,
      this.origem.y + this.sentido.y,
      this.origem.x + this.sentido.x,
      height / 2
    );
    stroke("blue");
    line(
      this.origem.x,
      this.origem.y,
      this.origem.x + this.sentido.x,
      this.origem.y
    );
    pop();
  }
  mostrarAngulo() {
    push();
    fill("black");
    circle(this.origem.x + this.sentido.x, this.origem.y + this.sentido.y, 5);

    let senoValor = -(this.origem.y + this.sentido.y - height / 2) / this.raio;
    let cosValor = (this.origem.x + this.sentido.x - width / 2) / this.raio;

    fill("green");
    text(`sen: ${senoValor.toFixed(3)}`, 40, 40);
    fill("blue");
    text(`cos: ${cosValor.toFixed(3)}`, 40, 55);
    fill("white");
    text(`tan: ${(senoValor / cosValor).toFixed(3)}`, 40, 70);

    let angulo =
      this.origem.y + this.sentido.y <= height / 2
        ? Math.round(acos(cosValor))
        : 360 - Math.round(acos(cosValor));
    noFill();
    arc(width / 2, height / 2, 30, 30, -angulo, 0);
    let posTexto = {
      x: angulo <= 90 ? 10 : angulo <= 180 ? -40 : angulo <= 270 ? -40 : -5,
      y: angulo <= 90 ? -10 : angulo <= 180 ? -10 : angulo <= 270 ? 25 : 25,
    };
    let anguloVetor = new Angulo(this.raio, angulo, {
      x: posTexto.x,
      y: posTexto.y,
    });
    anguloVetor.mostrar();
    fill("black");
    text(
      `${angulo}°`,
      cos(-angulo) * (this.raio / 3) + width / 2 - this.raio / 10,
      sin(-angulo) * (this.raio / 3) + height / 2 + this.raio / 30
    );
    pop();
  }
}
