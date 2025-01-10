class Tela {
  constructor() {
    const divAgrupador = document.getElementById("agrupador");
    const hrDivisor = document.getElementById("divisorPrincipal");
    const main = document.querySelector("main");
    divAgrupador.insertBefore(main, hrDivisor);
  }

  mostrarGrades() {
    push();
    stroke("gray");
    strokeWeight(0.4);

    for (let x = 0; x <= width; x += width / 4) {
      line(x, 0, x, height);
    }
    for (let y = 0; y <= height; y += height / 4) {
      line(0, y, width, y);
    }
    pop();
  }
}
