import { createRouter, createWebHistory } from 'vue-router'
import RegisterView from "@/views/RegisterView.vue"
import HomeComponent from "@/views/HomeComponent.vue"


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

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
