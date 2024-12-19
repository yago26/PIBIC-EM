class Angulo {
  constructor(raio, angulo) {
    this.raio = raio;
    this.angulo = angulo;

    this.diametro = 7.5;
    angleMode(DEGREES);
    this.x = cos(-angulo) * raio + width / 2;
    this.y = sin(-angulo) * raio + height / 2;

    this.posTexto = createVector(
      angulo === 0
        ? 10
        : angulo === 360
        ? 30
        : angulo === 90
        ? 0
        : angulo === 180
        ? -30
        : angulo === 270
        ? 0
        : angulo < 90 || (angulo > 270 && angulo < 360)
        ? 20
        : -25,
      angulo === 0 || angulo === 360
        ? 0
        : angulo === 90
        ? -15
        : angulo === 180
        ? 0
        : angulo === 270
        ? 20
        : angulo < 90
        ? -10
        : angulo < 180
        ? -10
        : angulo < 270
        ? 15
        : 15
    );
  }

  mostrar() {
    push();
    if (this.angulo === 0 || this.angulo === 360) {
      this.posTexto.x =
        this.angulo === 0 && !document.getElementById("modoNegativo").checked
          ? 20
          : this.angulo === 360 &&
            !document.getElementById("modoNegativo").checked
          ? 30
          : this.angulo === 360 &&
            document.getElementById("modoNegativo").checked
          ? 20
          : 30;
    }

    let cor = this.sobMouse() ? "goldenrod" : "black";
    fill(cor);
    stroke(cor);
    circle(this.x, this.y, this.diametro);

    textSize(18);
    textAlign(CENTER, CENTER);

    text(
      document.getElementById("modoRadianos").checked
        ? document.getElementById("modoNegativo").checked
          ? `-${radianos[-this.angulo + 360]}`
          : radianos[this.angulo]
        : document.getElementById("modoNegativo").checked
        ? `${-360 + this.angulo}°`
        : `${this.angulo}°`,
      this.x + this.posTexto.x,
      this.y + this.posTexto.y
    );
    pop();
  }

  mostrarValores() {
    if (this.sobMouse()) {
      this.cor = "blue";

      valores.innerHTML = `
      <span class="senValor valores">Sen:</span> ${angulos[this.angulo].seno}
      <br><span class="cosValor valores">Cos:</span> ${
        angulos[this.angulo].cosseno
      }
      <br><span class="tanValor valores">Tan:</span> ${
        angulos[this.angulo].tangente
      }
      `;

      document.querySelector("main").appendChild(angulosValoresContainer);
    }
  }

  sobMouse() {
    return dist(mouseX, mouseY, this.x, this.y) <= this.diametro / 2;
  }
}

const angulosValoresContainer = document.createElement("div");

const valores = document.createElement("p");
valores.id = "valores";
angulosValoresContainer.appendChild(valores);

const tabelaTrigonometrica = {
  0: { seno: "0", cosseno: "1", tangente: "0" },
  30: {
    seno: "<math><mfrac><mrow><mn>1</mn></mrow><mn>2</mn></mfrac></math>",
    cosseno:
      "<math><mfrac><mrow><mn>&radic;3</mn></mrow><mn>2</mn></mfrac></math>",
    tangente:
      "<math><mfrac><mrow><mn>&radic;3</mn></mrow><mn>3</mn></mfrac></math>",
  },
  45: {
    seno: "<math><mfrac><mrow><mn>&radic;2</mn></mrow><mn>2</mn></mfrac></math>",
    cosseno:
      "<math><mfrac><mrow><mn>&radic;2</mn></mrow><mn>2</mn></mfrac></math>",
    tangente: "1",
  },
  60: {
    seno: "<math><mfrac><mrow><mn>&radic;3</mn></mrow><mn>2</mn></mfrac></math>",
    cosseno: "<math><mfrac><mrow><mn>1</mn></mrow><mn>2</mn></mfrac></math>",
    tangente: "<math><mn>&radic;3</mn></math>",
  },
  90: { seno: "1", cosseno: "0", tangente: "∄" },
};

