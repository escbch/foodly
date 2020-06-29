<template>
    <v-container>
        <v-card
        v-for="fav in favs"
        :key="fav"
        >
            <FavEntry @removeFav="removeFav" :fav="fav"/>
        </v-card>
    </v-container>
</template>

<script>
import FavEntry from '@/components/FavEntry.vue'

export default {
  name: 'ListFavs',

  components: {
    FavEntry
  },

  props: ['favs'],

  methods: {
    removeFav: function (mealId) {
      this.$emit('removeFav', mealId)
    }
  }
}
</script>
