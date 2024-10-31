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
const res = document.getElementById("resultado");

const mostrarValoresDoAngulo = () => {
  if (angulos.hasOwnProperty(Number(eval(angulo.value)))) {
    res.innerHTML = `Os valores de ${angulo.value}° são: 
    <br>Seno: ${angulos[Number(eval(angulo.value))].seno}
    <br>Cosseno: ${angulos[Number(eval(angulo.value))].cosseno}
    <br>Tangente: ${angulos[Number(eval(angulo.value))].tangente}`;
  } else {
    res.innerHTML = `Os valores de ${angulo.value}° são: 
    <br>Seno: ${sin(eval(angulo.value)).toFixed(3)}
    <br>Cosseno: ${cos(eval(angulo.value)).toFixed(3)}
    <br>Tangente: ${tan(eval(angulo.value)).toFixed(3)}`;
  }
  angulo.value = "";
};
