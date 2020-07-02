<template>
<v-card
  class="ml-10 mr-10 mt-4">
  <v-list-item>
    <v-checkbox
    class="ml-2 mr-5"
      v-model="product.checked"
      @change="update"
      />
    <v-list-item-title class="font-weight-medium ">
      {{ product.name }}
    </v-list-item-title>
    <v-list-item-subtitle class="text-right">
      {{ product.amount }}
    </v-list-item-subtitle>
    <v-btn class="ml-6 mr-2" icon centered color="red" v-on:click="remove">
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
    remove () {
      this.$emit('removeEntry', this.product)
    },
    update () {
      this.$emit('updateEntry', this.product)
    }
  }
}
</script>
