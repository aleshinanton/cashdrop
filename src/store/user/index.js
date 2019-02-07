import firebase from 'firebase'

export default {
  state: {
    user: null
  },
  mutations: {
    setUser (state, payload) {
      state.user = payload
    }
  },
  actions: {
    login ({ commit }, payload) {
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(
          x => {
            const newUser = {
              id: x.user.uid,
              name: x.user.displayName,
              email: x.user.email,
              photoUrl: x.user.photoURL
            }
            commit('setUser', newUser)
          }
        )
        .catch(
          error => {
            alert(error)
          }
        )
    },
    autoLoginIn ({ commit }, payload) {
      commit('setUser', {
        id: payload.uid,
        name: payload.displayName,
        email: payload.email,
        photoUrl: payload.photoURL
      })
    },
    signout ({ commit }) {
      firebase.auth().signOut()
      commit('setUser', null)
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  }
}
