<template>
    <v-container>
      <v-card
        style="margin-left: 15%; margin-right: 15%; margin-top: 20px;"
        v-for="meal in meals"
        :key="meal.idMeal"
        >
        <MealEntry
          @addIngredient="addIngredient"
          @removeFavourite="removeFavourite"
          @addFavourite="addFavourite"
          :meal="meal"
          :isFavourite="isFavourite(meal.idMeal)"/>
      </v-card>
      <v-card
        v-if="!meals">
        <v-img
          height="500"
          src="https://cdn.pixabay.com/photo/2017/07/28/16/07/plate-2549069_960_720.jpg"/>
        <v-card-title>Oops, there is no meal for that</v-card-title>
      </v-card>
      <v-snackbar
        bottom
        v-model="snackbarShoppingList"
        color="green darken-2"
        :timeout="2000"
        >Added to shopping list
      </v-snackbar>
      <v-snackbar
        bottom
        v-model="snackbarAddedFavourites"
        color="green darken-2"
        :timeout="2000"
        >Added to favourites
      </v-snackbar>
      <v-snackbar
        bottom
        v-model="snackbarRemovedFavourites"
        color="red darken-2"
        :timeout="2000"
        >Removed from favourites
      </v-snackbar>
    </v-container>
</template>

<script>

import MealEntry from './MealEntry'

export default {
  name: 'MealList',

  components: {
    MealEntry
  },

  props: ['meals', 'favourites'],

  data: () => ({
    show: true,
    snackbarShoppingList: false,
    snackbarAddedFavourites: false,
    snackbarRemovedFavourites: false
  }),
  methods: {
    addIngredient: function (ingredient) {
      this.snackbarShoppingList = true
      this.$emit('addIngredient', ingredient)
    },
    addFavourite: function (meal) {
      this.snackbarAddedFavourites = true
      this.$emit('addFavourite', meal)
    },
    removeFavourite: function (meal) {
      this.snackbarRemovedFavourites = true
      this.$emit('removeFavourite', meal)
    },
    isFavourite: function (idMeal) {
      return this.favourites.map(function (e) { return e.idMeal }).indexOf(idMeal) !== -1
    }
  }
}
</script>
