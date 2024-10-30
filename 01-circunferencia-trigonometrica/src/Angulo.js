class Angulo {
  constructor(x, y, diametro, angulo) {
    this.x = x;
    this.y = y;
    this.diametro = diametro;
    this.angulo = angulo;
    angleMode(DEGREES);
  }

  mostrar(boolean = false, valor) {
    this.sobMouse() && boolean ? fill("red") : fill("blue");
    this.sobMouse() && boolean ? stroke("red") : stroke("blue");
    if (boolean) strokeWeight(valor);
    circle(this.x, this.y, this.diametro);

    if (this.sobMouse()) {
      fill("red");
      strokeWeight(1.5);
    } else {
      fill("black");
      strokeWeight(0.4);
    }

    textSize(18);
    text(`${this.angulo}°`, this.x + 20, this.y - 5);
  }

  mostrarValores() {
    if (!this.angulo) return;
    if (this.sobMouse()) {
      let senoAngulo = sin(this.angulo).toFixed(3);
      let cosAngulo = cos(this.angulo).toFixed(3);
      let tanAngulo =
        parseInt(senoAngulo) / parseInt(cosAngulo) === Infinity
          ? "∄"
          : tan(this.angulo).toFixed(3);

      seno.textContent = `Seno: ${senoAngulo}`;
      cosseno.textContent = `Cosseno: ${cosAngulo}`;
      tangente.textContent = `Tangente: ${tanAngulo}`;

      document.body.appendChild(angulosContainer);
    } else if (keyIsPressed && keyCode === 32) {
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
