import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from "@/views/RegisterView.vue"
import HomeComponent from "@/views/HomeComponent.vue"


import monCompte from '../views/MoncompteView.vue'
import GardiennageView from '@/views/GardiennageView.vue'

const routes = [

  {
    path: '/register',
    name: 'RegisterView',
    component: RegisterView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeComponent
  },
  {
    path: '/profil',
    name: 'myContentDrawer',
    component: () => import('../views/ProfilView.vue')
  },

  {
    path: '/demande-gardinnage',
    name: 'DemandeGardinnage',
    component: () => import('../views/DemandeGardinnage.vue')
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
