<template>
  <div>
    <v-banner
      id="input"
      sticky
      app>
      <ProductAdd
        @addProduct="addProduct"
        />
    </v-banner>
    <ProductList
      style="margin-left: 15%; margin-right: 15%; margin-top: 20px;"
      v-if="products.length > 0"
      @removeProduct="removeProduct"
      @removeProducts="removeProducts"
      @updateProduct="updateProduct"
      :products="products"/>
    <v-card
      v-else
      style="margin-left: 15%; margin-right: 15%; margin-top: 20px;">
        <v-img height="500" src="https://cdn.pixabay.com/photo/2016/07/31/11/52/table-1558811_960_720.jpg"/>
        <v-card-title>Oops, there are no products so far</v-card-title>
    </v-card>
  </div>
</template>

<script>
import ProductAdd from '../components/ProductList/ProductAdd'
import ProductList from '../components/ProductList/ProductList'
import ProductService from '../services/ProductService.js'

export default {
  name: 'ProductView',
  components: {
    ProductAdd,
    ProductList
  },

  data: () => ({
    products: []
  }),

  methods: {
    removeProduct: function (e) {
      ProductService.removeProduct(e, (data) => {
        this.products = data
      })
    },
    removeProducts: function () {
      ProductService.removeProducts((data) => {
        this.products = data
      })
    },
    updateProduct: function (e) {
      ProductService.updateProduct(e, (data) => {
        this.products = data
      })
    },
    addProduct: function (e) {
      ProductService.addProduct(e, (data) => {
        this.products = data
      })
    }
  },

  mounted () {
    ProductService.getProducts((data) => {
      this.products = data
    })
  }
}
</script>

<style scoped>
#input{
  background-color: white;
}
</style>
