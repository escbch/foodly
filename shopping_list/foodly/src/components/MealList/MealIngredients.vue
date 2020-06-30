<template>
    <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>Ingredients</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div
                    v-for="(ingredient, index) in ingredients "
                    :key="index">
                        <v-row>
                            <v-col>
                                <v-text-field
                                readonly
                                solo
                                flat
                                v-model="ingredients[index].name"
                                />
                            </v-col>
                            <v-col
                                lg="3">
                                <v-text-field
                                    readonly
                                    solo
                                    flat
                                    v-model="ingredients[index].amount"
                                    />
                            </v-col>
                            <v-col
                                lg="1">
                                <v-btn
                                icon
                                centered
                                color="primary"
                                v-on:click="addIngredient($event, ingredient)">
                                    <v-icon medium>add</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                    <v-btn @click="addIngredients">Add All</v-btn>
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
      this.$emit('addIngredients', this.ingredients)
    }
  }
}
</script>
