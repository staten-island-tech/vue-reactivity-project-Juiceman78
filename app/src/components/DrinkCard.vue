<template>
  <div :id="drink.id">
    <h2>{{ drink.name }}</h2>
    <h3>{{ drink.price }}</h3>
    <button @click="addCart(drink)">Add to Cart</button>
  </div>
</template>

<script setup>
defineProps({
  drink: {
    type: Object,
    required: true,
  },
})
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
