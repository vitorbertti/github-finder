import Vue from 'vue';

import VueRouter from 'vue-router';
import Finder from './pages/Finder/Finder.vue';
import Languages from './pages/Languages/Languages.vue';

Vue.use(VueRouter);

const router = new VueRouter({
   mode: 'history',
   routes: [
      {
         path: '/',
         component: Finder,
      },
      {
         path: '/languages',
         component: Languages,
      },
   ],
});

export default router;
