<template>
  <div>
    <h1>Drinks</h1>
    <button @click="addCart" id="CMB">Add to Cart</button>
  </div>
</template>

<script setup>
;[
  { id: 'CCB', drink: 'Cloud Coconut Blue', price: 7.99 },
  { id: 'TSML', drink: 'Triple Supreme Matcha Latte', price: 7.99 },
  { id: 'SML', drink: 'Supreme Matcha Latte', price: 7.99 },
  { id: 'CML', drink: 'Cloud Matcha Latte', price: 7.99 },
  { id: 'JL', drink: 'Jasmine Latte', price: 6.49 },
  { id: 'CMB', drink: 'Coconut Mango Boom', price: 6.99 },
  { id: 'CGB', drink: 'Crisp Grape Boom', price: 7.49 },
  { id: 'CJT', drink: 'Cloud Jasmine Tea', price: 5.49 },
  { id: 'KBT', drink: 'Kale Boost Tea', price: 7.99 },
  { id: 'SBSBMT', drink: 'Supreme Brown Sugar Bobo Milk Tea', price: 7.99 },
  { id: 'BTL', drink: 'Black Tea Latte', price: 6.49 },
  { id: 'JT', drink: 'Jasmine Tea', price: 3.99 },
  { id: 'FCY', drink: 'Fluffy Cloud Yumberry', price: 9.99 },
  { id: 'FCM', drink: 'Fluffy Cloud Mango', price: 9.99 },
  { id: 'FCCG', drink: 'Fluffy Cloud Crisp Grape', price: 9.99 },
  { id: 'YB', drink: 'Yumberry Boom', price: 7.49 },
  { id: 'MB', drink: 'Mulberry Boom', price: 7.49 },
  { id: 'PFB', drink: 'Passion Fruit Blast', price: 6.49 },
]

function addCart() {}
</script>

<style scoped></style>