const angulos = {
  0: {
    seno: tabelaTrigonometrica[0].seno,
    cosseno: "+" + tabelaTrigonometrica[0].cosseno,
    tangente: tabelaTrigonometrica[0].tangente,
  },
  30: {
    seno: "+" + tabelaTrigonometrica[30].seno,
    cosseno: "+" + tabelaTrigonometrica[30].cosseno,
    tangente: "+" + tabelaTrigonometrica[30].tangente,
  },
  45: {
    seno: "+" + tabelaTrigonometrica[45].seno,
    cosseno: "+" + tabelaTrigonometrica[45].cosseno,
    tangente: "+" + tabelaTrigonometrica[45].tangente,
  },
  60: {
    seno: "+" + tabelaTrigonometrica[60].seno,
    cosseno: "+" + tabelaTrigonometrica[60].cosseno,
    tangente: "+" + tabelaTrigonometrica[60].tangente,
  },
  90: {
    seno: "+" + tabelaTrigonometrica[90].seno,
    cosseno: tabelaTrigonometrica[90].cosseno,
    tangente: tabelaTrigonometrica[90].tangente,
  },
  120: {
    seno: "+" + tabelaTrigonometrica[60].seno,
    cosseno: "-" + tabelaTrigonometrica[60].cosseno,
    tangente: "-" + tabelaTrigonometrica[60].tangente,
  },
  135: {
    seno: "+" + tabelaTrigonometrica[45].seno,
    cosseno: "-" + tabelaTrigonometrica[45].cosseno,
    tangente: "-" + tabelaTrigonometrica[45].tangente,
  },
  150: {
    seno: "+" + tabelaTrigonometrica[30].seno,
    cosseno: "-" + tabelaTrigonometrica[30].cosseno,
    tangente: "-" + tabelaTrigonometrica[30].tangente,
  },
  180: {
    seno: tabelaTrigonometrica[0].seno,
    cosseno: "-" + tabelaTrigonometrica[0].cosseno,
    tangente: tabelaTrigonometrica[0].tangente,
  },
  210: {
    seno: "-" + tabelaTrigonometrica[30].seno,
    cosseno: "-" + tabelaTrigonometrica[30].cosseno,
    tangente: "+" + tabelaTrigonometrica[30].tangente,
  },
  225: {
    seno: "-" + tabelaTrigonometrica[45].seno,
    cosseno: "-" + tabelaTrigonometrica[45].cosseno,
    tangente: "+" + tabelaTrigonometrica[45].tangente,
  },
  240: {
    seno: "-" + tabelaTrigonometrica[60].seno,
    cosseno: "-" + tabelaTrigonometrica[60].cosseno,
    tangente: "+" + tabelaTrigonometrica[60].tangente,
  },
  270: {
    seno: "-" + tabelaTrigonometrica[90].seno,
    cosseno: tabelaTrigonometrica[90].cosseno,
    tangente: tabelaTrigonometrica[90].tangente,
  },
  300: {
    seno: "-" + tabelaTrigonometrica[60].seno,
    cosseno: "+" + tabelaTrigonometrica[60].cosseno,
    tangente: "-" + tabelaTrigonometrica[60].tangente,
  },
  315: {
    seno: "-" + tabelaTrigonometrica[45].seno,
    cosseno: "+" + tabelaTrigonometrica[45].cosseno,
    tangente: "-" + tabelaTrigonometrica[45].tangente,
  },
  330: {
    seno: "-" + tabelaTrigonometrica[30].seno,
    cosseno: "+" + tabelaTrigonometrica[30].cosseno,
    tangente: "-" + tabelaTrigonometrica[30].tangente,
  },
  360: {
    seno: tabelaTrigonometrica[0].seno,
    cosseno: "+" + tabelaTrigonometrica[0].cosseno,
    tangente: tabelaTrigonometrica[0].tangente,
  },
};

const radianos = {
  0: "0",
  30: "π/6",
  45: "π/4",
  60: "π/3",
  90: "π/2",
  120: "2π/3",
  135: "3π/4",
  150: "5π/6",
  180: "π",
  210: "7π/6",
  225: "5π/4",
  240: "4π/3",
  270: "3π/2",
  300: "5π/3",
  315: "7π/4",
  330: "11π/6",
  360: "2π",
};
