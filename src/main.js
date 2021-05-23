// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import store from './store/store'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/index.css'
import axios from 'axios'


Vue.prototype.axios = axios
Vue.config.productionTip = false



Vue.use(ElementUI);
Vue.use(Vuex);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
//全局路由守卫
//to 是去往的页面 from是来自哪个页面 next是下一步去哪
//第一个if是如果要去的页面是login或者regist 就执行next 这里next是不做任何行为 
//else里的第二个if是判断登录状态 这个是我的php返回的状态code 如果是success 就不做任何行为 
//然后 else 就是当前面的条件都不符合的情况 提示信息 然后转到login页面 因为是全局守卫 不管你要前往哪个页面 都必须执行这个守卫的内容！
router.beforeEach((to,from,next)=>{
  if(to.path == '/login' || to.path == '/regist'){ 
    next();
  }else {
  if(store.state.code =="success"){
    next();
  }
  else{
  alert('您还没有登录，请先登录');
  next('/login');
} 
  
  }
})