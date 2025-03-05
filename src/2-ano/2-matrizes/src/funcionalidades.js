const resultado = document.getElementsByClassName("matriz")[0];

const criarMatriz = () => {
  resultado.innerHTML = "";
  let linha = document.getElementById("inputLinha").value;
  let coluna = document.getElementById("inputColuna").value;
  for (let i = 0; i < linha; i++) {
    for (let j = 0; j < coluna; j++) {
      let input = document.createElement("input");
      input.id = `${i}${j}`;
      input.type = "text";
      resultado.appendChild(input);
    }
    resultado.innerHTML += "<br />";
  }
};
