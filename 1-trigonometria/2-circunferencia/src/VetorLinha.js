class VetorLinha {
  constructor(x, y, raio, cor) {
    this.origem = createVector(x, y);
    this.sentido = createVector(mouseX - this.origem.x, mouseY - this.origem.y);
    this.sentido.setMag(this.raio);
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
    stroke("red");
    line(width / 2, this.origem.y + this.sentido.y, width / 2, height / 2);
    stroke("blue");
    line(
      this.origem.x,
      this.origem.y,
      this.origem.x + this.sentido.x,
      this.origem.y
    );
    stroke("purple");
    line(width / 2 + this.raio, 0, width / 2 + this.raio, height);
    this.linhaPontilhada(
      this.origem.x,
      this.origem.y + this.sentido.y,
      this.origem.x + this.sentido.x,
      this.origem.y + this.sentido.y
    );
    this.linhaPontilhada(
      this.origem.x + this.sentido.x,
      this.origem.y,
      this.origem.x + this.sentido.x,
      this.origem.y + this.sentido.y
    );
    pop();
  }

  mostrarAngulo() {
    push();
    fill("black");
    let senValor = -(this.origem.y + this.sentido.y - height / 2) / this.raio;
    let cosValor = (this.origem.x + this.sentido.x - width / 2) / this.raio;

    let angulo =
      this.origem.y + this.sentido.y <= height / 2
        ? Math.round(acos(cosValor))
        : 360 - Math.round(acos(cosValor));

    stroke("orange");
    strokeWeight(1.5);
    let y = map(tan(angulo), -2, 2, height, 0);
    line(
      width / 2 + this.raio,
      y,
      this.origem.x + this.sentido.x,
      this.origem.y + this.sentido.y
    );

    stroke(color(0, 255, 0));
    line(width / 2 + this.raio, y, width / 2 + this.raio, height / 2);

    senValor = sin(angulo);
    cosValor = cos(angulo);

    stroke("green");
    fill(color(200, 255, 215, 70));
    arc(width / 2, height / 2, 30, 30, -angulo, 0);

    noStroke();

    fill("red");
    text(`sen: ${senValor.toFixed(4)}`, 40, 50);
    fill("blue");
    text(`cos: ${cosValor.toFixed(4)}`, 40, 65);
    fill("green");
    text(
      `tan: ${
        angulo === 90 || angulo === 270 ? "∄" : (senValor / cosValor).toFixed(4)
      }`,
      40,
      80
    );

    fill("black");
    text(
      `${
        document.getElementById("modoNegativo").checked ? -360 + angulo : angulo
      }°`,
      cos(-angulo) * (this.raio / 3) + width / 2 - this.raio / 10,
      sin(-angulo) * (this.raio / 3) + height / 2 + this.raio / 30
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

  linhaPontilhada(x1, y1, x2, y2) {
    push();
    fill("gray");
    stroke("gray");
    let distancia = dist(x1, y1, x2, y2);

    let numPontos = floor(distancia / 5);

    let dx = (x2 - x1) / numPontos;
    let dy = (y2 - y1) / numPontos;

    for (let i = 0; i <= numPontos; i++) {
      let x = x1 + dx * i;
      let y = y1 + dy * i;
      circle(x, y, 2);
    }
    pop();
  }
}
