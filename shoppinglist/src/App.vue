<template>
  <v-app>
      <ProductEntry id="entry"
      v-for="(entry, index) in products"
      :key="index"
      :product="entry"
      :index="index"/>
  </v-app>
</template>

<script>
import ProductEntry from './components/ProductEntry'
export default {
  name: 'App',

  components: {
    ProductEntry
  },

  data: function () {
    return {
      products:
      [
        { name: 'Name1', amount: 10, id: 1 },
        { name: 'Name2', amount: 10, id: 2 }
      ]
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
