import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    result : 0 ,
    num1 : '',
    num2 : '',
    opp : ''
  },
  mutations: {
    res(state) {
      if(state.opp === '+'){
        state.result = parseInt(state.num1) + parseInt(state.num2)
      }
      else if(state.opp === '-'){
        state.result = parseInt(state.num1) - parseInt(state.num2)
      }
      else if(state.opp === '*'){
        state.result = parseInt(state.num1) * parseInt(state.num2)
      }
      else if(state.opp === '/'){
        state.result = parseInt(state.num1) / parseInt(state.num2)
      }
      
    }
  },
  actions: {
    
  },
  modules: {
  }
})
