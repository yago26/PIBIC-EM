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
    let y, xRad;
    let curva = [];

    let limEsq = -width / 2;
    let limDir = width / 2;
    // let limEsq = -width / 2;
    // let limDir = limEsq + 2 * tamGrid;

    let limRadEsq = this.inicio;
    let limRadDir = this.final;
    let step = HALF_PI;
    // print("inicio", limRadEsq, "fim", limRadDir);

    // Cria uma lista de pontos onde o valor da tangente
    // é indeterminado. No intervalo de -TWO_PI até TWO_PI,
    // por exemplo, esses pontos são -1.5PI, -0.5PI, 0.5PI
    // e 1.5PI.
    // Os valores guardados na lista são em radianos.
    let pontosIndeterminacao = [];
    for (let i = limRadEsq + step; i <= limRadDir; i += PI) {
      pontosIndeterminacao.push(i);
    }

    // Aqui vamos montar a curva, para depois plotar como vértices
    for (let x = limEsq; x <= limDir; x++) {
      xRad = map(x, limEsq, limDir, limRadEsq, limRadDir);

      y = map(this.a * tan(this.b * xRad + this.c) + this.d, -2, 2, height, 0);

      // Se o valor de x (em radianos) é um dos pontos de
      // indeterminação, então atribua Infinity a y. Isso
      // serve para marcar pontos que não devem ser plotados.
      // A função _compareFloat(), definida abaixo dessa, foi
      // usada porque ocorreria um problema de precisão, se
      // fôssemos comparar v e xRad com v == xRad.
      if (pontosIndeterminacao.find((v) => this._compareFloat(v, xRad, 1e-1))) {
        curva.push({ x, Infinity });
      } else {
        curva.push({ x, y });
      }
    }
    curva.pop();

    beginShape();
    for (let ponto of curva) {
      // Se o y do ponto for Infinity, então ele não deve ser
      // plotado. Assim, finalize a forma e inicie novamente.
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
