import { RouteRecordRaw } from 'vue-router';
import BasicLayout from '@/layouts/BasicLayout/index.vue';

// 主框架内显示的路由
export const frameIn: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
    component: BasicLayout,
    children: [
      {
        path: 'index',
        name: 'Index',
        component: () => import('@/views/example/index.vue'),
        meta: {
          title: 'Index',
        },
      },
      {
        path: 'detail',
        name: 'Detail',
        component: () => import('@/views/example/detail.vue'),
        meta: {
          title: 'Detail',
        },
      },
    ],
  },
];

// 主框架外显示的路由
const frameOut = [
  {
    path: '/user/login',
    name: 'Login',
    component: () => import('@/views/sys/login/index.vue'),
    meta: {
      title: '登录',
    },
  },
];

const errorPage = [
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/sys/error/404.vue'),
  },
];

export default [
  ...frameIn,
  ...frameOut,
  ...errorPage,
];
