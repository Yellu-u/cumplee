const btnRegalos = document.getElementById("btnRegalos");
const regalos = document.getElementById("regalos");

btnRegalos.addEventListener("click", () => {
  regalos.classList.toggle("oculto");
});