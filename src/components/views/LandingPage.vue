<template>
  <v-app light>
    <v-content>
      <v-container>
        <v-layout row wrap align-center>
          <v-flex xs12 md4>
            <div class="text-xs-center">
              <v-avatar size="122px">
                <img id="logo" class="logo img-circle elevation-3 mb-1" src="/static/img/logo.png">
              </v-avatar>
              <div class="headline">Farmácia Já</div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">tecnologia@farmaciaja.com.br</div>
              <v-layout justify-space-between>
                <a href="https://www.farmaciaja.com.br/" class="body-2">Home</a>
                <a href="https://farmaciaja.github.io/" class="body-2">Github</a>
                <a href="https://github.com/farmaciaja/" class="body-2">Repositories</a>
                <a href="mailto:tecnologia@farmaciaja.com.br" class="body-2">Contact</a>
              </v-layout>
            </div>
          </v-flex>
          <v-flex xs12 md5 offset-md2>
            <post v-for="(post, index) in posts"
              :key="index"
              :dark="post.dark"
              :title="post.title"
              :content="post.content"
              :image="post.image"
              :actions="post.actions"
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Post from '@/components/PostCard';

export default {
  components: {
    Post,
  },
  data() {
    return {
      title: 'Your Logo',
      posts: [
        {
          image: '/static/img/posts/map.png',
          title: 'We are hiring!',
          dark: true,
          content: 'Venha bater um papo conosco mandando um e-mail para talentos@farmaciaja.com.br!',
        },
        {
          image: '/static/img/stock/dev-01-1200-min.png',
          title: 'Front-End',
          content: 'Temos oportunidades para desenvolvedores Front-End! Clique nas opções abaixo para saber mais!',
          actions: [
            {
              name: 'Vagas',
              linkName: 'front-end-jd',
            },
            {
              name: 'Desafio',
              linkName: 'front-end-challenge',
            },
          ],
        },
      ],
    };
  },
};
 </script>

<style scoped>
  a {
    text-decoration: none
  }

  .logo {
    margin-bottom: 20px !important
  }
</style>
