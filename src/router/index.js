import Vue from 'vue';
import Router from 'vue-router';

import LayoutApp from '@/components/layouts/App';
import ViewLandingPage from '@/components/views/LandingPage';
import ViewJdFrontEnd from '@/components/views/jds/FrontEnd';
import ViewChallengeFrontEnd from '@/components/views/challenges/FrontEnd';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/challenges',
      component: LayoutApp,
      children: [
        {
          path: 'front-end',
          name: 'front-end-challenge',
          component: ViewChallengeFrontEnd,
        },
      ],
    },
    {
      path: '/jds/front-end',
      name: 'front-end-jd',
      component: ViewJdFrontEnd,
    },
    {
      path: '*',
      component: ViewLandingPage,
    },
  ],
});
