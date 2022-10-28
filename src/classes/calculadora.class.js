export class Calculadora {
  constructor(valor1, valor2, operaçao) {
    this.valor1 = Number(valor1);
    this.valor2 = Number(valor2);
    this.operaçao = operaçao;
  }

  soma(valor1, valor2) {
    return valor1 + valor2;
  }

  subtraçao(valor1, valor2) {
    return valor1 - valor2;
  }

  multiplicaçao(valor1, valor2) {
    return valor1 * valor2;
  }

  divisao(valor1, valor2) {
    return valor1 / valor2;
  }

  calcular() {
    switch (this.operaçao) {
      case "soma":
        return this.soma(this.valor1, this.valor2);
      case "subtraçao":
        return this.subtraçao(this.valor1, this.valor2);
      case "multiplicaçao":
        return this.multiplicaçao(this.valor1, this.valor2);
      case "divisao":
        return this.divisao(this.valor1, this.valor2);
    }
    return;
  }

  imprimir(resultado) {
    console.log("====================================");
    console.log(`O resultado da operação é: ${resultado}`);
    console.log("====================================");
  }
}
