<template>
  <v-container>
    <h1>Find your Meal here</h1>
    <MealSearch @searchMeals="getMeals" @searchRandomMeal="getRandomMeal"/>
    <MealList @addIngredient="addIngredient" @addIngredients="addIngredients" @addFavourite="addFavourite" @removeFavourite="removeFavourite" :meals="meals" :favourites="favourites"/>
  </v-container>
</template>

<script>
import MealSearch from '@/components/MealList/MealSearch.vue'
import MealList from '@/components/MealList/MealList.vue'
import MealService from '../services/MealService'
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
      favourites: []
    }
  },

  methods: {
    addIngredient: function (e) {
      ProductService.addProduct(e, (data) => {})
    },
    addIngredients: function (e) {
      e.forEach(ingredient => {
        ProductService.addProduct(ingredient, (data) => {})
      })
    },
    addFavourite: function (e) {
      FavouriteService.addFavourite(e, (data) => {
        this.favourites = data
      })
    },
    removeFavourite: function (e) {
      FavouriteService.removeFavourite(e, (data) => {
        this.favourites = data
      })
    },
    getMeals: function (e) {
      MealService.getMeals(e, (data) => {
        this.meals = data
      })
    },
    getRandomMeal: function () {
      MealService.getRandomMeal((data) => {
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
