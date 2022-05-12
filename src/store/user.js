export default {
  namespaced: true,
  state: { 
    keycloak: null 
  },
  mutations: {
    setKeycloak(state, keycloak) {
      state.keycloak = keycloak;
    },
  },
  actions: {
    setKeycloak({ commit }, keycloak) {
      commit("setKeycloak", keycloak);
    },
  },
};
