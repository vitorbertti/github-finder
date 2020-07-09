import Finder from './pages/Finder/Finder.vue';
import Languages from './pages/Languages/Languages.vue';

const routes = [
   {
      path: '/',
      component: Finder,
   },
   {
      path: '/languages',
      component: Languages,
   },
];

export default routes;
