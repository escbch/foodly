<template>
  <v-container>
    <MealSearch @searchMeals="getMeals" @searchRandomMeal="getRandomMeal"/>
    <MealList @addIngredient="addIngredient" @addFavourite="addFavourite" @removeFavourite="removeFavourite" :meals="meals" :favourites="favourites"/>
  </v-container>
</template>

<script>
import MealSearch from '../components/MealList/MealSearch'
import MealList from '../components/MealList/MealList'
import MealService from '../services/MealService'
import ProductService from '../services/ProductService'
import FavouriteService from '../services/FavouriteService'

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
      this.favourites = data
    })
    this.getRandomMeal()
  }
}
</script>
