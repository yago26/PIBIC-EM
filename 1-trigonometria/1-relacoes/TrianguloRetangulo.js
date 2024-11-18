class TrianguloRetangulo {
  constructor() {
    this.origem = createVector(width / 2 + width / 4, height / 2 + height / 4);
    this.catetoA;
    this.catetoB;
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
