import {createRouter, createWebHistory} from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: () => import('@/components/HomePage/HomePage.vue'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/components/Forms/FormContainerVue.vue'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/components/Forms/FormContainerVue.vue'),
  },
  {
    path: '/conversion',
    name: 'Conversion',
    component: () => import('@/components/Conversion/ConversionComponent.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/components/Forms/FormContainerVue.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router