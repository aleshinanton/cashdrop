import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import App from './App'
import router from './router'
import firebase from 'firebase'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import store from './store'
import icons from 'material-design-icons-iconfont'

Vue.use(MintUI)
Vue.use(Vuetify)
Vue.use(icons)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  created () {
    const config = {
      apiKey: 'AIzaSyD2gNL3kX_vkRqgt15y-07PqDIecfavuxQ',
      authDomain: 'cashdrop-7.firebaseapp.com',
      databaseURL: 'https://cashdrop-7.firebaseio.com',
      projectId: 'cashdrop-7',
      storageBucket: 'cashdrop-7.appspot.com',
      messagingSenderId: '671847537352'
    }
    firebase.initializeApp(config)
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.$store.dispatch('autoLoginIn', user)
      }
    })
  },
  template: '<App/>'
})
