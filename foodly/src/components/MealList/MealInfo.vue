<template>
    <v-row
        class="ml-3 mb-4">
          <v-chip class="ml-2 mr-2">
            <v-avatar left>
              <v-icon>fastfood</v-icon>
            </v-avatar>
            {{category}}</v-chip>
          <v-chip>
            <v-avatar left>
              <v-icon>place</v-icon>
            </v-avatar>
            {{area}}</v-chip>
            <v-spacer/>
        </v-row>
</template>

<script>
export default {
  name: 'MealInfo',
  props: ['category', 'area']
}
</script>
