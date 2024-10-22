// router/index.js

import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home/index.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/About/index.vue')
    },
    {
      path: '/pets/:id',
      name: 'pets',
      component: () => import('@/views/Pets/index.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'notFound',
      component: () => import('@/views/NotFound/index.vue'),
    },
  ]
})

export default router