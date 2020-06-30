<template>
<div>
  <v-overlay :value="overlay">
    <v-card
    class="ma-16 pa-16">
    <v-row>
      <v-spacer></v-spacer>
      <v-btn
      align-end
          icon
          @click="overlay = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
      <v-text-area
      multi-line
      auto-grow
      >{{meal.strInstructions}}</v-text-area>
      </v-card>
    </v-overlay>
    <v-card :key="favourite">
        <v-row>
          <v-card-title class="ml-5">{{ meal.strMeal }}</v-card-title>
          <v-spacer></v-spacer>
           <v-btn :href="meal.strSource" target="_blank" class="mr-2 mt-3" icon>
            <v-icon color="primary">public</v-icon>
          </v-btn>
           <v-btn class="mr-2 mt-3" icon v-on:click="overlay = !overlay">
            <v-icon color="grey" >receipt</v-icon>
          </v-btn>
          <v-btn class="mr-5 mt-3" icon :color="setColor" v-on:click="toggleFavourite($event, meal)">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-row>
        <v-img
          height=250
          :src=meal.strMealThumb
         />
         <MealIngredients :ingredients="meal.ingredients" @addIngredient="addIngredient" @addIngredients="addIngredients"/>
      </v-card>
</div>
</template>

<script>
import MealIngredients from './MealIngredients'

export default {
  name: 'MealEntry',

  components: {
    MealIngredients
  },

  props: ['meal', 'favourite'],

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
      if (this.favourite) {
        this.$emit('removeFavourite', meal.idMeal)
      } else {
        this.$emit('addFavourite', meal)
      }
    }
  },
  computed: {
    setColor: function () {
      alert('col')
      return this.favourite ? 'red' : 'grey'
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
