class FuncTrigonometrica {
  constructor(areaUtilizavelCanvas, padding) {
    // periodo = TWO_PI / this.b;
    /*
    this.imagem = {
      minimo: () => this.a * -2 + this.d,
      maximo: () => this.a * 2 + this.d,
    };
    */
    /* CONFIGURAÇÕES */
    (this.areaUtilizavelCanvas = areaUtilizavelCanvas),
      (this.padding = padding);

    /* COEFICIENTES */
    this.a = 1; // altura da onda
    this.b = 1; // comprimento da onda
    this.c = 0; // posição x da onda
    this.d = 0; // posição y da onda

    const coeficienteA = document.getElementById("coeficienteA");
    coeficienteA.onchange = () =>
      (this.a = coeficienteA.value === "" ? 1 : +coeficienteA.value);
    const coeficienteB = document.getElementById("coeficienteB");
    coeficienteB.onchange = () =>
      (this.b = coeficienteB.value === "" ? 1 : +coeficienteB.value);
    const coeficienteC = document.getElementById("coeficienteC");
    coeficienteC.onchange = () =>
      (this.c = coeficienteC.value === "" ? 0 : +coeficienteC.value);
    const coeficienteD = document.getElementById("coeficienteD");
    coeficienteD.onchange = () =>
      (this.d = coeficienteD.value === "" ? 0 : +coeficienteD.value);

    /* VARIÁVEIS */
    (this.inicio = -360), (this.final = 360);
    (this.minimo = -2), (this.maximo = 2);

    this.angulos = [];
    this.radianos = [];
    this._atualizarAngulos();

    this.valorZoom = 0;

    const ampliar = document.getElementById("ampliar");
    ampliar.onclick = () => {
      if (this.valorZoom < 3) {
        (this.inicio *= 2), (this.final *= 2);
        (this.minimo *= 2), (this.maximo *= 2);
        this.valorZoom++;
        this._atualizarAngulos();
      }
    };
    const reduzir = document.getElementById("reduzir");
    reduzir.onclick = () => {
      if (this.valorZoom > -2) {
        (this.inicio /= 2), (this.final /= 2);
        (this.minimo /= 2), (this.maximo /= 2);
        this.valorZoom--;
        this._atualizarAngulos();
      }
    };

    this.tela = new Tela(areaUtilizavelCanvas, padding);
  }

  mostrar() {
    this.tela.mostrarGrades(this.valorZoom);
    this.tela.mostrarLinhas();

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
    /* RADIANOS - VALORES DE X */
    textSize(14);
    stroke("black");
    textAlign(CENTER, CENTER);

    let angulo, radiano, piRad;
    for (
      let x = this.padding;
      x <= width - this.padding;
      x += this.areaUtilizavelCanvas.x / 8
    ) {
      push();
      angulo = map(
        x,
        this.padding,
        width - this.padding,
        this.inicio,
        this.final
      );
      radiano = radians(angulo);
      piRad = radiano / PI;

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
        height - this.padding / 2
      );
      fill("brown");
      stroke("brown");
      text(`${angulo.toFixed(0)}°`, x, height - this.padding / 2 + 15);
      pop();
    }

    /* VALORES DE Y */
    fill(0);
    text(this.maximo.toFixed(1), this.padding / 2, this.padding);
    text((this.maximo / 2).toFixed(1), this.padding / 2, height / 3.25);
    text(
      this.minimo.toFixed(1),
      this.padding / 2,
      this.padding + this.areaUtilizavelCanvas.y
    );
    text(
      (this.minimo / 2).toFixed(1),
      this.padding / 2,
      height - height / 3.25
    );
    text("0", this.padding / 2, height / 2);

