<template>
    <div>
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
    }
  }
}
</script>
