import Vue from 'vue';
import Router from 'vue-router';

import LayoutApp from '@/components/layouts/App';
import LandingPage from '@/components/pages/LandingPage';
import JdFrontEndView from '@/components/jds/FrontEndView';
import ChallengeFrontEndView from '@/components/challenges/FrontEndView';


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
          component: ChallengeFrontEndView,
        },
      ],
    },
    {
      path: '/jds',
      component: LayoutApp,
      children: [
        {
          path: '/jds/front-end',
          component: JdFrontEndView,
        },
      ],
    },
    {
      path: '*',
      component: LandingPage,
    },
  ],
});
