<template>
  <v-form>
    <v-container
     style="height: 80px;">
      <v-row>
        <v-col>
          <v-text-field class="pa-2" solo readonly v-model="product.name"></v-text-field>
        </v-col>
        <v-col lg="2">
          <v-text-field
          class="pa-2"
          solo
          v-model="product.amount"
          @change="update"></v-text-field>
        </v-col>
        <v-col lg="1">
          <v-btn class="mt-3" icon centered color="red" v-on:click="remove">
            <v-icon medium>highlight_off</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-form>
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
