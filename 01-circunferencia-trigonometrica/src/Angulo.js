class Angulo {
  constructor(x, y, angulo) {
    this.x = x;
    this.y = y;
    this.diametro = 20;
    this.angulo = angulo;
  }

  desenhar() {
    this.sobMouse() ? fill("red") : fill("blue");
    this.sobMouse() ? stroke("red") : stroke("blue");
    strokeWeight(0.8);
    circle(this.x, this.y, this.diametro);
  }

  mostrarAngulo() {
    if (this.sobMouse()) {
      fill("red");
      textSize(18);
      strokeWeight(1.5);
      text(this.angulo, this.x + 20, this.y - 5);
    }
  }

  mostrarValores() {
    if (this.sobMouse()) {
      seno.textContent = `Seno: ${valoresAngulos[this.angulo].seno}`;
      cosseno.textContent = `Cosseno: ${valoresAngulos[this.angulo].cosseno}`;
      tangente.textContent = `Tangente: ${
        valoresAngulos[this.angulo].tangente
      }`;
      document.body.appendChild(angulosContainer);
    } else if (mouseIsPressed) {
      seno.textContent = "";
      cosseno.textContent = "";
      tangente.textContent = "";
    }
  }

  sobMouse() {
    return dist(mouseX, mouseY, this.x, this.y) <= this.diametro / 2 + 20;
  }
}

const angulosContainer = document.createElement("div");

const seno = document.createElement("p");
angulosContainer.appendChild(seno);
const cosseno = document.createElement("p");
angulosContainer.appendChild(cosseno);
const tangente = document.createElement("p");
angulosContainer.appendChild(tangente);
