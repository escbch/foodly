import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shopping List',
    component: Home
  },
  {
    path: '/find',
    name: 'Search Meals',
    component: () => import(/* webpackChunkName: "search" */ '../views/FindProducts.vue')
  },
  {
    path: '/favs',
    name: 'Favourites',
    component: () => import(/* webpackChunkName: "favs" */ '../views/Favourites.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
