import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    isLoading: false,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    showLoading(state, isLoad) {
      state.isLoading = isLoad;
    },
  },
});
