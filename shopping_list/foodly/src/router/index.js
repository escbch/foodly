import Vue from 'vue'
import VueRouter from 'vue-router'
import MealView from '../views/MealView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Foodly',
    component: MealView
  },
  {
    path: '/list',
    name: 'Product List',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/ProductView.vue')
  },
  {
    path: '/favs',
    name: 'Favourites',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FavouriteView.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
