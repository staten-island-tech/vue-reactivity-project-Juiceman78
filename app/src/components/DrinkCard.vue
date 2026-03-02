<template>
  <div :id="drink.id">
    <h2>{{ drink.name }}</h2>
    <h3>{{ drink.price }}</h3>
    <button @click="addCart(drink)">Add to Cart</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const cart = ref(0)
defineProps({
  drink: {
    type: Object,
    required: true,
  },
})
function addCart(drink) {
  console.log(`${drink.name} added`)
  cart.value = cart.value + drink.price
  console.log(`${cart.value}`)
}
</script>

<style scoped>
div {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 200px;
  width: 150px;
  border: 3px solid black;
}
</style>
