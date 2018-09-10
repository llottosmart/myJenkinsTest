// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import http from './axios/api'

// 挂载axios
Vue.prototype.$http = http.instance;

Vue.config.productionTip = false
console.log('aa')
/* eslint-disable no-new */
new Vue({
    el : '#app',
    router,
    components : { App },
    template : '<App/>'
})
