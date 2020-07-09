import Finder from './pages/Finder/Finder.vue';
import Languages from './pages/Languages/Languages.vue';
import UserInfo from './pages/UserInfo/UserInfo.vue';

const routes = [
   {
      path: '/',
      component: Finder,
   },
   {
      path: '/languages',
      component: Languages,
   },
   {
      path: '/:login',
      name: 'user-info',
      component: UserInfo,
      props: true,
   },
];

export default routes;
