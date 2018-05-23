import Vue from 'vue';
import Router from 'vue-router';
import HomePage from '@/components/app_components/homepage';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage,
    },
  ],
});
