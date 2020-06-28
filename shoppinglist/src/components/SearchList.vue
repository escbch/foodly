<template>
    <v-container>
      <v-card
      style="margin-left: 20%; margin-right: 20%; margin-top: 20px;"
      v-for="meal in meals"
      :key="meal.idMeal"
      >
        <v-img
          height=250
          :src=meal.strMealThumb
         />
         <!--<v-card-title>{{ meal.strMeal }}</v-card-title>-->
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>{{ meal.strMeal }}</v-expansion-panel-header>
                <v-expansion-panel-content>
                  <v-row
                    v-for="(ingrediant, index) in meal.ingrediants "
                    :key="index">
                    <v-text-field
                    readonly
                    v-model="meal.ingrediants[index]"
                    />
                  </v-row>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
      </v-card>
      <v-card
        v-if="meals == null">
        <v-img
        height=500
        src="https://cdn.pixabay.com/photo/2017/07/28/16/07/plate-2549069_960_720.jpg"/>
        <v-card-title>Oops, there is no meal for that</v-card-title>
      </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'SearchList',

  props: ['meals'],

  data: () => ({
    show: true
  }),
  methods: () => ({
    addIngredients (meal) {
      this.$emit('addIngredients', meal)
    }
  })
}
</script>
