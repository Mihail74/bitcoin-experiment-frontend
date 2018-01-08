export const UPDATE_TOKENS = 'updateTokens'
export const CLEAR_TOKENS = 'clearTokens'

export default {
  namespaced: true,

  state: {
    accessToken: null
  },

  mutations: {
    [UPDATE_TOKENS]: (state, tokensData) => {
      state.accessToken = tokensData.token
    },

    [CLEAR_TOKENS]: (state) => {
      state.accessToken = null
    }
  },

  actions: {
    updateTokens ({ commit }, tokensData) {
      commit(UPDATE_TOKENS, tokensData)
    },

    clearTokens ({ commit }) {
      commit(CLEAR_TOKENS)
    }
  },

  getters: {}
}
