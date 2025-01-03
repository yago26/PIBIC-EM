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
}
