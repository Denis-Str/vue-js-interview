import axios from 'axios'
export default {
  state: () => ({
    users: [],
    isLoading: false
  }),
  mutations: {
    SET_USERS(state, users) {
      state.users = users
    },
    SET_IS_LOADING(state, isLoading) {
      state.isLoading = isLoading
    }
  },
  actions: {
    async fetchUsers({ commit }) {
      try {
        commit('SET_IS_LOADING', true)
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
        commit('SET_USERS', data)
      } catch (e) {
        console.log(e)
      } finally {
        commit('SET_IS_LOADING', false)
      }

    }
  }
};
