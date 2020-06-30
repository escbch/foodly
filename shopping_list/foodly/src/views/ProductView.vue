<template>
    <div>
        <v-banner
          id="input"
          sticky
          app>
          <ProductAdd @addData="addData"/>
        </v-banner>
        <ProductList
        @removeEntry="removeEntry"
        @updateEntry="updateEntry"
        :products="products"/>
    </div>
</template>

<script>
import ProductAdd from '@/components/ProductList/ProductAdd.vue'
import ProductList from '@/components/ProductList/ProductList.vue'
import ProductService from '@/services/ProductService.js'

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
    removeEntry: function (e) {
      ProductService.removeProduct(e, (data) => {
        this.products = data
      })
    },
    updateEntry: function (e) {
      ProductService.updateProduct(e, (data) => {
        this.products = data
      })
    },
    addData: function (e) {
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
