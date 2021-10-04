import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Design from '../views/Edit.vue';
import Projects from '@/views/Project.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'EditFormUnit',
    component: Projects,
  },
  {
    path: '/design/:id',
    name: 'Design',
    component: Design,
  },
  {
    path: '/form-unit/:id',
    name: 'FormUnit',
    component: () => import('@/views/FormUnit.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
