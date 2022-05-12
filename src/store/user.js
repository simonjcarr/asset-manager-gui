import store from '.'

netlifyIdentity.on('init', user => {
  store.commit('user/setUser', user);
})
netlifyIdentity.on('login', user => {
  store.commit('user/setUser', user);
})
netlifyIdentity.on('logout', () => {
  store.commit('user/setUser', null);
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
