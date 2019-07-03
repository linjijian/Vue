import types from './types'

const actions = {
   adminLogin({ commit }) {
    commit(types.ADMIN_LOGIN)
  },
  adminLogout({ commit }) {
    commit(types.ADMIN_LOGOUT)
  },
  createImage(store, payload) {
    return new Promise(function(resolve, reject) {
      var reader = new FileReader()
      reader.readAsDataURL(payload.file)
      reader.onload = (e) => {
        resolve(e.target.result)
      }
      if (!(payload.type.test(payload.file.name))) {
        reader.abort()
        reject(new Error('type'))
      }
      if (payload.file.size > payload.size * 1024 * 1024) {
        reader.abort()
        reject(new Error('size'))
      }
    })
  }
}
export default actions;