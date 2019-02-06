import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import Security from './security'
import Home from '@/views/Home'
const Registration = () => Promise.resolve({ Registration })

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      beforeEnter: Security
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Registration',
      name: 'Registration',
      component: Registration
    }
  ],
  mode: 'history'
})
