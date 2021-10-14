import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Design from '../views/edit.vue';
import Projects from '@/views/project.vue';

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
    component: () => import('@/views/form-unit.vue'),
  },
  {
    path: '/preview',
    name: 'PreviewRender',
    component: () => import('@/views/preview.vue'),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
