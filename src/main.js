// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Cookies from 'js-cookie'

// A modern alternative to CSS resets
import 'normalize.css/normalize.css'

import App from './App'
import router from './router'
import store from './store/store'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/style/index.scss'

// import i18n from './lang'
// import * as filters from './filters';

// promise Browser compatibility
import 'es6-promise/auto'

/** global API */
/* 安装 Vue.js 插件 */
Vue.use(ElementUI)

/** global setting */
/* 设置为 false 以阻止 vue 在启动时生成生产提示 */
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
