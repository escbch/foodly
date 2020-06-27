<template>
  <v-app>
    <v-content>
      <div
        v-scroll.self="onScroll">
        <v-banner
          id="input"
          sticky>
          <AddProduct @DataAdd="AddData"/>
        </v-banner>
        <ProductEntry id="entry"
          v-for="(entry, index) in products"
          :key="index"
          :product="entry"
          :index="index"
          @removeEntry="removeEntry"
          @updateEntry="updateEntry"/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import ProductEntry from './components/ProductEntry'
import AddProduct from './components/AddProduct'
import axios from 'axios'

export default {
  name: 'App',

  components: {
    ProductEntry,
    AddProduct
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

    AddData: function (e) {
      axios.post('http://localhost:8080/products', { name: e.name, amount: e.amount }).then(response => {
        this.products = response.data
      })
    }
  }
}
</script>

<style>
#list{
  margin-left: 20%;
  margin-right: 20%;
  min-height: 100%;
}
#input{
  background-color: white;
}
</style>
