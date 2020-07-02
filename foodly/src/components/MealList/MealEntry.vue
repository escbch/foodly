<template>
<div>
  <MealRecipe @hideOverlay="overlay = false" :overlay="overlay" :key="overlay" :recipe="meal.strInstructions"/>
  <v-card
  class="mt-6">
     <v-img
        height=300
        :src=meal.strMealThumb
        />
      <v-row>
        <v-card-title
          class="ml-5 text-h5 font-weight-bold">
          {{ meal.strMeal }}
        </v-card-title>
        <v-spacer/>
        <v-btn
              :href="meal.strSource"
              target="_blank"
              class="mr-2 mt-3"
              icon>
            <v-icon color="primary">public</v-icon>
        </v-btn>
          <v-btn
            class="mr-2 mt-3"
            icon
            v-on:click="overlay = !overlay">
            <v-icon color="grey" >receipt</v-icon>
        </v-btn>
        <v-btn
          class="mr-5 mt-3"
          icon
          :color="this.isFavourite ? 'red' : 'grey'"
          v-on:click="toggleFavourite($event, meal)">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-row>
      <MealInfo
        :category="meal.strCategory"
        :area="meal.strArea"/>
      <MealIngredients
        :ingredients="meal.ingredients"
        @addIngredient="addIngredient"/>
    </v-card>
</div>
</template>

<script>
import MealIngredients from './MealIngredients'
import MealRecipe from './MealRecipe'
import MealInfo from './MealInfo'

export default {
  name: 'MealEntry',

  components: {
    MealIngredients,
    MealRecipe,
    MealInfo
  },

  props: ['meal', 'isFavourite'],

  data: () => ({
    overlay: false
  }),

  methods: {
    addIngredient: function (ingredient) {
      this.$emit('addIngredient', ingredient)
    },
    toggleFavourite: function (event, meal) {
      if (this.isFavourite) {
        this.$emit('removeFavourite', meal)
      } else {
        this.$emit('addFavourite', meal)
      }
    }
  }
}
</script>
