class Matriz {
  constructor(valores) {
    this.valores = valores;
  }
  compararTipos(matriz) {
    if (
      this.valores.length !== matriz.length ||
      this.valores[0].length !== matriz[0].length
    )
      return false;
    return true;
  }
  identidade(n) {
    return Array.from({ length: n }, (v, i) =>
      Array.from({ length: n }, (v, j) => (i === j ? 1 : 0))
    );
  }
  somar(matriz) {
    if (!compararTipos(matriz)) return;
    const matrizR = [];
    for (let i in this.valores) {
      matrizR[i] = [];
      for (let j in this.valores[i]) {
        matrizR[i][j] = this.valores[i][j] + matriz[i][j];
      }
    }
    this.valores = matrizR;
    return this.valores;
  }
  subtrair(matriz) {
    if (!compararTipos(matriz)) return;
    const matrizR = [];
    for (let i in this.valores) {
      matrizR[i] = [];
      for (let j in this.valores[i]) {
        matrizR[i][j] = this.valores[i][j] - matriz[i][j];
      }
    }
    this.valores = matrizR;
    return this.valores;
  }
  multiplicar(matriz) {
    if (this.valores[0].length !== matriz.length)
      return console.log("Impossível realizar a multiplicação");
    const matrizR = new Array(this.valores.length);
    for (let i in this.valores) {
      matrizR[i] = new Array(matriz[0].length).fill(0);
      for (let j in matriz[0]) {
        for (let k in this.valores[0]) {
          console.log(
            `a${Number(i) + 1}${Number(j) + 1} += ${this.valores[i][k]} * ${
              matriz[k][j]
            } = ${this.valores[i][k] * matriz[k][j]}`
          );
          matrizR[i][j] += this.valores[i][k] * matriz[k][j];
        }
        console.log(`a${Number(i) + 1}${Number(j) + 1} = ${matrizR[i][j]}`);
      }
    }
    this.valores = matrizR;
    return this.valores;
  }
  elevar(potencia = 2) {
    if (this.valores.length !== this.valores[0].length)
      return console.log("Não é quadrática");
    if (potencia === 0) {
      return this.identidade(this.valores.length);
    }
    for (let i = 2; i <= potencia; i++) {
      this.valores = this.multiplicar(this.valores);
    }
    return this.valores;
  }
  transpor() {
    const matrizR = [];
    for (let i in this.valores) {
      for (let j in this.valores[i]) {
        if (!matrizR[j]) matrizR[j] = [];
        matrizR[j][i] = this.valores[i][j];
      }
    }
    this.valores = matrizR;
    return this.valores;
  }
}
