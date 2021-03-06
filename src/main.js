// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Cookies from 'js-cookie'
import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss'
import App from './App'
import router from './router'
import store from './store'
import { i18n } from '@/lang'
import './icons' // icon
// import './permission'
// import * as filters from './filters'

// promise Browser compatibility
// import 'es6-promise/auto'

/** global API */
/* 安装 Vue.js 插件 */
Vue.use(ElementUI, {
  size: Cookies.get('size') || 'medium', // set element-ui default size
  i18n: (key, value) => i18n.t(key, value)
})

// Object.keys(filters).forEach(key => {
//   Vue.filter(key, filters[key])
// })

/** global setting */
/* 设置为 false 以阻止 vue 在启动时生成生产提示 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  i18n,
  render: h => h(App)
})
