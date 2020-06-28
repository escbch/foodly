<template>
    <v-container>
      <v-row>
          <v-text-field
          v-model="searchMeal"
          :placeholder='"Enter your meal here"'
          clearable
          />
          <v-btn v-on:click="search" color="primary" class="mt-3">Search</v-btn>
        </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'SearchMask',

  data: () => ({
    searchMeal: ''
  }),

  methods: {
    search () {
      this.$emit('searchMeal', this.searchMeal)
    }
  }
}
</script>
