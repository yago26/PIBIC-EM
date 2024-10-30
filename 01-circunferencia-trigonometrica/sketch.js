class Circunferencia {
  constructor(diametro) {
    this.diametro = diametro;
    this.sobAngulo = false;
  }

  desenhar() {
    fill("white");
    stroke("black");
    circle(width / 2, height / 2, this.diametro);
  }

  mostrarAngulos() {
    let area = 15;
    // 90
    if (
      mouseY <= height / 4 + area &&
      mouseY >= height / 4 - area &&
      mouseX <= width / 2 + area &&
      mouseX >= width / 2 - area
    ) {
      this.imprimir(1, true);
    }
    // 180
    else if (
      mouseX <= width / 4 + area &&
      mouseX >= width / 4 - area * 2 &&
      mouseY <= height / 2 + area &&
      mouseY >= height / 2 - area
    ) {
      this.imprimir(2, true);
    }
    // 270
    else if (
      mouseY >= (3 * height) / 4 - area &&
      mouseY <= (3 * height) / 4 + area &&
      mouseX <= width / 2 + area + 5 &&
      mouseX >= width / 2 - area - 5
    ) {
      this.imprimir(3, true);
    }
    // 360 OU 0
    else if (
      mouseX >= (3 * width) / 4 - area &&
      mouseX <= (3 * width) / 4 + area * 4.75 &&
      mouseY <= height / 2 + area &&
      mouseY >= height / 2 - area
    ) {
      this.imprimir(4, true);
    } else {
      this.sobAngulo = false;
    }
  }

  mostrarQuadrante() {
    if (this.sobAngulo) return;
    if (mouseX >= width / 2 && mouseX < width && mouseY <= height / 2) {
      mouseIsPressed
        ? (window.location = "quadrantes/1-quadrante.html")
        : this.imprimir(1),
        this.imprimir(4);
    } else if (mouseX <= width / 2 && mouseY <= height / 2) {
      mouseIsPressed
        ? (window.location = "quadrantes/2-quadrante.html")
        : this.imprimir(1),
        this.imprimir(2);
    } else if (mouseX <= width / 2 && mouseY >= height / 2 && mouseY < height) {
      mouseIsPressed
        ? (window.location = "quadrantes/3-quadrante.html")
        : this.imprimir(2),
        this.imprimir(3);
    } else if (
      mouseX >= width / 2 &&
      mouseX < width &&
      mouseY >= height / 2 &&
      mouseY < height
    ) {
      mouseIsPressed
        ? (window.location = "quadrantes/4-quadrante.html")
        : this.imprimir(3),
        this.imprimir(4);
    }
  }

  mostrarLinhas() {
    stroke("red");
    line(width / 2, 0, width / 2, height);
    line(0, height / 2, width, height / 2);
  }

  imprimir(quadrante, angulo = false) {
    angulo ? fill("blue") : fill("black");

    textSize(15);
    stroke("black");
    strokeWeight(0.8);

    let margem = 5,
      espacamento = 15,
      pontoTamanho = 7.5;

    switch (quadrante) {
      case 1:
        circle(width / 2, height / 2 - this.diametro / 2, pontoTamanho);
        text(
          "90°",
          width / 2 - 8,
          height / 2 - this.diametro / 2 - pontoTamanho
        );
        break;
      case 2:
        circle(width / 2 - this.diametro / 2, height / 2, pontoTamanho);
        text("180°", width / 2 - this.diametro / 2 - 38, height / 2 + 5);
        break;
      case 3:
        circle(width / 2, height / 2 + this.diametro / 2, pontoTamanho);
        text("270°", width / 2 - 12, height / 2 + this.diametro / 2 + 20);
        break;
      case 4:
        circle(width / 2 + this.diametro / 2, height / 2, pontoTamanho);
        text("0° ou 360°", width / 2 + this.diametro / 2 + 8, height / 2 + 5);
        break;
    }

    if (angulo) {
      fill("green");
      strokeWeight(0.4);
      this.sobAngulo = true;
      switch (quadrante) {
        case 1:
          text("seno: 1", width - 50 - margem, espacamento);
          text("cos: 0", width - 40 - margem, espacamento * 2);
          text("tg: ∄", width - 30 - margem, espacamento * 3);
          break;
        case 2:
          text("seno: 0", margem, espacamento);
          text("cos: -1", margem, espacamento * 2);
          text("tg: 0", margem, espacamento * 3);
          break;
        case 3:
          text("seno: -1", margem, height - espacamento * 3 + margem);
          text("cos: 0", margem, height - espacamento * 2 + margem);
          text("tg: ∄", margem, height - espacamento + margem);
          break;
        case 4:
          strokeWeight(0.5);
          text(
            "seno: 0",
            width - 50 - margem,
            height - espacamento * 3 + margem
          );
          text(
            "cos: 1",
            width - 41 - margem,
            height - espacamento * 2 + margem
          );
          text("tg: 0", width - 30 - margem, height - espacamento + margem);
          break;
      }
    }

    strokeWeight(0.4);
  }
}

let circ;

function setup() {
  createCanvas(400, 400);
  circ = new Circunferencia(180);
}

function draw() {
  background(220);
  circ.desenhar();
  circ.mostrarLinhas();
  circ.mostrarAngulos();
  circ.mostrarQuadrante();
}
