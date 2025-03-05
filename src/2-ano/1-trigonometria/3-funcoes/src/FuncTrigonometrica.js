class FuncTrigonometrica {
  constructor() {
    // periodo = TWO_PI / this.b;
    /*
    this.imagem = {
      minimo: () => this.a * -2 + this.d,
      maximo: () => this.a * 2 + this.d,
    };
    */
    this.a; // altura da onda
    this.b; // comprimento da onda
    this.c; // posição x da onda
    this.d; // posição y da onda
    this._atualizarCoeficientes();

    this.inicio, this.final;
    this.minimo, this.maximo;
    this._atualizarZoom();

    this.angulos = [];
    this._atualizarAngulos();

    (this.contadorAmpliar = 0), (this.contadorReduzir = 0);
    this.valorZoom = this.contadorAmpliar - this.contadorReduzir;

    this.tela = new Tela(this._ajustarDimensoesCanvas);

    const ampliar = document.getElementById("ampliar");
    ampliar.onclick = () => {
      if (this.valorZoom < 3) {
        this.contadorAmpliar++;
      }
    };
    const reduzir = document.getElementById("reduzir");
    reduzir.onclick = () => {
      if (this.valorZoom > -3) {
        this.contadorReduzir++;
      }
    };
  }

  mostrar() {
    this._atualizarZoom();

    this.tela.mostrarGrades(this.valorZoom);
    this.tela.mostrarLinhas();

    this._atualizarCoeficientes();

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
    let radiano, piRad, x;
    for (let angulo of this.angulos) {
      push();
      if (this.angulos[0] === angulo) {
        textAlign(LEFT, CENTER);
      } else if (this.angulos[this.angulos.length - 1] === angulo) {
        textAlign(RIGHT, CENTER);
      }
      radiano = radians(angulo);
      piRad = radiano / PI;
      x = map(radiano, this.inicio, this.final, -width / 2, width / 2);
      text(
        `${
          piRad === 0
            ? piRad
            : abs(piRad) >= 1
            ? piRad
            : abs(piRad) >= 0.1
            ? piRad.toFixed(2)
            : piRad.toFixed(3)
        }π`,
        x,
        height / 2 + 20
      );
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

    const listaDeValores = [];
    let radiano;

    for (let i = -width / 2; i <= width / 2; i++) {
      radiano = map(i, -width / 2, width / 2, this.inicio, this.final);
      listaDeValores[i + width / 2] =
        this.a * sin(this.b * radiano + this.c) + this.d;
    }

    noFill();
    stroke("red");
    strokeWeight(2.5);

    let y;
    beginShape();
    for (let x = -width / 2; x <= width / 2; x++) {
      y = map(
        listaDeValores[x + width / 2],
        this.minimo,
        this.maximo,
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
      `g(x) = ${this.a}.cos(${this.b}.x+${this.c}) + ${this.d}`,
      -width / 2 + 50,
      75
    );

    const listaDeValores = [];
    let radiano;

    for (let i = -width / 2; i <= width / 2; i++) {
      radiano = map(i, -width / 2, width / 2, this.inicio, this.final);
      listaDeValores[i + width / 2] =
        this.a * cos(this.b * radiano + this.c) + this.d;
    }

    noFill();
    stroke("blue");
    strokeWeight(2.5);

    let y;
    beginShape();
    for (let x = -width / 2; x <= width / 2; x++) {
      y = map(
        listaDeValores[x + width / 2],
        this.minimo,
        this.maximo,
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
      `h(x) = ${this.a}.tan(${this.b}.x+${this.c}) + ${this.d}`,
      -width / 2 + 50,
      100
    );

    noFill();
    stroke("green");
    strokeWeight(2.5);

    let y, xRad;

    let curva = [];

    let limEsq = -width / 2;
    let limDir = width / 2;

    let limRadEsq = this.inicio;
    let limRadDir = this.final;
    let step = HALF_PI / this.b;

    let pontosIndeterminacao = [];
    for (let i = limRadEsq + step; i <= limRadDir; i += PI) {
      pontosIndeterminacao.push(i);
    }

    for (let x = limEsq; x <= limDir; x++) {
      xRad = map(x, limEsq, limDir, limRadEsq, limRadDir);
      y = map(
        this.a * tan(this.b * xRad + this.c) + this.d,
        this.minimo,
        this.maximo,
        height,
        0
      );

      if (pontosIndeterminacao.find((v) => this._compareFloat(v, xRad, 1e-1))) {
        curva.push({ x, Infinity });
      } else {
        curva.push({ x, y });
      }
    }

    curva.pop();

    beginShape();
    for (let ponto of curva) {
      if (!isFinite(ponto.y)) {
        endShape();
        beginShape();
      }
      vertex(ponto.x, ponto.y);
    }
    endShape();

    pop();
  }

  _compareFloat(v1, v2, prec) {
    return Math.abs(v1 - v2) <= prec;
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
    for (let x = -width / 2; x <= width / 2; x += width / 2 / 8) {
      radiano = map(x, -width / 2, width / 2, this.inicio, this.final);
      angulo = Number(degrees(radiano).toFixed(0));
      if (!this.angulos.includes(angulo)) {
        this.angulos.push(angulo);
      }
    }
  }

  _atualizarZoom() {
    this.inicio = -TWO_PI;
    this.final = TWO_PI;

    this.minimo = -2;
    this.maximo = 2;

    this.valorZoom = this.contadorAmpliar - this.contadorReduzir;

    switch (Math.sign(this.valorZoom)) {
      case -1:
        for (let i = 0; i < abs(this.valorZoom); i++) {
          (this.inicio /= 2), (this.final /= 2);
          (this.minimo /= 2), (this.maximo /= 2);
        }
        break;
      case 1:
        for (let i = 0; i < this.valorZoom; i++) {
          (this.inicio *= 2), (this.final *= 2);
          (this.minimo *= 2), (this.maximo *= 2);
        }
        break;
    }
  }
}