    pop();
  }

  mostrarSeno() {
    push();
    angleMode(DEGREES);

    fill("red");
    stroke("gray");
    textSize(16);

    text(
      `f(x) = ${this.a}.sen(${this.b}.x+${this.c}) + ${this.d}`,
      this.padding * 1.5,
      this.padding
    );

    const listaDeValores = [];
    let anguloSeno;

    for (let i = 0; i <= this.areaUtilizavelCanvas.x; i++) {
      anguloSeno = map(
        i + this.padding,
        this.padding,
        width - this.padding,
        this.inicio,
        this.final
      );
      listaDeValores[i] = this.a * sin(this.b * anguloSeno + this.c) + this.d;
    }

    noFill();
    stroke("red");
    strokeWeight(2.5);

    let y,
      shapeFinalizado = false;
    beginShape();
    for (let x = 0; x <= this.areaUtilizavelCanvas.x; x++) {
      if (
        !(listaDeValores[x] < this.minimo || listaDeValores[x] > this.maximo)
      ) {
        if (shapeFinalizado) {
          beginShape();
          shapeFinalizado = false;
        }

        y = map(
          listaDeValores[x],
          this.minimo,
          this.maximo,
          height - this.padding,
          this.padding
        );

        vertex(x + this.padding, y);
      } else {
        if (!shapeFinalizado) {
          endShape();
          shapeFinalizado = true;
        }
      }
    }
    endShape();
    pop();
  }

  mostrarCosseno() {
    push();
    angleMode(DEGREES);

    textSize(16);
    fill("blue");
    stroke("gray");

    text(
      `g(x) = ${this.a}.cos(${this.b}.x+${this.c}) + ${this.d}`,
      this.padding * 1.5,
      this.padding * 1.5
    );

    const listaDeValores = [];
    let anguloCosseno;

    for (let i = 0; i <= this.areaUtilizavelCanvas.x; i++) {
      anguloCosseno = map(
        i + this.padding,
        this.padding,
        width - this.padding,
        this.inicio,
        this.final
      );
      listaDeValores[i] =
        this.a * cos(this.b * anguloCosseno + this.c) + this.d;
    }

    noFill();
    stroke("blue");
    strokeWeight(2.5);

    let y,
      shapeFinalizado = false;
    beginShape();
    for (let x = 0; x <= this.areaUtilizavelCanvas.x; x++) {
      if (
        !(listaDeValores[x] < this.minimo || listaDeValores[x] > this.maximo)
      ) {
        if (shapeFinalizado) {
          beginShape();
          shapeFinalizado = false;
        }

        y = map(
          listaDeValores[x],
          this.minimo,
          this.maximo,
          height - this.padding,
          this.padding
        );

        vertex(x + this.padding, y);
      } else {
        if (!shapeFinalizado) {
          endShape();
          shapeFinalizado = true;
        }
      }
    }
    endShape();
    pop();
  }

  mostrarTangente() {
    push();
    angleMode(DEGREES);

    textSize(16);
    fill("green");
    stroke("gray");

    text(
      `h(x) = ${this.a}.tan(${this.b}.x+${this.c}) + ${this.d}`,
      this.padding * 1.5,
      this.padding * 2
    );

    noFill();
    stroke("green");
    strokeWeight(2.5);

    const listaDeValores = [];
    let anguloTangente;

    for (let i = 0; i <= this.areaUtilizavelCanvas.x; i++) {
      anguloTangente = map(
        i + this.padding,
        this.padding,
        width - this.padding,
        this.inicio,
        this.final
      );
      listaDeValores[i] =
        this.a * tan(this.b * anguloTangente + this.c) + this.d;
    }

    let y,
      shapeFinalizado = false;
    beginShape();
    for (let x = 0; x <= this.areaUtilizavelCanvas.x; x++) {
      if (
        !(listaDeValores[x] < this.minimo || listaDeValores[x] > this.maximo)
      ) {
        if (shapeFinalizado) {
          beginShape();
          listaDeValores[x] < 0
            ? vertex(x + this.padding, height - this.padding)
            : vertex(x + this.padding, this.padding);
          shapeFinalizado = false;
        }

        y = map(
          listaDeValores[x],
          this.minimo,
          this.maximo,
          height - this.padding,
          this.padding
        );

        vertex(x + this.padding, y);
      } else {
        if (!shapeFinalizado) {
          if (abs(listaDeValores[x]) > this.maximo) {
            listaDeValores[x] > 0
              ? vertex(x + this.padding, this.padding)
              : vertex(x + this.padding, height - this.padding);
          }
          endShape();
          shapeFinalizado = true;
        }
      }
    }

    endShape();

    pop();
  }

  definirPonto() {
    push();
    angleMode(DEGREES);
    if (this.tela.sobCanvas()) {
      if (
        mouseX < this.padding ||
        mouseX > this.areaUtilizavelCanvas.x + this.padding
      )
        return;

      textAlign(CENTER, BOTTOM);

      let x = map(
        mouseX,
        this.padding,
        width - this.padding,
        this.inicio,
        this.final
      );

      if (document.getElementById("funcSen").checked) {
        let valorY = this.a * sin(this.b * x + this.c) + this.d;

        if (valorY >= this.minimo && valorY <= this.maximo) {
          let posY = map(
            valorY,
            this.minimo,
            this.maximo,
            height - this.padding,
            this.padding
          );

          stroke("firebrick");
          fill("firebrick");

          circle(mouseX, posY, 10);
          text(
            `( x: ${x.toFixed(0)}, y: ${valorY.toFixed(2)} )`,
            mouseX,
            posY - 10
          );
        }
      }
      if (document.getElementById("funcCos").checked) {
        let valorY = this.a * cos(this.b * x + this.c) + this.d;

        if (valorY >= this.minimo && valorY <= this.maximo) {
          let posY = map(
            valorY,
            this.minimo,
            this.maximo,
            height - this.padding,
            this.padding
          );

          stroke("darkblue");
          fill("darkblue");

          circle(mouseX, posY, 10);
          text(
            `( x: ${x.toFixed(0)}, y: ${valorY.toFixed(2)} )`,
            mouseX,
            posY - 10
          );
        }
      }
      if (document.getElementById("funcTan").checked) {
        let valorY = this.a * tan(this.b * x + this.c) + this.d;

        if (!(valorY < this.minimo || valorY > this.maximo)) {
          let posY = map(
            valorY,
            this.minimo,
            this.maximo,
            height - this.padding,
            this.padding
          );

          stroke("darkgreen");
          fill("darkgreen");

          circle(mouseX, posY, 10);
          text(
            `( x: ${x.toFixed(0)}, y: ${valorY.toFixed(2)} )`,
            mouseX,
            posY - 10
          );
        }
      }
    }
    pop();
  }

  _atualizarAngulos() {
    let angulo;
    for (
      let x = this.padding;
      x <= width - this.padding;
      x += this.areaUtilizavelCanvas.x / 8
    ) {
      angulo = map(
        x,
        this.padding,
        width - this.padding,
        this.inicio,
        this.final
      );
      if (!this.angulos.includes(angulo)) {
        this.angulos.push(angulo);
      }
    }
  }
}
