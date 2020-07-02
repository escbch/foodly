<template>
  <v-container>
    <v-card
      class="grey lighten-2">
      <v-img
        src="https://cdn.pixabay.com/photo/2018/04/14/23/20/triangles-3320452_960_720.png"
        height="200"
        >
        <v-card-title
          class="ml-2 text-h4 font-weight-regular"
          style="color: white;"
          >
          Find your meal
        </v-card-title>
        <v-row class="mt-6">
          <v-spacer></v-spacer>
          <v-col lg="6">
            <v-text-field
              v-model="product"
              rounded
              solo
              :placeholder='"Enter your product here"'
              clearable
              />
          </v-col>
          <v-col lg="2">
            <v-text-field
              v-model="amount"
              rounded
              solo
              :placeholder='"Amount"'
              clearable
              />
          </v-col>
          <v-col lg="auto">
            <v-btn
            class="mt-1"
            v-on:click="addProduct"
            color="primary"
            rounded
            >
            <v-icon small class="mr-2">add_shopping_cart</v-icon>
            Add
            </v-btn>
          </v-col>
          <v-spacer></v-spacer>
        </v-row>
      </v-img>
    </v-card>
    <!--
    <v-container>
      <v-row no-gutters>
        <v-col class="mr-16">
          <v-text-field
            v-model="product"
            :placeholder='"Enter your product here"'/>
        </v-col>
        <v-col lg="2" class="mr-6">
          <v-text-field
            v-model="amount"
            :placeholder='"Amount"'/>
        </v-col>
        <v-col lg="1">
          <v-btn
            rounded
            color="primary"
            class="mt-2 ml-2"
            v-on:click="addProduct">
            <v-icon small class="mr-2">add_shopping_cart</v-icon>
            Add</v-btn>
        </v-col>
      </v-row>
    </v-container>-->
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
    addProduct: function () {
      if (this.product === '' || this.amount <= 0) {
        this.snackbar = true
        return
      }
      this.$emit('addProduct', { name: this.product, amount: this.amount })
      this.product = ''
      this.amount = ''
    }
  }
}
</script>

<style scoped>
#product{
  margin-top: 50px;
}
</style>
