<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-left
      dark
      >
      <v-app-bar-nav-icon @click="displayDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{this.$route.name}}</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
    app
    temporary
    v-model="drawer"
    dark
    >
    <NavigationRouter :key="drawer" :drawer="drawer"/>
        </v-navigation-drawer>
    <v-main>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import NavigationRouter from './components/Navigation/NavigationRouter.vue'

export default {
  name: 'App',

  components: {
    NavigationRouter
  },

  data: () => ({
    drawer: false
  }),

  methods: {
    displayDrawer: function () {
      this.drawer = true
    }
  }
}
</script>
