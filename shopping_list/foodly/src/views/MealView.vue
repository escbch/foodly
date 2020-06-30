<template>
  <v-container>
    <h1>Find your Meal here</h1>
    <SearchMask @search="getMeals"/>
    <SearchList @addProduct="addProduct" @addFav="addFav" @removeFav="removeFav" :meals="meals" :favs="favs"/>
  </v-container>
</template>

<script>
export default {
  name: 'MealView',

  data: () => ({
    meals: [],
    favs: []
  })
}
</script>
