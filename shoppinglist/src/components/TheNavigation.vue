<template>
    <v-navigation-drawer
    app
    dark
    expand-on-hover
    clipped
    >
      <v-list nav id="nav">
        <router-link to='/'>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>shopping_cart</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="title">
                Shopping List
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to='/find'>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>search</v-icon>
            </v-list-item-action>
            <v-list-item-content>
               <v-list-item-title class="title">
                  Search Meals
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
#nav a{
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #1976D2;
  text-decoration: none;
}
</style>
