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
        <v-btn v-for="(action, index) in actions"
          :key="index"
          :to="action.link"
          flat class="blue--text"
        >
          {{ action.name }}
        </v-btn>
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
    actions: Object,
  },
};
</script>

<style>
  .dark {
    color: #000
  }
</style>
