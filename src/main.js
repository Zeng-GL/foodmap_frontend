import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from '@/plugins/vuetify'
import swal from 'vue-sweetalert2'

Vue.config.productionTip = false
Vue.use(swal);

new Vue({
  router,
  vuetify,
  swal,
  render: h => h(App)
}).$mount('#app')
