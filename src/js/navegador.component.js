const menuCalculadora = document.querySelector("#calculadora");
const setorCalculadora = document.querySelector("#setor");

// JS Events
menuCalculadora.addEventListener("click", () => {
  document.querySelector("#calcContent").style.display = "block";
  document.querySelector("#setorContent").style.display = "none";
});
setorCalculadora.addEventListener("click", () => {
  document.querySelector("#calcContent").style.display = "none";
  document.querySelector("#setorContent").style.display = "block";
});
