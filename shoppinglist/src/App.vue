<template>
  <v-app id="inspire">
    <v-content>
      <TheNavigation/>
      <router-view/>
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
