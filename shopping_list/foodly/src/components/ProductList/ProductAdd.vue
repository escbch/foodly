<template>
  <v-container>
    <v-row class="mr-10 ml-10">
        <v-text-field
          class="ml-5"
          v-model="product"
          :placeholder='"Enter your product here"'
          rounded
          clearable
          solo
          />
        <v-text-field
          v-model="amount"
          :placeholder='"Amount"'
          class="ml-3"
          rounded
          clearable
          solo
          />
        <v-btn
          color="primary"
          class="mt-2 ml-2"
          v-on:click="emitData">Add</v-btn>
    </v-row>
    <v-snackbar
        bottom
        v-model="snackbar"
        color="red darken-2"
        >Wrong or missing values
        <template v-slot:action="{ attrs }">
          <v-btn dark text v-bind="attrs" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>
  </v-container>
</template>

<script>
export default {
  name: 'AddProduct',

  data: () => ({
    product: '',
    amount: '',
    snackbar: false
  }),
  methods: {
    emitData: function () {
      if (this.product === '' || this.amount.isNaN || this.amount <= 0) {
        this.snackbar = true
        return
      }
      this.$emit('addData', { name: this.product, amount: this.amount })
      this.product = ''
      this.amount = 1
    }
  }
}
</script>

<style scoped>
#product{
  margin-top: 50px;
}
</style>
