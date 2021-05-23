import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import login from '@/components/login'
import regist from'@/components/regist'
import doctorinfo from '@/components/doctorinfo'
import myinfo from '@/components/myinfo'
import advice from '@/components/advice'
import order from '@/components/order'
import newactivity from '@/components/newactivity'
import myrecord from '@/components/myrecord'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
   {
      path:'/login',
      name:'login',
      component: login
   },
   {
     path:'/regist',
     name:'regist',
     component: regist
   },
   {
     path:'/doctorinfo',
     name:'doctorinfo',
     component: doctorinfo
   },
   {
     path:'/myinfo',
     name:'myinfo',
     component: myinfo
   },
   {
    path:'/advice',
    name:'advice',
    component: advice
   },
   {
     path:'/order',
     name:'order',
     component: order
   },
   {
     path:'/newactivity',
     name:'newactivity',
     component: newactivity
   },
   {
    path:'/myrecord',
    name:'myrecord',
    component: myrecord
  },
  ],
  beforeRouteEnter:(to,from,next)=>{
    next(vm=>{
       let code = this.$store.state.code;
    })
}
})
