<template>
  <v-container>
    <h1>Find your Product here</h1>
    <SearchMask @searchMeal="getMeals"/>
    <SearchList :meals="meals"/>
  </v-container>
</template>

<script>
import axios from 'axios'
import SearchMask from '@/components/SearchMask.vue'
import SearchList from '@/components/SearchList.vue'

export default {
  name: 'FindProducts',
  components: {
    SearchMask,
    SearchList
  },
  data: function () {
    return {
      meals: []
    }
  },
  methods: {
    getMeals: function (e) {
      axios.get('https://www.themealdb.com/api/json/v1/1/search.php?s=' + e).then(response => {
        this.meals = response.data.meals
        for (var i = 0; i < this.meals.length; i++) {
          const ingrediants = []
          for (var j = 1; j <= 20; j++) {
            const stringrediant = 'strIngredient' + j.toString()
            const ingrediant = this.meals[i][stringrediant]
            if (ingrediant) {
              ingrediants.push(ingrediant)
            }
          }
          this.meals[i].ingrediants = ingrediants
        }
      })
    }
  }
}
</script>
