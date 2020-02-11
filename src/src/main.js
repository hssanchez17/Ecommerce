import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import Vuelidate from 'vuelidate'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie';	


Vue.use(VueAxios, axios)
Vue.use(Vuelidate)
Vue.use(VueCookie);


// Agregamos la URL base de nuestra API
axios.defaults.baseURL = 'http://localhost:3000';
axios.defaults.withCredentials = true

Vue.use(BootstrapVue)


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
