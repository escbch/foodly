<template>
  <v-container class="mx-auto">
    <v-row class="mx-16">
      <v-text-field id="product"
        v-model="product"
        :placeholder='"Enter your product here"'
        :rounded="rounded"
        clearable
      ></v-text-field>
      <v-text-field id="numberField"
        ref="numberField"
        v-model.number="amount"
        type="number"
        min="1"
        :placeholder='"amount"'
        :rounded="rounded"
        clearable
        >
      </v-text-field>
      <v-btn color="primary" class="mt-2" v-on:click="emitData">Add</v-btn>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AddProduct',

  data: () => ({
    rounded: true,
    product: '',
    amount: Number
  }),
  methods: {
    emitData: function () {
      if (this.product == null || this.amount.isNaN || this.amount <= 0) {
        return
      }
      this.$emit('DataAdd', { name: this.product, amount: this.amount })
      this.product = ''
      this.amount = 0
    }
  }
}
</script>

<style scoped>
#product{
  margin-top: 50px;
}
</style>
