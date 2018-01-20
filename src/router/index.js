import Vue from 'vue';
import Router from 'vue-router';

import LayoutApp from '@/components/layouts/App';
import ViewLandingPage from '@/components/views/LandingPage';
import ViewJdFrontEnd from '@/components/views/jds/FrontEndView';
import ViewChallengeFrontEnd from '@/components/views/challenges/FrontEndView';


Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/challenges',
      component: LayoutApp,
      children: [
        {
          path: 'front-end',
          component: ViewChallengeFrontEnd,
        },
      ],
    },
    {
      path: '/jds',
      component: LayoutApp,
      children: [
        {
          path: '/jds/front-end',
          component: ViewJdFrontEnd,
        },
      ],
    },
    {
      path: '*',
      component: ViewLandingPage,
    },
  ],
});
