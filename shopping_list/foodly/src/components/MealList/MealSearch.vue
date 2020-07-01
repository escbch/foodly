<template>
    <v-card
    class="grey lighten-2">
    <v-img
    src="https://cdn.pixabay.com/photo/2018/04/14/23/20/triangles-3320452_960_720.png"
    height="200"
    >
      <v-card-title
      class="ml-2 text-h4 font-weight-regular"
      style="color: white;"
      >Find your meal</v-card-title>
        <v-card-actions>
          <v-col>
            <v-text-field
              class="mt-8"
              v-model="mealName"
              rounded
              solo
              :placeholder='"Enter the name of your meal here, if empty it will be random"'
              clearable
              />
          </v-col>
          <v-col lg="2">
            <v-btn
            v-on:click="searchMeals"
            color="primary"
            rounded
            >
            <v-icon class="mr-1">search</v-icon>
            Search
            </v-btn>
          </v-col>
        </v-card-actions>
      </v-img>
    </v-card>
</template>

<script>
export default {
  name: 'MealSearch',

  data: () => ({
    mealName: ''
  }),

  methods: {
    searchMeals () {
      if (!this.mealName) {
        this.$emit('searchRandomMeal')
        return
      }
      this.$emit('searchMeals', this.mealName)
    }
  }
}
</script>
