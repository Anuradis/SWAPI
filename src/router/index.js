import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/views/HomeView.vue'
import Edit from '@/components/views/EditView.vue'

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/edit/:personId',
    name: 'Edit',
    component: Edit
  }
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

// Add a navigation guard to automatically push to /home on init
router.beforeEach((to, from, next) => {
  if (to.path === '/') {
    next('/home')
  } else {
    next()
  }
})

export default router
