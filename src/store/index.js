import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 0,
    isLoading: false,
    cookie: document.cookie,
    seatInfo: "",
    mySeat: "",
    totalPrice: 0,
    commitSeat: [],
  },
  getters: {
    cookie(state) {
      return state.cookie.match(/\d+/)[0];
    },
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
