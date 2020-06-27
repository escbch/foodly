<template>
    <v-navigation-drawer
    app
    dark
    expand-on-hover
    >
      <v-list dense id="nav">
        <router-link to='/'>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>shopping_cart</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              SHOPPING LIST
            </v-list-item-content>
          </v-list-item>
        </router-link>
        <router-link to='/find'>
          <v-list-item link>
            <v-list-item-action>
              <v-icon>search</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              SEARCH PRODUCTS
            </v-list-item-content>
          </v-list-item>
        </router-link>
      </v-list>
    </v-navigation-drawer>
</template>

<style scoped>
#nav a{
  font-weight: bold;
  color: gray;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: gray;
  font-size: 100%;
  text-decoration: none;
}
</style>
