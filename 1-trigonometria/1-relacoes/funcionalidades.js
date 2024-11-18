const catetoA = document.getElementById("catetoA");
const catetoB = document.getElementById("catetoB");

const incrementoA = () => (catetoA.value = `${90 - Number(catetoB.value)}`);
const incrementoB = () => (catetoB.value = `${90 - Number(catetoA.value)}`);
