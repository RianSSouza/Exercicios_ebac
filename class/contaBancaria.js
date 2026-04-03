export class ContaBancaria{
    #saldo;

    constructor(titular, saldo){
        this.titular = titular;
        this.#saldo = saldo;
    }

    get saldo(){
        return this.#saldo;
    }

    set saldo(valor){
        if(valor < 0){
            console.log("Saldo não pode ser negativo");
            
        }else{
            this.#saldo = valor;
        }
    }

    depositar(valor){
        if (valor > 0) {
            this.#saldo += valor
        }else{
            console.log("Digite um valor.");
            
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.#saldo) {
            this.#saldo -= valor;
        } else {
            console.log("Saldo insuficiente");
        }
    }
    verSaldo(){
        console.log(this.#saldo);
        
    }
}