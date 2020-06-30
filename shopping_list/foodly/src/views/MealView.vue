<template>
  <v-container>
    <h1>Find your Meal here</h1>
    <MealSearch @search="getMeals"/>
    <MealList @addProduct="addProduct" @addFav="addFav" @removeFav="removeFav" :meals="meals" :favs="favs"/>
  </v-container>
</template>

<script>
import MealSearch from '@/components/MealList/MealSearch.vue'
import MealList from '@/components/MealList/MealList.vue'
import MealService from './services/MealService'
import ProductService from './services/ProductService'

export default {
  name: 'MealView',

  components: {
    MealSearch,
    MealList
  },

  data: () => ({
    meals: [],
    favs: []
  }),

  methods: {
    addProduct: function (e) {
      
    }
  }
}
</script>
