class Circunferencia {
  constructor(raio) {
    this.raio = raio;
    this.vetorLinha = new VetorLinha(width / 2, height / 2, raio, "orange");
    this.telaInicial = new TelaInicial(raio * 2);
    this.quadrantes = {
      1: [
        new Angulo(raio, 0, {
          x: 10,
          y: 5,
        }),
        new Angulo(raio, 30, {
          x: 5,
          y: -10,
        }),
        new Angulo(raio, 45, {
          x: 5,
          y: -9,
        }),
        new Angulo(raio, 60, {
          x: 5,
          y: -10,
        }),
        new Angulo(raio, 90, {
          x: -10,
          y: -10,
        }),
      ],
      2: [
        new Angulo(raio, 90, {
          x: -10,
          y: -10,
        }),
        new Angulo(raio, 120, {
          x: -35,
          y: -10,
        }),
        new Angulo(raio, 135, {
          x: -35,
          y: -9,
        }),
        new Angulo(raio, 150, {
          x: -35,
          y: -10,
        }),
        new Angulo(raio, 180, {
          x: -45,
          y: 5,
        }),
      ],
      3: [
        new Angulo(raio, 180, {
          x: -45,
          y: 5,
        }),
        new Angulo(raio, 210, {
          x: -35,
          y: 25,
        }),
        new Angulo(raio, 225, {
          x: -35,
          y: 25 - 1,
        }),
        new Angulo(raio, 240, {
          x: -35,
          y: 25,
        }),
        new Angulo(raio, 270, {
          x: -15,
          y: 25,
        }),
      ],
      4: [
        new Angulo(raio, 270, {
          x: -15,
          y: 25,
        }),
        new Angulo(raio, 300, {
          x: 0,
          y: 25,
        }),
        new Angulo(raio, 315, {
          x: 0,
          y: 25,
        }),
        new Angulo(raio, 330, {
          x: 0,
          y: 25,
        }),
        new Angulo(raio, 360, {
          x: 10,
          y: 5,
        }),
      ],
    };
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

    for (let i = 0; i <= width; i += width / 10) {
      line(i, 0, i, height);
    }

    for (let i = 0; i <= height; i += height / 10) {
      line(0, i, width, i);
    }
    pop();
  }

  renderizarTelaInicial() {
    this.telaInicial.mostrar();
  }

  mostrarVetorLinha() {
    if (this.telaInicial.sobCanvas()) {
      this.vetorLinha.mostrar();
      this.vetorLinha.mostrarAngulo();
      this.vetorLinha.mostrarLinhas();
      this.vetorLinha.mostrarPonto();
    }
  }

  mostrarQuadrantes() {
    if (!this.telaInicial.sobCanvas()) return;

    if (mouseX >= width / 2 && mouseX < width && mouseY <= height / 2) {
      for (let angulo of this.quadrantes[1]) {
        angulo.mostrar();
        angulo.mostrarValores();
      }
    } else if (mouseX <= width / 2 && mouseY <= height / 2) {
      for (let angulo of this.quadrantes[2]) {
        angulo.mostrar();
        angulo.mostrarValores();
      }
    } else if (mouseX <= width / 2 && mouseY >= height / 2 && mouseY < height) {
      for (let angulo of this.quadrantes[3]) {
        angulo.mostrar();
        angulo.mostrarValores();
      }
    } else if (
      mouseX >= width / 2 &&
      mouseX < width &&
      mouseY >= height / 2 &&
      mouseY < height
    ) {
      for (let angulo of this.quadrantes[4]) {
        angulo.mostrar();
        angulo.mostrarValores();
      }
    }
  }
}
