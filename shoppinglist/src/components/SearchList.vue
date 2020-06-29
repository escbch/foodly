<template>
    <v-container>
      <v-card
      style="margin-left: 2%; margin-right: 2%; margin-top: 20px;"
      v-for="meal in meals"
      :key="meal.idMeal"
      >
      <MealEntry @addProduct="addIngredients" @removeFav="removeFav" @addFav="addFav" :meal="meal" :favourite="inFavs(meal.idMeal)"/>
      </v-card>
      <v-card
        v-if="meals == null">
        <v-img
        height=500
        src="https://cdn.pixabay.com/photo/2017/07/28/16/07/plate-2549069_960_720.jpg"/>
        <v-card-title>Oops, there is no meal for that</v-card-title>
      </v-card>
      <v-snackbar
        bottom
        v-model="snackbar"
        color="green darken-2"
        :timeout="2000"
        >Added to shopping list
      </v-snackbar>
      <v-snackbar
        bottom
        v-model="snackbar1"
        color="green darken-2"
        :timeout="2000"
        >Added to favourites
      </v-snackbar>
      <v-snackbar
        bottom
        v-model="snackbar2"
        color="red darken-2"
        :timeout="2000"
        >Removed from favourites
      </v-snackbar>
    </v-container>
</template>

<script>

import MealEntry from '@/components/MealEntry.vue'

export default {
  name: 'SearchList',

  components: {
    MealEntry
  },

  props: ['meals', 'favs'],

  data: () => ({
    show: true,
    color: 'gray',
    snackbar: false,
    snackbar1: false,
    snackbar2: false
  }),
  methods: {
    addIngredients: function (ingredient) {
      this.snackbar = true
      this.$emit('addProduct', ingredient)
    },
    addFav: function (mealId) {
      this.snackbar1 = true
      this.$emit('addFav', mealId)
    },
    removeFav: function (mealId) {
      this.snackbar2 = true
      this.$emit('removeFav', mealId)
    },
    inFavs: function (idMeal) {
      return this.favs.indexOf(idMeal) !== -1
    }
  }
}
</script>
