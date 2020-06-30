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

        },
        updateEntry: function (e) {

        }
    }
    
}
</script>

<style scoped>
#input{
  background-color: white;
}
</style>