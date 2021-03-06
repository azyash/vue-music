import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'swiper/css/swiper.min.css'
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(elementUi)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

