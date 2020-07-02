<template>
  <v-expansion-panels>
    <v-expansion-panel>
      <v-expansion-panel-header
        class="text-h6 font-weight-regular"
        >Ingredients
      </v-expansion-panel-header>
      <v-expansion-panel-content>
        <div
          v-for="(ingredient, index) in ingredients "
          :key="index">
          <v-list-item>
            <v-list-item-title class="font-weight-medium">
              {{ingredients[index].name}}
            </v-list-item-title>
            <v-list-item-subtitle class="mr-5 text-right">
              {{ingredients[index].amount}}
            </v-list-item-subtitle>
            <v-btn
              icon
              centered
              color="primary"
              v-on:click="addIngredient($event, ingredient)">
                  <v-icon medium>add</v-icon>
            </v-btn>
          </v-list-item>
          <v-divider></v-divider>
        </div>
        <v-row justify="center">
          <v-btn
            class="primary mt-6 mb-2"
            @click="addIngredients"
            solo
            rounded
            >Add All</v-btn>
        </v-row>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
export default {
  name: 'MealIngredients',

  props: ['ingredients'],

  methods: {
    addIngredient (event, ingredient) {
      this.$emit('addIngredient', ingredient)
    },
    addIngredients () {
      this.$emit('addIngredient', this.ingredients)
    }
  }
}
</script>
