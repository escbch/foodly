<template>
    <v-container v-if="favourites.length > 0">
      <MealList @addIngredient="addIngredient" @removeFavourite="removeFavourite" :meals="favourites" :favourites="favourites"/>
    </v-container>
    <div v-else>
        <v-card
          style="margin-left: 15%; margin-right: 15%; margin-top: 20px;"
          >
            <v-img height="500" src="https://cdn.pixabay.com/photo/2016/07/31/11/52/table-1558811_960_720.jpg"/>
            <v-card-title>Oops, there are no favourites so far</v-card-title>
        </v-card>
    </div>
</template>

<script>
import FavouriteService from '../services/FavouriteService'
import ProductService from '../services/ProductService'
import MealList from '../components/MealList/MealList'

export default {
  name: 'FavouriteView',

  components: {
    MealList
  },

  data: () => ({
    favourites: []
  }),

  methods: {
    addIngredient: function (e) {
      ProductService.addProduct(e, (data) => {})
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
