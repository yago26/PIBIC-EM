const rangeAngulo = document.querySelectorAll(".valorAnguloRange");

const [rangeAlpha, rangeBeta] = rangeAngulo;

const anguloPersonalizadoAlpha = document.getElementById(
  "anguloPersonalizadoAlpha"
);
const anguloPersonalizadoBeta = document.getElementById(
  "anguloPersonalizadoBeta"
);

const valorAnguloPersonalizadoAlphaSeno = document.getElementById(
  "valorAnguloPersonalizadoAlpha-seno"
);
const valorAnguloPersonalizadoBetaSeno = document.getElementById(
  "valorAnguloPersonalizadoBeta-seno"
);

const valorAnguloPersonalizadoAlphaCosseno = document.getElementById(
  "valorAnguloPersonalizadoAlpha-cosseno"
);
const valorAnguloPersonalizadoBetaCosseno = document.getElementById(
  "valorAnguloPersonalizadoBeta-cosseno"
);

const valorAnguloPersonalizadoAlphaTangente = document.getElementById(
  "valorAnguloPersonalizadoAlpha-tangente"
);
const valorAnguloPersonalizadoBetaTangente = document.getElementById(
  "valorAnguloPersonalizadoBeta-tangente"
);

rangeAlpha.addEventListener("input", function () {
  rangeBeta.value = 90 - rangeAlpha.value;
  numberAlpha.value = rangeAlpha.value;
  numberBeta.value = 90 - rangeAlpha.value;

  atualizarValoresPersonalizados();
});

rangeAlpha.addEventListener("change", function () {
  atualizarValoresPersonalizados();
});

rangeBeta.addEventListener("input", function () {
  rangeAlpha.value = 90 - rangeBeta.value;
  numberAlpha.value = 90 - rangeBeta.value;
  numberBeta.value = rangeBeta.value;

  atualizarValoresPersonalizados();
});

rangeAngulo.forEach((input) =>
  input.addEventListener("keydown", function (event) {
    let value = input.value;
    if (event.shiftKey && event.key === "ArrowUp") {
      if (value < 30) {
        input.value = 30 - 1;
      } else if (value < 45) {
        input.value = 45 - 1;
      } else if (value < 60) {
        input.value = 60 - 1;
      }
    }
    if (event.shiftKey && event.key === "ArrowDown") {
      if (value > 60) {
        input.value = 60 + 1;
      } else if (value > 45) {
        input.value = 45 + 1;
      } else if (value > 30) {
        input.value = 30 + 1;
      }
    }
  })
);

const numberAngulo = document.querySelectorAll(".valorAnguloNumber");

numberAngulo.forEach((input) => {
  const min = parseInt(input.min);
  const max = parseInt(input.max);

  input.addEventListener("input", function () {
    if (input.value === "") input.value = 1;

    if (input.value < min) {
      input.value = min;
    } else if (input.value > max) {
      input.value = max;
    }
    igualar(input.id);
    atualizarValoresPersonalizados();
  });

  input.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp" && parseInt(input.value, 10) >= max) {
      event.preventDefault();
    }
    if (event.key === "ArrowDown" && parseInt(input.value, 10) <= min) {
      event.preventDefault();
    }
  });
});

const [numberAlpha, numberBeta] = numberAngulo;

function igualar(id) {
  if (id === "valorAnguloAlphaNumber") {
    numberBeta.value = 90 - numberAlpha.value;
  } else {
    numberAlpha.value = 90 - numberBeta.value;
  }
  rangeAlpha.value = numberAlpha.value;
  rangeBeta.value = numberBeta.value;
}

let modal = document.getElementById("modal");

const abrirModal = () => {
  modal.showModal();
};

const fecharModal = () => {
  modal.close();
};

function atualizarValoresPersonalizados() {
  anguloPersonalizadoAlpha.textContent = `${rangeAlpha.value}°`;
  valorAnguloPersonalizadoAlphaSeno.textContent = sin(rangeAlpha.value).toFixed(
    4
  );
  valorAnguloPersonalizadoAlphaCosseno.textContent = cos(
    rangeAlpha.value
  ).toFixed(4);
  valorAnguloPersonalizadoAlphaTangente.textContent = tan(
    rangeAlpha.value
  ).toFixed(4);

  anguloPersonalizadoBeta.textContent = `${rangeBeta.value}°`;
  valorAnguloPersonalizadoBetaSeno.textContent = sin(rangeBeta.value).toFixed(
    4
  );
  valorAnguloPersonalizadoBetaCosseno.textContent = cos(
    rangeBeta.value
  ).toFixed(4);
  valorAnguloPersonalizadoBetaTangente.textContent = tan(
    rangeBeta.value
  ).toFixed(4);
}
