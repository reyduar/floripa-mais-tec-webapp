import { SetorConvidado } from "../classes";

// HTML references
const buttonBuscar = document.querySelector("#buscar");

export const imprimirResultadoHTML = ({ nome, cor }) => {
  document.querySelector("#setorResultado").value = nome;
};

const validaçoes = (idade) => {
  const isValid = idade && idade >= 14;
  if (!isValid) {
    document.querySelector("#valiIdade").style.display = "block";
  } else {
    document.querySelector("#valiIdade").style.display = "none";
  }
  return isValid;
};

const onSubmit = () => {
  const idade = document.querySelector("#idade").value;
  if (validaçoes(idade)) {
    const resultado = new SetorConvidado(idade).buscarSetor();
    imprimirResultadoHTML(resultado);
  } else {
    document.querySelector("#setorResultado").value =
      "As idades aceitas são 13+ anos.";
  }
};

// JS Events
buttonBuscar.addEventListener("click", onSubmit);
