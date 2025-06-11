const coeficientes = document.querySelectorAll(".coeficientes");

coeficientes.forEach((coeficiente) => {
  const min = parseInt(coeficiente.min, 10);
  const max = parseInt(coeficiente.max, 10);

  coeficiente.addEventListener("input", function () {
    let value = parseInt(coeficiente.value, 10);

    if (value < min) {
      coeficiente.value = min;
    } else if (value > max) {
      coeficiente.value = max;
    }
  });

  coeficiente.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp" && parseInt(coeficiente.value, 10) >= max) {
      event.preventDefault();
    }
    if (event.key === "ArrowDown" && parseInt(coeficiente.value, 10) <= min) {
      event.preventDefault();
    }
  });
});

document.body.addEventListener("keypress", pressionandoTeclas);

document.querySelectorAll("input").forEach((input) => {
  input.onfocus = () => {
    document.body.removeEventListener("keypress", pressionandoTeclas);
  };
  input.onblur = () => {
    document.body.addEventListener("keypress", pressionandoTeclas);
  };
});

const senConfig = document.getElementById("funcSen");
const cosConfig = document.getElementById("funcCos");
const tanConfig = document.getElementById("funcTan");

const ampliar = document.getElementById("ampliar");
const reduzir = document.getElementById("reduzir");

function pressionandoTeclas(event) {
  if (event.key === "1") {
    senConfig.checked = !senConfig.checked;
  }
  if (event.key === "2") {
    cosConfig.checked = !cosConfig.checked;
  }
  if (event.key === "3") {
    tanConfig.checked = !tanConfig.checked;
  }
  if (event.key === "=") {
    reduzir.click();
  }
  if (event.key === "-") {
    ampliar.click();
  }
}

function mostrarValoresDoAngulo() {
  return alert("Funcionalidade ainda indisponível...");
}
