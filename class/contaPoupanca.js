import { ContaBancaria } from "./contaBancaria.js";

export class ContaPoupanca extends ContaBancaria{
    sacar(valor){
        this.saldo -= valor;
    }
}