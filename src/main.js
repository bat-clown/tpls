// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// import './assets/css/bootstrap.css'
// import './assets/css/font-awesome.css'
// import './assets/css/animate.css'
// import './assets/css/app.css'
// import './assets/css/index.css'
// import './assets/css/public.css'
import './assets/css/personalSetting.css'

import './assets/js/jquery.js'
// import './assets/js/jquery.flot.js'
// import './assets/js/bootstrap.js'
// import './assets/js/app.js'

// import headerBar from '@/components/headerBar'
// Vue.component('header-bar',headerBar);

Vue.config.productionTip = false;



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
