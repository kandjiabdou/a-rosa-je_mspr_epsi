import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

import monCompte from '../views/MoncompteView.vue'
import GardiennageView from '@/views/GardiennageView.vue'

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
  },
  {
    path: '/gardiennage',
    name: 'gariennageView',
    component: GardiennageView

  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
