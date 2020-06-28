<template>
  <v-app id="inspire">
    <!--<v-app-bar
      app
      clipped-left
      dark
      flat
      dense
      hide-on-scroll
      prominent
      >
      <v-toolbar-title>Einkaufsliste</v-toolbar-title>
    </v-app-bar>-->
    <TheNavigation/>
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
  }
}

</script>
