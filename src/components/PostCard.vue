<template>
  <div>

    <v-card class="my-3" hover>

      <v-card-media class="white--text" height="170px" :src="image">
        <v-container fill-height fluid>
          <v-layout>
            <v-flex xs12 align-end d-flex>
              <span class="headline" v-bind:class="{ dark: dark }">{{ title }}</span>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-media>

      <v-card-text>
        {{ content }}
      </v-card-text>

      <v-card-actions v-if="actions">
        <v-spacer />
        <div v-for="(action, index) in actions" :key="index">
          <v-btn v-if="!action.linkName" :to="action.link" flat class="blue--text">
            {{ action.name }} asdad
          </v-btn>
          <v-btn v-else :to="{ name: action.linkName }" flat class="blue--text">
            {{ action.name }}
          </v-btn>
        </div>
      </v-card-actions>

    </v-card>

  </div>
</template>

<script>
export default {
  props: {
    dark: Boolean,
    title: String,
    content: String,
    image: String,
    actions: Array,
  },
};
</script>

<style>
  .dark {
    color: #000
  }
</style>
