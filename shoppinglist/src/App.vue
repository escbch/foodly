<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>
    </v-app-bar>

    <v-content>
    <AddProduct @DataAdd="AddData"/>
    <ProductEntry id="entry"
      v-for="(entry, index) in products"
      :key="index"
      :product="entry"
      :index="index"/>
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
    AddData: function (e) {
      axios.post('http://localhost:8080/products', { name: e.name, amount: e.amount }).then(response => {
        this.products = response.data
      })
    }
  }
}
</script>

<style>
#entry{
  margin-left: 20%;
  margin-right: 20%;
}
</style>
