<template>
  <v-app>
    <v-card class="overflow-hidden">
      <v-app-bar
        app
        color="#6A76AB"
        dark
        prominent
        src="https://picsum.photos/1920/1080?random"
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
          ></v-img>
        </template>
        <v-list-item-group id="nav" class="mt-2">
          <v-list-item>
            <router-link to='/'>
              <v-row>
                <blockquote class="blockqoute">SHOPPING LIST</blockquote>
                <v-icon class="ml-3">shopping_cart</v-icon>
              </v-row>
            </router-link>
          </v-list-item>
          <v-list-item>
            <router-link to='/find'>
              <v-row>
                <blockquote class="blockqoute">FIND PRODUCT</blockquote>
                <v-icon class="ml-3">search</v-icon>
              </v-row>
            </router-link>
          </v-list-item>
        </v-list-item-group>
      </v-app-bar>
    </v-card>
    <v-content>
      <div
        v-scroll.self="onScroll">
        <v-banner
          id="input"
          sticky>
          <AddProduct @DataAdd="AddData"/>
        </v-banner>
        <ProductEntry id="entry"
          v-for="(entry, index) in products"
          :key="index"
          :product="entry"
          :index="index"
          @removeEntry="removeEntry"
          @updateEntry="updateEntry"/>
      </div>
    </v-content>
  </v-app>
</template>

<script>
import ProductEntry from './components/ProductEntry'
import AddProduct from './components/AddProduct'
import axios from 'axios'

export default {
  name: 'App',

  components: {
    ProductEntry,
    AddProduct
  },

  data: function () {
    return {
      products: []
    }
  },

  methods: {
    updateEntry: function (e) {
      axios.put('http://localhost:8080/products/' + e.id, e).then(response => {
        this.products = response.data
      })
    },

    removeEntry: function (e) {
      axios.delete('http://localhost:8080/products/' + e.id).then(response => {
        this.products = response.data
      })
    },

    AddData: function (e) {
      axios.post('http://localhost:8080/products', { name: e.name, amount: e.amount }).then(response => {
        this.products = response.data
      })
    }
  }
}
</script>

<style>
#list{
  margin-left: 20%;
  margin-right: 20%;
  min-height: 100%;
}
#input{
  background-color: white;
}
#nav a{
  font-weight: bold;
  color: white;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: white;
  font-size: 100%;
  text-decoration: none;
}
</style>
