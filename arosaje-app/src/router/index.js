import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import monCompte from '../views/MoncompteView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/compte',
    name: 'mon compte',
    component: monCompte
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
