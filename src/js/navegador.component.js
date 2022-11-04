const menuCalculadora = document.querySelector("#calculadora");
const setorCalculadora = document.querySelector("#setor");

const section1 = document.querySelector("#calcContent");
const section2 = document.querySelector("#setorContent");
section2.style.display = "none";

// JS Events
menuCalculadora.addEventListener("click", () => {
  section1.style.display = "block";
  section2.style.display = "none";
});
setorCalculadora.addEventListener("click", () => {
  section1.style.display = "none";
  section2.style.display = "block";
});
