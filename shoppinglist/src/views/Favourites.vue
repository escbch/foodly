<template>
    <v-container>
        <SearchList @addProduct="addProduct" @removeFav="removeFav" :meals="favs" :favs="favs"/>
    </v-container>
</template>

<script>
import axios from 'axios'
import SearchList from '@/components/SearchList.vue'

export default {
  name: 'Favourites',
  components: {
    SearchList
  },
  data: () => ({
    favs: []
  }),
  methods: {
    addProduct: function (e) {
      axios.post('http://localhost:8080/products', { name: e.product, amount: e.amount })
    },
    removeFav: function (e) {
      axios.delete('http://localhost:8080/favourites/' + e).then(response => {
        this.favs = response.data
      })
    }
  },
  mounted () {
    axios.get('http://localhost:8080/favourites').then(response => {
      this.favs = response.data
    })
  }
}
</script>
