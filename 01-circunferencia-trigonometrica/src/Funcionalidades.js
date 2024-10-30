const rad = document.getElementById("radInput");
const grau = document.getElementById("grauInput");

function converter() {
  if ((rad.value && grau.value) || (!rad.value && !grau.value)) return;
  if (rad.value) {
    grau.value = `${degrees(Number(rad.value) * PI)}`;
    rad.value = "";
  } else {
    rad.value = `${radians(Number(grau.value) / PI)}`;
    grau.value = "";
  }
}
