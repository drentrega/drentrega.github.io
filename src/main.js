// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue';
import Vuetify from 'vuetify';
import VueAnalytics from 'vue-analytics';

import App from './App';
import router from './router';

Vue.use(VueAnalytics, {
  id: 'UA-112801402-2',
  router,
  checkDuplicatedScript: true,
  autoTracking: {
    pageviewOnLoad: false,
  },
});

Vue.use(Vuetify, {
  theme: {
    primary: '#3f51b5',
    secondary: '#b0bec5',
    accent: '#8c9eff',
    error: '#b71c1c',
  },
});

import('vuetify/dist/vuetify.min.css');

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
});
