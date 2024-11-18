class VetorLinha {
  constructor(x, y, comprimento, color) {
    this.origem = createVector(x, y);
    this.sentido;
    this.comprimento = comprimento;
    this.color = color;
  }
  mostrar() {
    push();
    fill(this.color);
    this.sentido = createVector(mouseX - this.origem.x, mouseY - this.origem.y);
    this.sentido.setMag(this.comprimento);
    stroke(this.color);
    strokeWeight(1.8);
    line(
      this.origem.x,
      this.origem.y,
      this.origem.x + this.sentido.x,
      this.origem.y + this.sentido.y
    );
    stroke("green");
    line(
      this.origem.x + this.sentido.x,
      this.origem.y + this.sentido.y,
      this.origem.x + this.sentido.x,
      height / 2
    );
    stroke("blue");
    line(
      this.origem.x,
      this.origem.y,
      this.origem.x + this.sentido.x,
      this.origem.y
    );
    pop();
  }
}
