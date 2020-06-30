<template>
<div>
  <v-overlay :value="overlay">
    <v-card
    class="ma-16 pa-16">
    <v-row>
      <v-spacer></v-spacer>
      <v-btn
      align-end
          icon
          @click="overlay = false"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-row>
      <v-text-area
      multi-line
      auto-grow
      >{{meal.strInstructions}}</v-text-area>
      </v-card>
    </v-overlay>
    <v-card :key="favourite">
        <v-row>
          <v-card-title class="ml-5">{{ meal.strMeal }}</v-card-title>
          <v-spacer></v-spacer>
           <v-btn :href="meal.strSource" target="_blank" class="mr-2 mt-3" icon>
            <v-icon color="primary">public</v-icon>
          </v-btn>
           <v-btn class="mr-2 mt-3" icon v-on:click="overlay = !overlay">
            <v-icon color="grey" >receipt</v-icon>
          </v-btn>
          <v-btn class="mr-5 mt-3" icon :color="setColor" v-on:click="fav($event, meal)">
            <v-icon>mdi-heart</v-icon>
          </v-btn>
        </v-row>
        <v-img
          height=250
          :src=meal.strMealThumb
         />
            <v-expansion-panels>
              <v-expansion-panel>
                <v-expansion-panel-header>Ingrediants</v-expansion-panel-header>
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
                    <v-btn @click="addAll">Add All</v-btn>
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
      </v-card>
</div>
</template>

<script>
export default {
  name: 'MealEntry',

  props: ['meal', 'favourite'],

  data: () => ({
    overlay: false
  }),

  methods: {
    addAll: function () {
      alert('add all')
      for (var i = 0; i < this.meal.ingrediants.length; i++) {
        this.$emit('addProduct', this.meal.ingrediants[i])
      }
    },
    add: function (event, ingrediant) {
      this.$emit('addProduct', ingrediant)
    },
    fav: function (event, meal) {
      if (this.favourite) {
        this.$emit('removeFav', meal.idMeal)
      } else {
        this.$emit('addFav', meal)
      }
    }
  },
  computed: {
    setColor: function () {
      return this.favourite ? 'red' : 'grey'
    }
  }
}
</script>

<style scoped>
.v-expansion-panel-header{
    font-size: 18px;
}
.v-text-area{
  font-size: 20px;
}
</style>
