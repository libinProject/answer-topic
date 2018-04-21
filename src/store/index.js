import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    toast: {
      toast: false,
      toastLock: true
    }
  },
  mutations: {
    toggleToast (state) {
      if (state.toast.toastLock) {
        state.toast.toast = !state.toast.toast
      }
    }
  },
  actions: {
    toggleToast (context) {
      context.commit('toggleToast')
    }
  },
  getters: {
    toastState: state => {
      return state.toast.toast
    }
  }
})

export default store
