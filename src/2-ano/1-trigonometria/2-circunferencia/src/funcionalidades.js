const radianosConfig = document.getElementById("modoRadianos");
const negativoConfig = document.getElementById("modoNegativo");
const quadrantesConfig = document.getElementById("modoQuadrantes");

const btnConfig = document.getElementById("apresentacao");
btnConfig.addEventListener("click", () => {
  alert("Funcionalidade ainda não ativa...");
});

document.querySelectorAll("input").forEach((input) => {
  input.onfocus = () => {
    document.body.removeEventListener("keypress", pressionandoTeclas);
  };
  input.onblur = () => {
    document.body.addEventListener("keypress", pressionandoTeclas);
  };
});

document.body.addEventListener("keypress", pressionandoTeclas);

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

const teclas = {
  1: () => (radianosConfig.checked = !radianosConfig.checked),
  2: () => (negativoConfig.checked = !negativoConfig.checked),
  3: () => (quadrantesConfig.checked = !quadrantesConfig.checked),
  f: () => btnConfig.click(),
  Space: () => {
    document.getElementById("valoresRT").textContent = "";
    resAngulo.textContent = "";
    resPOP.textContent = "";
  },
};

function pressionandoTeclas(event) {
  let func = teclas[event.key];
  if (func) {
    func();
  }
}

const rad = document.getElementById("radInput");
const grau = document.getElementById("grauInput");

const converter = () => {
  if (!rad.value && !grau.value) return;
  if (rad.value && grau.value) {
    let valorGraus = degrees(eval(rad.value) * PI).toFixed(2),
      valorRadianos = radians(eval(grau.value) / PI);
    Number(valorGraus) === eval(grau.value)
      ? alert("São correspondentes!")
      : alert(
          `Não são correspondentes!\n${rad.value} π rad => ${valorGraus}°\n${grau.value}° => ${valorRadianos} π rad`
        );

    rad.value = "";
    grau.value = "";
    return;
  }

  if (rad.value) {
    alert(
      `π rad --> 180°\n${rad.value} π rad --> x\nx = ${
        rad.value
      }*180\nx = ${degrees(eval(rad.value) * PI).toFixed(2)}°`
    );
    grau.value = `${degrees(eval(rad.value) * PI).toFixed(2)}`;
    rad.value = "";
  } else {
    alert(
      `π rad --> 180°\nx --> ${grau.value}°\nx = ${
        grau.value
      }/180\nx = ${radians(eval(grau.value) / PI)} π rad`
    );
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
  if (Math.sign(eval(anguloPOP.value)) === -1) {
    let divisao = parseInt(-eval(anguloPOP.value) / 360);
    alert(
      `POP = ${eval(anguloPOP.value)}° + 360° * (k + 1)\nk = Inteiro(${-eval(
        anguloPOP.value
      )}° / 360°)\nPOP = ${eval(anguloPOP.value)}° + 360° * ${
        divisao + 1
      }\nPOP = ${eval(anguloPOP.value) + 360 * (divisao + 1)}°`
    );
    resPOP.innerHTML = `
    ${eval(anguloPOP.value)}° => <span class="valores">${
      eval(anguloPOP.value) + 360 * (divisao + 1)
    }°</span>`;
  } else {
    alert(
      `POP = Resto(${eval(anguloPOP.value)}° / 360°)\nPOP = ${
        eval(anguloPOP.value) % 360
      }°`
    );
    resPOP.innerHTML = `
    ${eval(anguloPOP.value)}° => <span class="valores">${
      eval(anguloPOP.value) % 360
    }°</span>`;
  }
  anguloPOP.value = "";
};
