<template>
<v-card
  class="ml-10 mr-10 mt-4">
  <v-list-item>
    <v-checkbox
    class="ml-2 mr-5"
      v-model="product.checked"
      @change="updateProduct"
      />
    <v-list-item-title class="font-weight-medium ">
      {{ product.name }}
    </v-list-item-title>
    <v-list-item-subtitle class="text-right">
      {{ product.amount }}
    </v-list-item-subtitle>
    <v-btn class="ml-6 mr-2" icon centered color="red" v-on:click="removeProduct">
      <v-icon medium>highlight_off</v-icon>
    </v-btn>
  </v-list-item>
</v-card>
</template>

<script>
export default {
  name: 'ProductEntry',

  props: ['product', 'index'],

  methods: {
    removeProduct () {
      this.$emit('removeProduct', this.product)
    },
    updateProduct () {
      this.$emit('updateProduct', this.product)
    }
  }
}
</script>
