<template>
  <v-container class="mx-auto" dark>
    <v-row class="mx-16">
      <v-text-field id="product"
        v-model="product"
        :placeholder='"Enter your product here"'
        :rounded="rounded"
        clearable
      ></v-text-field>
      <v-text-field id="numberField"
        v-model="amount"
        type="number"
        min="1"
        :placeholder='"amount"'
        :rounded="rounded"
        clearable
        >
      </v-text-field>
      <v-btn color="primary" class="mt-3" v-on:click="emitData">Add</v-btn>
      <v-snackbar
        bottom
        v-model="snackbar"
        color="red darken-2"
        >Wrong or missing values entered
        <template v-slot:action="{ attrs }">
          <v-btn dark text v-bind="attrs" @click="snackbar = false">Close</v-btn>
        </template>
      </v-snackbar>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'AddProduct',

  data: () => ({
    rounded: true,
    product: '',
    amount: Number,
    snackbar: false
  }),
  methods: {
    emitData: function () {
      if (this.product == null || this.amount.isNaN || this.amount <= 0) {
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
