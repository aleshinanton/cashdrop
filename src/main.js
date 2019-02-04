// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import './plugins/vuetify'
import App from './App'
import router from './router'
import firebase from 'firebase'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(MintUI)

Vue.config.productionTip = false

const config = {
  apiKey: 'AIzaSyD2gNL3kX_vkRqgt15y-07PqDIecfavuxQ',
  authDomain: 'cashdrop-7.firebaseapp.com',
  databaseURL: 'https://cashdrop-7.firebaseio.com',
  projectId: 'cashdrop-7',
  storageBucket: 'cashdrop-7.appspot.com',
  messagingSenderId: '671847537352'
}

firebase.initializeApp(config)

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  const currentUser = firebase.auth().currentUser
  if (requiresAuth) {
    if (!currentUser) {
      next({
        path: '/login',
        query: { redirect: to.fullPath }
      })
    } else {
      next()
    }
  } else {
    next() // всегда так или иначе нужно вызвать next()!
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
