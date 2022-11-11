<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" fixed app clipped>
      <v-list dense>
        <v-list-tile to="/">
          <v-list-tile-content>
            <v-list-tile-title>General System Setup</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/page 1">
          <v-list-tile-content>
            <v-list-tile-title>Test Page 1</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/page 2">
          <v-list-tile-content>
            <v-list-tile-title>Test Page 2</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/page 3">
          <v-list-tile-content>
            <v-list-tile-title>Test Page 3</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/page 4">
          <v-list-tile-content>
            <v-list-tile-title>Test Page 4</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/page 5">
          <v-list-tile-content>
            <v-list-tile-title>Test Page 5</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/page 6">
          <v-list-tile-content>
            <v-list-tile-title>Test Page 6</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/page 7">
          <v-list-tile-content>
            <v-list-tile-title>Test Page 7</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/page 8">
          <v-list-tile-content>
            <v-list-tile-title>Test Page 8</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/page 9">
          <v-list-tile-content>
            <v-list-tile-title>Test Page 9</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile to="/page 10">
          <v-list-tile-content>
            <v-list-tile-title>Test Page 10</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="black accent-4" dark fixed app clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>Positech Crane Controller Web Interface</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
    <v-footer color="black accent-4" app fixed>
      <span class="white--text">&copy; LUSHER ENGINEERING SERVICES, PLLC. All rights reserved.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      drawer: null
    }
  }
}
</script>
