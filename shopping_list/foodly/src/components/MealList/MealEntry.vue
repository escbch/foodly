<template>
<div>
  <MealRecipe @hideOverlay="overlay = false" :overlay="overlay" :key="overlay" :recipe="meal.strInstructions"/>
  <v-card>
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
          :color="setColor"
          v-on:click="toggleFavourite($event, meal)">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
      </v-row>
        <v-row
        class="ml-3 mb-4">
          <v-chip class="ml-2 mr-2">
            <v-avatar left>
              <v-icon>fastfood</v-icon>
            </v-avatar>
            {{meal.strCategory}}</v-chip>
          <v-chip>
            <v-avatar left>
              <v-icon>place</v-icon>
            </v-avatar>
            {{meal.strArea}}</v-chip>
            <v-spacer/>
        </v-row>
      <MealIngredients
        :ingredients="meal.ingredients"
        @addIngredient="addIngredient"
        @addIngredients="addIngredients"/>
    </v-card>
</div>
</template>

<script>
import MealIngredients from './MealIngredients'
import MealRecipe from './MealRecipe'

export default {
  name: 'MealEntry',

  components: {
    MealIngredients,
    MealRecipe
  },

  props: ['meal', 'isFavourite'],

  data: () => ({
    overlay: false
  }),

  methods: {
    addIngredients: function (e) {
      this.$emit('addIngredients', e)
    },
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
  },
  computed: {
    setColor: function () {
      return this.isFavourite ? 'red' : 'grey'
    }
  }
}
</script>

<style scoped>
.v-expansion-panel-header{
    font-size: 18px;
}
.v-text-area{
  font-size: 20px;
}
</style>
