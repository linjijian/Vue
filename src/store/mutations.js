import types from './types'

const mutations = {
  [types.ADMIN_LOGIN](state) {
    state.logined = true
  },
  [types.ADMIN_LOGOUT](state) {
    state.logined = false
  },
   setMenu(state, menu) {
    state.menu = menu
  }
}

export default mutations;