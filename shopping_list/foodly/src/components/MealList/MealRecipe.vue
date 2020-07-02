<template>
    <v-overlay :value="overlay">
        <v-card
        class="ma-16 pa-10"
        max-width="1000"
        light>
            <v-row>
                <v-card-title
                    class="ml-3"
                    >
                    Recipe
                </v-card-title>
                <v-spacer/>
                <v-btn
                    align-end
                    icon
                    @click="hideOverlay"
                    >
                    <v-icon>mdi-close</v-icon>
                </v-btn>
            </v-row>
            <v-card-text
                multi-line
                auto-grow
                style="white-space: pre-line; font-size: 18px;"
                >
                {{recipe}}
            </v-card-text>
        </v-card>
    </v-overlay>
</template>

<script>
export default {
  name: 'MealRecipe',

  props: ['recipe', 'overlay'],

  methods: {
    hideOverlay () {
      this.$emit('hideOverlay')
    }
  }
}
</script>
