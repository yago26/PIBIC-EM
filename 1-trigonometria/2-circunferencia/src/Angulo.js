class Angulo {
  constructor(x, y, diametro, graus, pos) {
    this.x = x;
    this.y = y;
    this.diametro = diametro;
    this.graus = graus;
    this.pos = pos;
    angleMode(DEGREES);
  }

  mostrar() {
    push();
    this.sobMouse() ? fill("blue") : fill("black");
    this.sobMouse() ? stroke("blue") : stroke("black");
    circle(this.x, this.y, this.diametro);

    textSize(18);
    text(`${this.graus}°`, this.x + this.pos.x, this.y + this.pos.y);
    pop();
  }

  mostrarValores() {
    if (this.sobMouse()) {
      seno.innerHTML = `Seno: ${angulos[this.graus].seno}`;
      cosseno.innerHTML = `Cosseno: ${angulos[this.graus].cosseno}`;
      tangente.innerHTML = `Tangente: ${angulos[this.graus].tangente}`;

      document.querySelector("main").appendChild(angulosContainer);
    } else if (keyIsPressed && keyCode === 32) {
      seno.textContent = "";
      cosseno.textContent = "";
      tangente.textContent = "";
    }
  }

  sobMouse() {
    return dist(mouseX, mouseY, this.x, this.y) <= (this.diametro * 3) / 2;
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
      "<math><mfrac><mrow><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>",
    tangente:
      "<math><mfrac><mrow><msqrt><mn>3</mn></msqrt></mrow><mn>3</mn></mfrac></math>",
  },
  45: {
    seno: "<math><mfrac><mrow><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></math>",
    cosseno:
      "<math><mfrac><mrow><msqrt><mn>2</mn></msqrt></mrow><mn>2</mn></mfrac></math>",
    tangente: "1",
  },
  60: {
    seno: "<math><mfrac><mrow><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>",
    cosseno: "<math><mfrac><mrow><mn>1</mn></mrow><mn>2</mn></mfrac></math>",
    tangente: "<math><msqrt><mn>3</mn></msqrt></math>",
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
