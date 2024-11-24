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
  resAngulo.innerHTML = `Os valores de ${eval(angulo.value)}° são:`;
  if (angulos.hasOwnProperty(eval(angulo.value))) {
    resAngulo.innerHTML += ` 
    <br>Sen: ${angulos[Number(eval(angulo.value))].seno}
    <br>Cos: ${angulos[Number(eval(angulo.value))].cosseno}
    <br>Tan: ${angulos[Number(eval(angulo.value))].tangente}`;
  } else {
    resAngulo.innerHTML += ` 
    <br>Sen: ${sin(eval(angulo.value)).toFixed(3)}
    <br>Cos: ${cos(eval(angulo.value)).toFixed(3)}
    <br>Tan: ${tan(eval(angulo.value)).toFixed(3)}`;
  }
  angulo.value = "";
};

const resPOP = document.getElementById("resultadoOcorrenciaPositiva");
const anguloPOP = document.getElementById("ocorrenciaPositivaInput");
const mostrarPrimeiraOcorrenciaPositiva = () => {
  if (!anguloPOP.value) return;
  resPOP.innerHTML = `
  O ângulo ${eval(anguloPOP.value)}° corresponde ao ângulo de ${
    eval(anguloPOP.value) % 360
  }°`;
  anguloPOP.value = "";
};
