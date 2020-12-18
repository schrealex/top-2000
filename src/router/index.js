import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/2019',
    name: '2019',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/List2019.vue'),
  },
  {
    path: '/2020',
    name: '2020',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/List2020.vue'),
  },
  {
    path: '/',
    redirect: '/2020',
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
