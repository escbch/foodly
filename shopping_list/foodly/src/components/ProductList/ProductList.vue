<template>
    <div>
    <ProductEntry
      v-for="(entry, index) in products"
      :key="index"
      :product="entry"
      :index="index"
      @removeEntry="removeEntry"
      @updateEntry="updateEntry"/>
    <v-row justify="center" class="mt-8" v-if="products.length > 0">
      <v-btn rounded outlined color="red" v-on:click="removeAllEntries">
         <v-icon medium>delete</v-icon> Delete All
      </v-btn>
    </v-row>
    </div>
</template>

<script>
import ProductEntry from '@/components/ProductList/ProductEntry.vue'

export default {
  name: 'ProductList',

  components: {
    ProductEntry
  },

  props: ['products'],

  methods: {
    removeEntry: function (product) {
      this.$emit('removeEntry', product)
    },
    updateEntry: function (product) {
      this.$emit('updateEntry', product)
    },
    removeAllEntries: function () {
      this.$emit('removeAllEntries')
    }
  }
}
</script>
