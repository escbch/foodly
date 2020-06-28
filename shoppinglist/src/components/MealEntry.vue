<template>
    <v-card>
        <v-img
          height=250
          :src=meal.strMealThumb
         />
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>{{ meal.strMeal }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                    <div
                    v-for="(ingrediant, index) in meal.ingrediants "
                    :key="index">
                        <v-row>
                            <v-col>
                                <v-text-field
                                readonly
                                solo
                                flat
                                v-model="meal.ingrediants[index].product"
                                />
                            </v-col>
                            <v-col
                                lg="3">
                                <v-text-field
                                    readonly
                                    solo
                                    flat
                                    v-model="meal.ingrediants[index].amount"
                                    />
                            </v-col>
                            <v-col
                                lg="1">
                                <v-btn
                                icon
                                centered
                                color="primary"
                                v-on:click="add($event, ingrediant)">
                                    <v-icon medium>add</v-icon>
                                </v-btn>
                            </v-col>
                        </v-row>
                    </div>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
      </v-card>
</template>

<script>
export default {
  name: 'MealEntry',

  props: ['meal'],

  methods: {
    add: function (event, ingrediant) {
      this.$emit('addProduct', ingrediant)
    }
  }

}
</script>

<style scoped>
.v-expansion-panel-header{
    font-weight: bolder;
    font-size: 18px;
}
</style>
