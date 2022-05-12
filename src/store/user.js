import netlifyIdentity from 'netlify-identity-widget';
import store from '.';
console.log("In the user store")
netlifyIdentity.on('init', user => {
  console.log("init", user)
  store.commit('user/setUser', user);
})
netlifyIdentity.on('login', user => {
  console.log("login", user)
  store.commit('user/setUser', user);
})
export default {
  namespaced: true,
  state: { 
    user: null,
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    }
  },
  actions: {
    setUser({ commit }) {
      commit('setUser', netlifyIdentity.currentUser());
    }
  },
};
