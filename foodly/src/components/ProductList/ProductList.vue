<template>
    <div>
    <ProductEntry
      v-for="(entry, index) in products"
      :key="index"
      :product="entry"
      :index="index"
      @removeProduct="removeProduct"
      @updateProduct="updateProduct"/>
    <v-row justify="center" class="mt-8" v-if="products.length > 0">
      <v-btn class="mb-5" rounded outlined color="red" v-on:click="removeProducts">
         <v-icon medium>delete</v-icon> Delete All
      </v-btn>
    </v-row>
    </div>
</template>

<script>
import ProductEntry from './ProductEntry'

export default {
  name: 'ProductList',

  components: {
    ProductEntry
  },

  props: ['products'],

  methods: {
    removeProduct: function (product) {
      this.$emit('removeProduct', product)
    },
    updateProduct: function (product) {
      this.$emit('updateEntry', product)
    },
    removeProducts: function () {
      this.$emit('removeProducts')
    }
  }
}
</script>
