import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoading: true,
    },
    mutations: {
        START_LOADING(state) {
            state.isLoading = true;
        },
        END_LOADING(state) {
            state.isLoading = false;
        },
    },
    actions: {
        startLoading(context) {
            context.commit("START_LOADING");

            return true;
        },
        endLoading(context) {
            context.commit("END_LOADING");

            return true;
        },
    },
});

export default store;