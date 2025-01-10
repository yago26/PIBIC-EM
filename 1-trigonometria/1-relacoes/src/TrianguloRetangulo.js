class TrianguloRetangulo {
  constructor() {
    (this.alpha = {}), (this.beta = {});
    this._atualizarAngulos();

    this.altura = {
      pontoFixo: createVector(width / 2 + width / 4, height / 2 + height / 4),
      pontoVariavel: map(this.beta.angulo, 0, 90, 0, height / 2 + height / 4),
    };
    this.base = {
      pontoFixo: createVector(this.altura.pontoFixo.x, this.altura.pontoFixo.y),
      pontoVariavel: map(this.alpha.angulo, 0, 90, 0, width / 2 + width / 4),
    };
    this.hipotenusa = {
      ponto1: createVector(this.base.pontoVariavel, this.altura.pontoFixo.y),
      ponto2: createVector(this.base.pontoFixo.x, this.altura.pontoVariavel),
    };

    print(
      dist(
        this.base.pontoVariavel,
        this.altura.pontoFixo.y,
        this.base.pontoFixo.x,
        this.altura.pontoVariavel
      )
    );

    this.a;
    this.b;
    this.c;
    this._atualizarValoresLados();

    this.tela = new Tela();
    angleMode(DEGREES);
  }

  mostrar() {
    push();
    this.tela.mostrarGrades();
    this.mostrarArcosAngulos();
    this.mostrarAngulos();
    this.mostrarLados();
    this.mostrarValoresLados();
    pop();
  }

  mostrarLados() {
    push();
    this._atualizarAngulos();

    this.altura.pontoVariavel = map(
      this.beta.angulo,
      0,
      90,
      0,
      height / 2 + height / 4
    );

    this.base.pontoVariavel = map(
      this.alpha.angulo,
      0,
      90,
      0,
      width / 2 + width / 4
    );

    this.hipotenusa.ponto1.x = this.base.pontoVariavel;
    this.hipotenusa.ponto2.y = this.altura.pontoVariavel;

    strokeWeight(2.5);

    stroke("red");
    line(
      this.altura.pontoFixo.x,
      this.altura.pontoVariavel,
      this.altura.pontoFixo.x,
      this.altura.pontoFixo.y
    );

    stroke("blue");
    line(
      this.base.pontoFixo.x,
      this.base.pontoFixo.y,
      this.base.pontoVariavel,
      this.base.pontoFixo.y
    );

    stroke("green");
    line(
      this.hipotenusa.ponto1.x,
      this.hipotenusa.ponto1.y,
      this.hipotenusa.ponto2.x,
      this.hipotenusa.ponto2.y
    );
    pop();
  }

  mostrarValoresLados() {
    push();
    this._atualizarValoresLados();

    textSize(13);
    fill("brown");
    stroke("brown");
    strokeWeight(0.75);

    // A = HIPOTENUSA / ,
    textAlign(RIGHT, BOTTOM);
    text(
      this.a,
      (this.hipotenusa.ponto1.x + this.hipotenusa.ponto2.x) / 2,
      (this.hipotenusa.ponto1.y + this.hipotenusa.ponto2.y) / 2 - 5
    );

    // B = BASE _ ,
    textAlign(CENTER, TOP);
    text(
      this.b,
      (this.base.pontoFixo.x + this.base.pontoVariavel) / 2,
      (this.base.pontoFixo.y + this.base.pontoFixo.y) / 2 + 5
    );

    // C = ALTURA |
    textAlign(LEFT, CENTER);
    text(
      this.c,
      (this.altura.pontoFixo.x + this.altura.pontoFixo.x) / 2 + 5,
      (this.altura.pontoVariavel + this.altura.pontoFixo.y) / 2
    );
    pop();
  }

  mostrarAngulos() {
    push();

    strokeWeight(0.75);

    // ALPHA
    stroke("gray");
    fill(color(0, 255, 255, 50));
    textAlign(CENTER, CENTER);
    text(
      `${this.alpha.angulo}°`,
      cos(-this.alpha.angulo / 2) * 30 + this.base.pontoVariavel,
      sin(-this.alpha.angulo / 2) * 30 + this.base.pontoFixo.y
    );

    // BETA
    stroke("purple");
    fill(color(157, 0, 255, 50));
    textAlign(CENTER, TOP);
    text(
      `${this.beta.angulo}°`,
      -cos(this.beta.angulo / 2) * 30 +
        this.altura.pontoFixo.x +
        map(this.beta.angulo, 0, 90, 35, 0),
      sin(this.beta.angulo / 2) * 30 +
        this.altura.pontoVariavel +
        map(this.beta.angulo, 0, 90, 20, 0)
    );

    // 90
    noFill();
    stroke("black");
    strokeWeight(2.5);
    let tam = map(min(this.alpha.angulo, this.beta.angulo), 0, 45, 1, 20);
    square(this.base.pontoFixo.x - tam, this.base.pontoFixo.y - tam, tam);
    pop();
  }

  mostrarArcosAngulos() {
    push();
    textAlign(CENTER, CENTER);
    stroke("cyan");
    fill(color(0, 255, 255, 50));
    arc(
      this.base.pontoVariavel,
      this.base.pontoFixo.y,
      30,
      30,
      -this.alpha.angulo,
      0
    );

    stroke("purple");
    fill(color(157, 0, 255, 50));
    arc(
      this.altura.pontoFixo.x,
      this.altura.pontoVariavel,
      30,
      30,
      90,
      -this.beta.angulo + map(this.beta.angulo, 0, 90, 90, 270)
    );
    pop();
  }

  _atualizarAngulos() {
    const angulos = document.querySelectorAll(".valorAnguloRange");
    const [anguloAlpha, anguloBeta] = angulos;
    [this.alpha.angulo, this.beta.angulo] = [
      anguloAlpha.value,
      anguloBeta.value,
    ];
  }

  _atualizarValoresLados() {
    const lados = document.querySelectorAll(".valorLado");

    lados.forEach((input, i) => {
      if (input.value !== "") this._determinarLados(i);
      if (input === lados[lados.length - 1]) this._determinarLados(1);
    });

    // SOH CAH TOA
    // A = HIPOTENUSA / , B = BASE _ , C = ALTURA |
    // cos(this.alpha) / 1 = 5 / A
    // sin(this.alpha) = C / A
  }

  _determinarLados(indice) {
    const lados = document.querySelectorAll(".valorLado");
    const [inputB, inputC, inputA] = lados;
    let [a, b, c] = [inputA.value, inputB.value, inputC.value];

    switch (indice) {
      case 0:
        if (a === "") a = 5;
        this.a = a;
        this.b = (this.a * cos(this.alpha.angulo)).toFixed(2);
        this.c = (this.a * sin(this.alpha.angulo)).toFixed(2);
        break;
      case 1:
        if (b === "") b = 4;
        this.b = b;
        this.a = (this.b / cos(this.alpha.angulo)).toFixed(2);
        this.c = (this.a * sin(this.alpha.angulo)).toFixed(2);
        break;
      case 2:
        if (c === "") c = 3;
        this.c = c;
        this.a = (this.c / sin(this.alpha.angulo)).toFixed(2);
        this.b = (this.a * cos(this.alpha.angulo)).toFixed(2);
        break;
    }
  }
}
