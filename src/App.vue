<script setup>
import { reactive } from "vue";

const estado = reactive({
  num1: 0,
  num2: 0,
  operacao: "somar",
});

const calculaResultado = () => {
  const valor1 = estado.num1;
  const valor2 = estado.num2;
  const operacao = estado.operacao;

  if (valor2 === 0 && operacao === "divisao") {
    return "Não é permitido dividir um número por zero";
  }
  switch (operacao) {
    case "somar":
      return valor1 + valor2;
    case "subtrair":
      return valor1 - valor2;
    case "multiplicacao":
      return valor1 * valor2;
    case "divisao":
      return valor1 / valor2;
    default:
      return "";
  }
};
</script>

<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h2 class="text-center mb-4">Calculadora</h2>
            <form>
              <div class="mb-3">
                <label class="form-label">Primeiro numero: </label>
                <input
                  type="number"
                  class="form-control"
                  v-model="estado.num1"
                />
              </div>
              <div class="mb-2">
                <select class="form-select" v-model="estado.operacao">
                  <option value="somar">+</option>
                  <option value="subtrair">−</option>
                  <option value="multiplicacao">×</option>
                  <option value="divisao">/</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Segundo numero: </label>
                <input
                  type="number"
                  class="form-control"
                  v-model="estado.num2"
                />
              </div>
              <div
                :class="
                  estado.num2 === 0 && estado.operacao === 'divisao'
                    ? 'alert alert-danger text-center'
                    : 'alert alert-primary text-center'
                "
              >
                <strong>Resultado:</strong> {{ calculaResultado() }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style>
body {
  background-color: #ccc;
}
</style>
