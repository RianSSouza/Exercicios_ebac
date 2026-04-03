import { ContaBancaria } from "./contaBancaria.js";

export class ContaCorrente extends ContaBancaria{
    sacar(valor, nome){
        this.saldo -= (valor + 2);
    }
}