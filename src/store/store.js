import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex);


export default new Vuex.Store({
    state:{
      code:"false",
      loginmessage:"您好，请登录",
    },
    mutations:{
      logincode(state,newcode){
      state.code = newcode;
      },
      loginmessage(state,newstdnumber){
        state.loginmessage = newstdnumber;
      }
    }
  })