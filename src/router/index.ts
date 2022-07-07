import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ConversionComponent from '@/components/ConversionComponent.vue'
import FormContainerVue from '@/components/Forms/FormContainerVue.vue'

const routes = [
  {
    path: '/',
    name: 'Home Page',
    component: FormContainerVue,
    props: true
  },
  {
    path: '/login',
    name: 'Login',
    component: FormContainerVue,
    props: true
  },
  {
    path: '/register',
    name: 'Register',
    component: FormContainerVue,
    props: true
  },
  {
    path: '/conversion',
    name: 'Conversion',
    component: ConversionComponent
  },
  {
    path: '/about',
    name: 'About',
    component: HomeView
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router