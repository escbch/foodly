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
    absolute
    temporary
    v-model="drawer"
    dark
    >
    <TheNavigation :key="drawer" :drawer="drawer"/>
        </v-navigation-drawer>
    <v-content>
      <v-container fluid>
        <router-view/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import TheNavigation from '@/components/TheNavigation'
export default {
  name: 'App',
  components: {
    TheNavigation
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
