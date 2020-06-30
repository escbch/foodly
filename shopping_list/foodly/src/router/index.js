import Vue from 'vue'
import VueRouter from 'vue-router'
import ProductView from '../views/ProductView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Shopping List',
    component: ProductView
  },
  {
    path: '/search',
    name: 'Search Meals',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/MealView.vue')
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
