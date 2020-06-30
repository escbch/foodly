<template>
    <v-container>
      <v-row>
          <v-text-field
          v-model="searchMeal"
          :placeholder='"Enter the name of your meal here"'
          clearable
          />
          <v-btn v-on:click="search" color="primary" class="mt-3">Search</v-btn>
      </v-row>
      <v-row>
          <v-text-field
          v-model="searchIngredient"
          :placeholder='"Meal with specific ingredient"'
          clearable
          />
          <v-btn v-on:click="searchIng" color="primary" class="mt-3">Search</v-btn>
      </v-row>
      <v-row>
        <v-spacer></v-spacer>
        <v-btn color="red" v-on:click="searchRan">Random search</v-btn>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'SearchMask',

  data: () => ({
    searchMeal: '',
    searchIngredient: ''
  }),

  methods: {
    search () {
      this.$emit('search', { index: 0, str: this.searchMeal })
    },
    searchIng () {
      this.$emit('search', { index: 1, str: this.searchIngredient })
    },
    searchRan () {
      this.$emit('search', { index: 2, str: '' })
    }
  }
}
</script>
