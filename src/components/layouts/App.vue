<template>
  <v-app id="inspire">

    <v-navigation-drawer clipped fixed v-model="drawer" app>
      <v-list>

        <v-subheader>Challenges</v-subheader>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>web</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="{ path: '/challenges/front-end' }">Front-End</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-subheader>Job Descriptions</v-subheader>

        <v-list-tile>
          <v-list-tile-action>
            <v-icon>web</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="{ path: '/jds/front-end' }">Front-End</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

        <v-divider></v-divider>

        <v-list-tile avatar>
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>
              <router-link :to="{ path: '/' }">Home</router-link>
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>

      </v-list>
    </v-navigation-drawer>

    <v-toolbar app fixed clipped-left>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>
        <router-link to="/">Farmácia Já</router-link>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center align-center>
          <router-view></router-view>
        </v-layout>
      </v-container>
    </v-content>

  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
  }),
};
</script>

<style scoped>
  a {
    text-decoration: none
  }
</style>
