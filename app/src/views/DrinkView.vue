<template>
  <div class="shop">
    <h1>Drinks</h1>
    <h2>Total Spent: {{ total.toFixed(2) }}</h2>

    <aside class="shop__cart">
      <h2>Cart</h2>
      <ul>
        <li v-for="item in cart" :key="item.id">{{ item.name }} - ${{ item.price }}</li>
      </ul>
      <p class="cart__total">Total: ${{ total.toFixed(2) }}</p>
    </aside>

    <div class="shop__menu">
      <DrinkCard v-for="drink in drinks" :key="drink.id" :drink="drink" :addCart="addCart" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
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
  { id: 'SBSBMT', name: 'Supreme Milk Tea', price: 7.99 },
  { id: 'BTL', name: 'Black Tea Latte', price: 6.49 },
  { id: 'JT', name: 'Jasmine Tea', price: 3.99 },
  { id: 'FCY', name: 'Fluffy Cloud Yumberry', price: 9.99 },
  { id: 'FCM', name: 'Fluffy Cloud Mango', price: 9.99 },
  { id: 'FCCG', name: 'Fluffy Cloud Crisp Grape', price: 9.99 },
  { id: 'YB', name: 'Yumberry Boom', price: 7.49 },
  { id: 'MB', name: 'Mulberry Boom', price: 7.49 },
  { id: 'PFB', name: 'Passion Fruit Blast', price: 6.49 },
]

const cart = ref([])
const total = ref(0)
function addCart(drink) {
  cart.value.push(drink)
  total.value = total.value + drink.price

  console.log(drink.name + 'added to cart')
}
</script>

<style scoped>
/* Page background and font */
.shop {
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #f8f8f8; /* light grey background */
  min-height: 100vh;
}

/* Cart styling */
.shop__cart {
  border: 2px solid #333;
  background-color: #fff8dc; /* light cream */
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.cart__total {
  margin-top: 10px;
  font-weight: bold;
  color: #d9534f;
}

.shop__menu {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
}

.drink-card {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 15px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  text-align: center;
  transition:
    transform 0.2s,
    box-shadow 0.2s;
}

.drink-card h3 {
  color: #4a90e2;
  margin-bottom: 10px;
}

.drink-card p {
  font-weight: bold;
  color: #333;
}

.drink-card button {
  margin-top: 10px;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  background-color: #f39c12;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.drink-card button:hover {
  background-color: #e67e22;
}

.drink-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}
</style>
