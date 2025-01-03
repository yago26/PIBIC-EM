class FuncTrigonometrica {
  constructor() {
    // a*sen(b*x+c) + d
    // periodo = TWO_PI / this.b;
    this.a; // altura da onda
    this.b; // comprimento da onda
    this.c; // posição x da onda
    this.d; // posição y da onda
    this._atualizarCoeficientes();

    this.imagem = {
      minimo: () => this.a * -1 + this.d,
      maximo: () => this.a * 1 + this.d,
    };

    this.inicio, this.final;
    this._atualizarInicioFim();

    this.angulos = [];
    this._atualizarAngulos();

    this.tela = new Tela(this._ajustarDimensoesCanvas);

    const divAgrupador = document.getElementById("agrupador");
    const sectionConfigs = document.getElementById("configs");
    const main = document.querySelector("main");
    divAgrupador.insertBefore(main, sectionConfigs);
  }

  mostrar() {
    this.tela.mostrarGrades();
    this.tela.mostrarLinhas();

    this._atualizarCoeficientes();
    this._atualizarInicioFim();

    if (document.getElementById("funcSen").checked) {
      this.mostrarSeno();
    }
    if (document.getElementById("funcCos").checked) {
      this.mostrarCosseno();
    }
    if (document.getElementById("funcTan").checked) {
      this.mostrarTangente();
    }
  }

  mostrarValores() {
    push();
    this._ajustarDimensoesCanvas();
    this._atualizarAngulos();
    textSize(14);
    stroke("black");
    textAlign(CENTER, CENTER);
    let radiano, x;
    for (let angulo of this.angulos) {
      push();
      if (this.angulos[0] === angulo) {
        textAlign(LEFT, CENTER);
      } else if (this.angulos[this.angulos.length - 1] === angulo) {
        textAlign(RIGHT, CENTER);
      }
      radiano = radians(angulo);
      x = map(radiano, this.inicio, this.final, -width / 2, width / 2);
      text(`${(radiano / PI).toFixed(1)}π`, x, height / 2 + 20);
      fill("brown");
      stroke("brown");
      text(`${angulo.toFixed(0)}°`, x, height / 2 + 35);
      pop();
    }
    pop();
  }

  mostrarSeno() {
    push();
    this._ajustarDimensoesCanvas();

    fill("red");
    stroke("gray");
    textSize(16);
    text(
      `f(x) = ${this.a}.sen(${this.b}.x+${this.c}) + ${this.d}`,
      -width / 2 + 50,
      50
    );

    noFill();
    stroke("red");
    let y, radiano;
    beginShape();
    for (let x = -width / 2; x <= width / 2; x++) {
      radiano = map(x, -width / 2, width / 2, this.inicio, this.final);
      y = map(
        this.a * sin(this.b * radiano + this.c) + this.d,
        -2,
        2,
        height,
        0
      );
      vertex(x, y);
    }
    endShape();
    pop();
  }

  mostrarCosseno() {
    push();
    this._ajustarDimensoesCanvas();

    textSize(16);
    fill("blue");
    stroke("gray");
    text(
      `f(x) = ${this.a}.cos(${this.b}.x+${this.c}) + ${this.d}`,
      -width / 2 + 50,
      75
    );

    noFill();
    stroke("blue");
    let y, radiano;
    beginShape();
    for (let x = -width / 2; x <= width / 2; x++) {
      radiano = map(x, -width / 2, width / 2, this.inicio, this.final);
      y = map(
        this.a * cos(this.b * radiano + this.c) + this.d,
        -2,
        2,
        height,
        0
      );
      vertex(x, y);
    }
    endShape();
    pop();
  }

  mostrarTangente() {
    push();
    this._ajustarDimensoesCanvas();

    textSize(16);
    fill("green");
    stroke("gray");
    text(
      `f(x) = ${this.a}.tan(${this.b}.x+${this.c}) + ${this.d}`,
      -width / 2 + 50,
      100
    );

    noFill();
    stroke("green");
    strokeWeight(2);
    let y, radiano;
    beginShape();
    for (let x = -width / 2; x <= width / 2; x++) {
      radiano = map(x, -width / 2, width / 2, this.inicio, this.final);
      y = map(
        this.a * tan(this.b * radiano + this.c) + this.d,
        -2,
        2,
        height,
        0
      );
      vertex(x, y);
    }
    endShape();
    pop();
  }

  _ajustarDimensoesCanvas() {
    translate(width / 2, 0);
  }

  _atualizarCoeficientes() {
    const coeficienteA = document.getElementById("coeficienteA");
    this.a = coeficienteA.value === "" ? 1 : +coeficienteA.value;

    const coeficienteB = document.getElementById("coeficienteB");
    this.b = coeficienteB.value === "" ? 1 : +coeficienteB.value;

    const coeficienteC = document.getElementById("coeficienteC");
    this.c = coeficienteC.value === "" ? 0 : +coeficienteC.value;

    const coeficienteD = document.getElementById("coeficienteD");
    this.d = coeficienteD.value === "" ? 0 : +coeficienteD.value;
  }

  _atualizarAngulos() {
    this.angulos = [];
    let radiano, angulo;
    for (let x = -width / 2; x <= width / 2; x++) {
      radiano = map(x, -width / 2, width / 2, this.inicio, this.final);
      angulo = Number(degrees(radiano).toFixed(0));
      if (angulo % 90 === 0 && !this.angulos.includes(angulo)) {
        this.angulos.push(angulo);
      }
    }
  }

  _atualizarInicioFim() {
    this.inicio = -TWO_PI;
    this.final = TWO_PI;

    const zoom = document.getElementById("zoom");
    let valor = zoom.value === "" ? 0 : +zoom.value;

    switch (Math.sign(valor)) {
      case -1:
        for (let i = 0; i < abs(valor); i++) {
          this.inicio /= 2;
          this.final /= 2;
        }
        break;
      case 1:
        for (let i = 0; i < valor; i++) {
          this.inicio *= 2;
          this.final *= 2;
        }
        break;
    }
  }
}
