import { Calculadora } from "../classes";
import "../css/componentes.css";

// HTML references
const divResultado = document.querySelector("#divResultado");
const buttonCalcular = document.querySelector("#calcular");

export const criarInputResultadoHTML = (resultado) => {
  const htmlResultado = `
  <input id="resultado" value=${resultado} type="text" readonly />
  `;
  const div = document.createElement("div");
  div.innerHTML = htmlResultado;
  divResultado.append(div.firstElementChild);

  return div.firstElementChild;
};

const validaçoes = (inputValor1, inputValor2, selectOpValor) => {
  const isValid = inputValor1 && inputValor2 && selectOpValor;
  if (isValid) {
    document.querySelector("#vali1").style.display = "none";
    document.querySelector("#vali2").style.display = "none";
    document.querySelector("#vali3").style.display = "none";
  } else {
    document.querySelector("#vali1").style.display = inputValor1
      ? "none"
      : "block";
    document.querySelector("#vali2").style.display = inputValor2
      ? "none"
      : "block";
    document.querySelector("#vali3").style.display = selectOpValor
      ? "none"
      : "block";
  }
  return isValid;
};

const calcular = (val1, val2, op) => {
  const resultado = new Calculadora(val1, val2, op).calcular();
  document.getElementById("resultado").value = resultado;
};

const onSubmit = () => {
  const inputValor1 = document.querySelector("#value1").value;
  const inputValor2 = document.querySelector("#value2").value;
  const selectOpValor = document.querySelector("#ope").value;
  if (validaçoes(inputValor1, inputValor2, selectOpValor)) {
    calcular(inputValor1, inputValor2, selectOpValor);
  }
};

// JS Events
buttonCalcular.addEventListener("click", onSubmit);
