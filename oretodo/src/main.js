// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui' // 追加！
import locale from 'element-ui/lib/locale/lang/ja' // 追加！
import 'element-theme-default';

Vue.config.productionTip = false
Vue.use(ElementUI,{locale}) // 追加！

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
