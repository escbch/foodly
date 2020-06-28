<template>
  <div>
    <v-banner
      id="input"
      sticky>
      <AddProduct @addData="addData"/>
    </v-banner>
    <ProductEntry
      v-for="(entry, index) in products"
      :key="index"
      :product="entry"
      :index="index"
      @removeEntry="removeEntry"
      @updateEntry="updateEntry"/>
  </div>
</template>

<script>
// @ is an alias to /src
import ProductEntry from '@/components/ProductEntry'
import AddProduct from '@/components/AddProduct.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    AddProduct,
    ProductEntry
  },
  data: function () {
    return {
      products: []
    }
  },

  methods: {
    updateEntry: function (e) {
      axios.put('http://localhost:8080/products/' + e.id, e).then(response => {
        this.products = response.data
      })
    },

    removeEntry: function (e) {
      axios.delete('http://localhost:8080/products/' + e.id).then(response => {
        this.products = response.data
      })
    },

    addData: function (e) {
      axios.post('http://localhost:8080/products', { name: e.name, amount: e.amount }).then(response => {
        this.products = response.data
      })
    }
  },
  mounted () {
    axios.post('http://localhost:8080/products').then(response => {
      this.products = response.data
    })
  }
}
</script>

<style scoped>
#input{
  background-color: white;
}
</style>
