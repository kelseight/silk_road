<template>
  <v-app>
    <v-navigation-drawer
      persistent
      :mini-variant="miniVariant"
      clipped
      enable-resize-watcher
      fixed
      app
    >
    </v-navigation-drawer>

    <v-toolbar clipped-left flat>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Silk Road</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      miniVariant: false
    }
  },
  name: 'App'
}
</script>
