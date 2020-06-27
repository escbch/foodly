<template>
  <v-container>
    <h1>Find your Product here</h1>
    <SearchMask />
    <SearchList />
  </v-container>
</template>

<script>
import SearchMask from '@/components/SearchMask.vue'
import SearchList from '@/components/SearchList.vue'

export default {
  name: 'FindProducts',
  components: {
    SearchMask,
    SearchList
  }
}
</script>
