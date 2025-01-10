const rangeAngulo = document.querySelectorAll(".valorAnguloRange");

const [rangeAlpha, rangeBeta] = rangeAngulo;

rangeAlpha.addEventListener("input", function () {
  rangeBeta.value = 90 - rangeAlpha.value;
  numberAlpha.value = rangeAlpha.value;
  numberBeta.value = 90 - rangeAlpha.value;
});

rangeBeta.addEventListener("input", function () {
  rangeAlpha.value = 90 - rangeBeta.value;
  numberAlpha.value = 90 - rangeBeta.value;
  numberBeta.value = rangeBeta.value;
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
