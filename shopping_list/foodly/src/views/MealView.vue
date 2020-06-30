<template>
  <v-container>
    <h1>Find your Meal here</h1>
    <MealSearch @search="getMeals"/>
    <MealList @addProduct="addProduct" @addFav="addFav" @removeFav="removeFav" :meals="meals" :favs="favs"/>
  </v-container>
</template>

<script>
import MealSearch from '@/components/MealList/MealSearch.vue'
import MealList from '@/components/MealList/MealList.vue'
import MealService from '@/services/MealService.js'
import ProductService from '@/services/ProductService.js'
import FavouriteService from '@/services/FavouriteService.js'

export default {
  name: 'MealView',

  components: {
    MealSearch,
    MealList
  },

  data: function () {
    return {
      meals: [],
      favs: []
    }
  },

  methods: {
    addProduct: function (e) {
      ProductService.addProduct(e, (data) => {})
    },
    addFav: function (e) {
      FavouriteService.addFavourite(e, (data) => {
        this.favs = data
      })
    },
    removeFav: function (e) {
      FavouriteService.removeFavourite(e, (data) => {
        this.favs = data
      })
    },
    getMeals: function (e) {
      MealService.getMeals(e, (data) => {
        this.meals = data
      })
    }
  },

  mounted () {
    FavouriteService.getFavourites((data) => {
      this.favs = data
    })
  }
}
</script>
