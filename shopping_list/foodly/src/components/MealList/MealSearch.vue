<template>
    <v-container>
      <v-row>
          <v-text-field
          v-model="mealName"
          :placeholder='"Enter the name of your meal here"'
          clearable
          />
          <v-btn
          v-on:click="searchMeals"
          color="primary"
          class="mt-3"
          >
          Search
          </v-btn>
      </v-row>
      <v-row>
        <v-spacer/>
        <v-btn
        color="red"
        v-on:click="searchRandomMeal"
        >
        Random search
        </v-btn>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'MealSearch',

  data: () => ({
    mealName: ''
  }),

  methods: {
    searchMeals () {
      this.$emit('searchMeals', this.mealName)
    },
    searchRandomMeal () {
      this.$emit('searchRandomMeal')
    }
  }
}
</script>
