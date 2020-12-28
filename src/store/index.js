import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: {},
    activeUser: '',
    activeAddress: {},
    goodsList: {},
    activeGoods: '',
    activeCart: [],
    activePay: []
  },
  mutations: {
    pushUser (state, user) {
      state.users.push(user)
    },
    pushGoods (state, newGoods) {
      state.activeCart.push(newGoods)
    },
    pushPay (state, selected) {
      for (let goods of selected) {
        state.activePay.push(goods)
      }
    },
    pushPayNow (state, newGoods) {
      state.activePay.push(newGoods)
    },
    handleCart (stata) {
      let aa = stata.activeCart.filter(
        item => !stata.activePay.some(
          ele => ele.name === item.name
        )
      )
      stata.activeCart = aa
      stata.activePay = []
    }
  },
  actions: {
    addUser (context, user) {
      context.commit('pushUser', user)
    },
    addGoods (content, newGoods) {
      content.commit('pushGoods', newGoods)
    },
    addPay (content, selected) {
      content.commit('pushPay', selected)
    },
    buyNow (content, newGoods) {
      content.commit('pushPayNow', newGoods)
    },
    clearCart (content) {
      content.commit('handleCart')
    }
  }
})
