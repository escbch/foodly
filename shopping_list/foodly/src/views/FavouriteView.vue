<template>
    <v-container>
        <MealList @addProduct="addProduct" @removeFavourite="removeFavourite" :meals="favourites" :favourites="favourites"/>
    </v-container>
</template>

<script>
import FavouriteService from '../services/FavouriteService.js'
import ProductService from '../services/ProductService.js'
import MealList from '@/components/MealList/MealList.vue'

export default {
  name: 'FavouriteView',

  components: {
    MealList
  },

  data: () => ({
    meals: [],
    favourites: []
  }),

  methods: {
    addProduct: function (e) {
      ProductService.addProduct(e, (data) => {
        this.meals = data
      })
    },
    removeFavourite: function (e) {
      FavouriteService.removeFavourite(e, (data) => {
        this.favourites = data
      })
    }
  },

  mounted () {
    FavouriteService.getFavourites((data) => {
      this.favourites = data
    })
  }
}
</script>
