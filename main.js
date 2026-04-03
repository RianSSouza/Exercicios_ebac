import { ContaCorrente } from './class/contaCorrente.js';
import { ContaPoupanca } from './class/contaPoupanca.js';
import { ContaSalario }  from './class/contaSalario.js';

const conta1 = new  ContaCorrente("Jett", 800);
const conta2 = new  ContaPoupanca("Sage", 600);
const conta3 = new  ContaSalario("Neon", 400);

conta1.sacar(200);
conta2.sacar(50);
conta3.sacar(150);

console.log(conta1.saldo);
console.log(conta2.saldo);
console.log(conta3.saldo);



