<template>
    <v-container>
        <ListFavs :favs="getFavMeals"/>
    </v-container>
</template>

<script>
import axios from 'axios'
import ListFavs from '@/components/ListFavs.vue'

export default {
  name: 'Favourites',
  components: {
    ListFavs
  },
  data: () => ({
    favs: []
  }),
  mounted () {
    axios.get('http://localhost:8080/favourites').then(response => {
      this.favs = response.data
    })
  }
}
</script>
