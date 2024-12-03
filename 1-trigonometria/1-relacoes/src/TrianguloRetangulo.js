class TrianguloRetangulo {
  constructor() {
    this.origem = createVector(width / 2 + width / 4, height / 2 + height / 4);
    this.catetoA;
    this.catetoB;

    let divAgrupador = document.getElementById("agrupador");
    let divContainer = document.querySelector(".container");
    let main = document.querySelector("main");
    main.appendChild(divContainer);
    divAgrupador.appendChild(main);
  }
  mostrar() {
    line(
      width / 2 + width / 4,
      height / 2 + height / 4,
      width / 2 + width / 4,
      height / 2 - height / 4
    );
    line(
      width / 2 + width / 4,
      height / 2 + height / 4,
      width / 2 - width / 4,
      height / 2 + height / 4
    );
    line(
      width / 2 - width / 4,
      height / 2 + height / 4,
      width / 2 + width / 4,
      height / 2 - height / 4
    );
  }
}
