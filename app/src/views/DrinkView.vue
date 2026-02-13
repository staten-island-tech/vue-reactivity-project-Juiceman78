<template>
  <div>
    <h1>Drinks</h1>

    <DrinkCard v-for="drink in drinks" :key="drink.name" :drink="drink" />
  </div>
</template>

<script setup>
import DrinkCard from '../components/DrinkCard.vue'
const drinks = [
  { id: 'CCB', name: 'Cloud Coconut Blue', price: 7.99 },
  { id: 'TSML', name: 'Triple Supreme Matcha Latte', price: 7.99 },
  { id: 'SML', name: 'Supreme Matcha Latte', price: 7.99 },
  { id: 'CML', name: 'Cloud Matcha Latte', price: 7.99 },
  { id: 'JL', name: 'Jasmine Latte', price: 6.49 },
  { id: 'CMB', name: 'Coconut Mango Boom', price: 6.99 },
  { id: 'CGB', name: 'Crisp Grape Boom', price: 7.49 },
  { id: 'CJT', name: 'Cloud Jasmine Tea', price: 5.49 },
  { id: 'KBT', name: 'Kale Boost Tea', price: 7.99 },
  { id: 'SBSBMT', name: 'Supreme Brown Sugar Bobo Milk Tea', price: 7.99 },
  { id: 'BTL', name: 'Black Tea Latte', price: 6.49 },
  { id: 'JT', name: 'Jasmine Tea', price: 3.99 },
  { id: 'FCY', name: 'Fluffy Cloud Yumberry', price: 9.99 },
  { id: 'FCM', name: 'Fluffy Cloud Mango', price: 9.99 },
  { id: 'FCCG', name: 'Fluffy Cloud Crisp Grape', price: 9.99 },
  { id: 'YB', name: 'Yumberry Boom', price: 7.49 },
  { id: 'MB', name: 'Mulberry Boom', price: 7.49 },
  { id: 'PFB', name: 'Passion Fruit Blast', price: 6.49 },
]
</script>

<style scoped></style>
