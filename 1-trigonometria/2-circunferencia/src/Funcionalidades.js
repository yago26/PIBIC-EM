let container = document.querySelectorAll(".container");

for (let i = 0; i < container.length; i++) {
  container[i].querySelectorAll("input").forEach((input) => {
    input.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        container[i].querySelector(".btn").click();
      }
    });
  });
}

const rad = document.getElementById("radInput");
const grau = document.getElementById("grauInput");

const converter = () => {
  if ((rad.value && grau.value) || (!rad.value && !grau.value)) return;
  if (rad.value) {
    grau.value = `${degrees(eval(rad.value) * PI)}`;
    rad.value = "";
  } else {
    rad.value = `${radians(eval(grau.value) / PI)}`;
    grau.value = "";
  }
};

const angulo = document.getElementById("anguloInput");
const resAngulo = document.getElementById("resultadoAngulo");

const mostrarValoresDoAngulo = () => {
  if (!angulo.value) return;
  resAngulo.innerHTML = `Os valores de <span class="valores">${eval(
    angulo.value
  )}°</span> são:`;
  if (angulos.hasOwnProperty(eval(angulo.value))) {
    resAngulo.innerHTML += ` 
    <br><span class="senValor valores">Sen:</span> ${
      angulos[Number(eval(angulo.value))].seno
    }
    <br><span class="cosValor valores">Cos:</span> ${
      angulos[Number(eval(angulo.value))].cosseno
    }
    <br><span class="tanValor valores">Tan:</span> ${
      angulos[Number(eval(angulo.value))].tangente
    }`;
  } else {
    resAngulo.innerHTML += ` 
    <br><span class="senValor valores">Sen:</span> ${sin(
      eval(angulo.value)
    ).toFixed(4)}
    <br><span class="cosValor valores">Cos:</span> ${cos(
      eval(angulo.value)
    ).toFixed(4)}
    <br><span class="tanValor valores">Tan:</span> ${tan(
      eval(angulo.value)
    ).toFixed(4)}`;
  }
  angulo.value = "";
};

const resPOP = document.getElementById("resultadoOcorrenciaPositiva");
const anguloPOP = document.getElementById("ocorrenciaPositivaInput");
const mostrarPrimeiraOcorrenciaPositiva = () => {
  if (!anguloPOP.value) return;
  resPOP.innerHTML = `
  ${eval(anguloPOP.value)}° => <span class="valores">${
    eval(anguloPOP.value) % 360
  }°</span>`;
  anguloPOP.value = "";
};
