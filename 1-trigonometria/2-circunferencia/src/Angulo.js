class Angulo {
  constructor(raio, angulo, posTexto, setCor = true) {
    this.raio = raio;
    this.angulo = angulo;
    this.posTexto = posTexto;
    this.setCor = setCor;

    this.diametro = 7.5;
    angleMode(DEGREES);
    this.x = cos(-angulo) * raio + width / 2;
    this.y = sin(-angulo) * raio + height / 2;
  }

  mostrar() {
    push();
    let cor = this.sobMouse() && this.setCor ? "blue" : "black";
    fill(cor);
    stroke(cor);
    circle(this.x, this.y, this.diametro);

    textSize(18);
    text(`${this.angulo}°`, this.x + this.posTexto.x, this.y + this.posTexto.y);
    pop();
  }

  mostrarValores() {
    if (this.sobMouse()) {
      this.cor = "blue";

      seno.innerHTML = `Sen: ${angulos[this.angulo].seno}`;
      cosseno.innerHTML = `Cos: ${angulos[this.angulo].cosseno}`;
      tangente.innerHTML = `Tan: ${angulos[this.angulo].tangente}`;

      document.querySelector("main").appendChild(angulosContainer);
    } else if (keyIsPressed && keyCode === 32) {
      seno.textContent = "";
      cosseno.textContent = "";
      tangente.textContent = "";
    }
  }

  sobMouse() {
    return dist(mouseX, mouseY, this.x, this.y) <= this.diametro / 2;
  }
}

const angulosContainer = document.createElement("div");

const seno = document.createElement("p");
angulosContainer.appendChild(seno);
const cosseno = document.createElement("p");
angulosContainer.appendChild(cosseno);
const tangente = document.createElement("p");
angulosContainer.appendChild(tangente);

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
    cosseno: "- " + tabelaTrigonometrica[60].cosseno,
    tangente: "-" + tabelaTrigonometrica[60].tangente,
  },
  135: {
    seno: "+" + tabelaTrigonometrica[45].seno,
    cosseno: "- " + tabelaTrigonometrica[45].cosseno,
    tangente: "-" + tabelaTrigonometrica[45].tangente,
  },
  150: {
    seno: "+" + tabelaTrigonometrica[30].seno,
    cosseno: "- " + tabelaTrigonometrica[30].cosseno,
    tangente: "- " + tabelaTrigonometrica[30].tangente,
  },
  180: {
    seno: "+" + tabelaTrigonometrica[90].seno,
    cosseno: tabelaTrigonometrica[90].cosseno,
    tangente: tabelaTrigonometrica[90].tangente,
  },
  210: {
    seno: "- " + tabelaTrigonometrica[30].seno,
    cosseno: "- " + tabelaTrigonometrica[30].cosseno,
    tangente: "+" + tabelaTrigonometrica[30].tangente,
  },
  225: {
    seno: "- " + tabelaTrigonometrica[45].seno,
    cosseno: "- " + tabelaTrigonometrica[45].cosseno,
    tangente: "+" + tabelaTrigonometrica[45].tangente,
  },
  240: {
    seno: "- " + tabelaTrigonometrica[60].seno,
    cosseno: "- " + tabelaTrigonometrica[60].cosseno,
    tangente: "+" + tabelaTrigonometrica[60].tangente,
  },
  270: {
    seno: "-" + tabelaTrigonometrica[90].seno,
    cosseno: tabelaTrigonometrica[90].cosseno,
    tangente: tabelaTrigonometrica[90].tangente,
  },
  300: {
    seno: "- " + tabelaTrigonometrica[60].seno,
    cosseno: "+" + tabelaTrigonometrica[60].cosseno,
    tangente: "-" + tabelaTrigonometrica[60].tangente,
  },
  315: {
    seno: "- " + tabelaTrigonometrica[45].seno,
    cosseno: "+" + tabelaTrigonometrica[45].cosseno,
    tangente: "-" + tabelaTrigonometrica[45].tangente,
  },
  330: {
    seno: "- " + tabelaTrigonometrica[30].seno,
    cosseno: "+" + tabelaTrigonometrica[30].cosseno,
    tangente: "- " + tabelaTrigonometrica[30].tangente,
  },
  360: {
    seno: tabelaTrigonometrica[0].seno,
    cosseno: "+" + tabelaTrigonometrica[0].cosseno,
    tangente: tabelaTrigonometrica[0].tangente,
  },
};
