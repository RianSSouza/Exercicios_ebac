<script setup>
    const props = defineProps(['resultado', 'estado']);
</script>

<template>
  <form>
    <div class="mb-3">
      <label class="form-label">Primeiro numero: </label>
      <input type="number" class="form-control" v-model="props.estado.num1" />
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
      <input type="number" class="form-control" v-model="props.estado.num2" />
    </div>
    <div
      :class="
        props.estado.num2 === 0 && props.estado.operacao === 'divisao'
          ? 'alert alert-danger text-center'
          : 'alert alert-primary text-center'
      "
    >
      <strong>Resultado:</strong> {{ props.resultado }}
    </div>
  </form>
</template>
