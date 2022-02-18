import { createRouter, createWebHistory } from 'vue-router'
import HomeIndex from '@/views/home/HomeIndex.vue';
import BlogHome from '@/views/blog/';
import { routes as blogRoutes } from '@/views/blog/router';
import { routes as HomeRoutes } from '@/views/home/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeIndex,
      children: HomeRoutes
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogHome, 
      children: blogRoutes
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
