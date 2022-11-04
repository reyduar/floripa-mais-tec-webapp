import { CORES } from "../constants";
export class SetorConvidado {
  constructor(idade) {
    this.idade = Number(idade);
  }

  obterCor(index) {
    return CORES[index];
  }

  buscarSetor() {
    switch (true) {
      case this.idade == 14:
        return this.obterCor(0);
      case this.idade > 14 && this.idade < 18:
        return this.obterCor(1);
      case this.idade >= 18 && this.idade < 25:
        return this.obterCor(2);
      case this.idade >= 25:
        return this.obterCor(3);
    }
    return;
  }
}
