class VetorLinha {
  constructor(x, y, raio) {
    this.origem = createVector(x, y);
    this.sentido = createVector(mouseX - this.origem.x, mouseY - this.origem.y);
    this.sentido.setMag(this.raio);
    this.raio = raio;
  }

  mostrar() {
    push();
    fill("orange");

    this.sentido = createVector(mouseX - this.origem.x, mouseY - this.origem.y);
    this.sentido.setMag(this.raio);

    stroke("orange");
    strokeWeight(1.5);

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
    strokeWeight(2.5);
    stroke("red");
    line(width / 2, this.origem.y + this.sentido.y, width / 2, height / 2);
    stroke("blue");
    line(
      this.origem.x,
      this.origem.y,
      this.origem.x + this.sentido.x,
      this.origem.y
    );

    strokeWeight(1);
    this._linhaPontilhada(
      this.origem.x,
      this.origem.y + this.sentido.y,
      this.origem.x + this.sentido.x,
      this.origem.y + this.sentido.y
    );
    this._linhaPontilhada(
      this.origem.x + this.sentido.x,
      this.origem.y,
      this.origem.x + this.sentido.x,
      this.origem.y + this.sentido.y
    );
    pop();
  }

  mostrarAngulo() {
    push();
    let senValor = -(this.origem.y + this.sentido.y - height / 2) / this.raio;
    let cosValor = (this.origem.x + this.sentido.x - width / 2) / this.raio;

    let angulo =
      this.origem.y + this.sentido.y <= height / 2
        ? Math.round(acos(cosValor))
        : 360 - Math.round(acos(cosValor));

    let y = map(
      tan(angulo),
      -2,
      2,
      height / 2 + this.raio * 2,
      height / 2 - this.raio * 2
    );

    stroke("orange");
    strokeWeight(1.5);
    line(
      width / 2 + this.raio,
      y,
      this.origem.x + this.sentido.x,
      this.origem.y + this.sentido.y
    );

    stroke("green");
    strokeWeight(2.5);
    line(width / 2 + this.raio, y, width / 2 + this.raio, height / 2);

    stroke("cyan");
    strokeWeight(1.5);
    fill(color(0, 255, 255, 50));
    arc(width / 2, height / 2, 30, 30, -angulo, 0);

    senValor = sin(angulo);
    cosValor = cos(angulo);

    noStroke();

    fill("red");
    text(`sen: ${senValor.toFixed(4)}`, width / 8, height / 7);
    fill("blue");
    text(`cos: ${cosValor.toFixed(4)}`, width / 8, height / 6 + 2);
    fill("green");
    text(
      `tan: ${
        angulo === 90 || angulo === 270 ? "∄" : (senValor / cosValor).toFixed(4)
      }`,
      width / 8,
      height / 5
    );

    textAlign(CENTER, CENTER);

    fill("black");
    stroke("black");
    strokeWeight(0.75);

    text(
      `${
        document.getElementById("modoNegativo").checked ? -360 + angulo : angulo
      }°`,
      cos(-angulo / 2) * 30 + width / 2,
      sin(-angulo / 2) * 30 + height / 2
    );
    pop();
  }

  mostrarPonto() {
    push();
    fill("gray");
    stroke("gray");
    circle(this.origem.x + this.sentido.x, this.origem.y + this.sentido.y, 7.5);
    pop();
  }

  _linhaPontilhada(x1, y1, x2, y2) {
    push();
    fill("gray");
    stroke("gray");
    let distancia = dist(x1, y1, x2, y2);

    let numPontos = floor(distancia / 5);

    let dx = (x2 - x1) / numPontos;
    let dy = (y2 - y1) / numPontos;

    for (let i = 1; i <= numPontos; i++) {
      let x = x1 + dx * i;
      let y = y1 + dy * i;
      circle(x, y, 2);
    }
    pop();
  }
}
