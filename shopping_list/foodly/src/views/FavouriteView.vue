<template>
    <v-container v-if="favourites.length > 0">
        <MealList @addProduct="addProduct" @removeFavourite="removeFavourite" :meals="favourites" :favourites="favourites"/>
    </v-container>
    <v-content v-else>
        <v-card>
            <v-card-title>No favourites here</v-card-title>
            <v-img height="250" src="https://cdn.pixabay.com/photo/2016/07/31/11/52/table-1558811_960_720.jpg"/>
        </v-card>
    </v-content>
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
