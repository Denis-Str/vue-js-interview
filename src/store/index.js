import Vue from 'vue';
import Vuex from 'vuex';
import users from './users';

Vue.use(Vuex);
export default new Vuex.Store({
  modules: {
    users,
  },
  state: () => ({
    currentFilterCountry: '',
    currentFilterScore: '',
  }),
  mutations: {
    SET_FILTER_COUNTRY(state, filter) {
      state.currentFilterCountry = filter;
    },
    SET_FILTER_SCORE(state, filter) {
      state.currentFilterScore = filter;
    },
  }
});
