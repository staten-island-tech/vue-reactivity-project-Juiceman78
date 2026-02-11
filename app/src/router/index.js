import { createRouter, createWebHistory } from 'vue-router'
import DrinkView from '../views/DrinkView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DrinkView,
    },
  ],
})

export default router
