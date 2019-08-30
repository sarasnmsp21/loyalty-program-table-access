import Vue from 'vue';
import Router from 'vue-router';
import login from './views/TableLogin/tablelogin.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'tablelogin',
      component: login,
    },
    {
      path: '/tabledashboard',
      name: 'tabledashboard',
      component: () => import('./views/TableDashboard/tabledashboard.vue'),
    },
    {
      path: '/tableselect',
      name: 'tableselect',
      component: () => import('./views/TableSelect/tableselect.vue'),
    },
    {
      path: '/tableuserlist',
      name: 'tableuserlist',
      component: () => import('./views/TableUserList/tableuserlist.vue'),
    },
  ],
});
