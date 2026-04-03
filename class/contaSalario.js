import { ContaBancaria } from "./contaBancaria.js";

export class ContaSalario extends ContaBancaria{
    sacar(valor){
        console.log("Saque não permitido");
    }
}