import Vue from 'vue'
import VueRouter from 'vue-router'
import UIExplaine from "../views/UIExplaine.vue";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'UIExplaine',
    component: UIExplaine
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
