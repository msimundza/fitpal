<template>
  <v-app>
    <v-toolbar>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">
          FitPal
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn flat v-for="item in menuItems" :key="item.title" router :to="item.link">
          <v-icon left>{{item.icon}}</v-icon> {{item.title}}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
    <v-content>
      <router-view>

      </router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      menuItems: [
        {
          icon: 'lock_open',
          title: 'Login',
          link: '/login'
        },
        {
          icon: 'perm_identity',
          title: 'Register',
          link: '/register'
        }
      ]
    }
  }
}
</script>
