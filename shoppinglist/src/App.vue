<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-left
      dark
      flat
      dense
      hide-on-scroll
      >
      <v-app-bar-nav-icon v-on:click="displayDrawer"></v-app-bar-nav-icon>
      <v-toolbar-title>{{this.$route.name}}</v-toolbar-title>
    </v-app-bar>
    <TheNavigation v-if="drawer"/>
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
      this.drawer = !this.drawer
    }
  }
}

</script>
