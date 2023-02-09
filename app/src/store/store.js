import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoading: true,
        pageTitle: "",
    },
    mutations: {
        START_LOADING(state) {
            state.isLoading = true;
        },
        END_LOADING(state) {
            state.isLoading = false;
        },
        SET_PAGE_TITLE(state, pageTitle) {
            state.pageTitle = pageTitle;
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
        changePageTitle(context, pageTitle) {
            context.commit("SET_PAGE_TITLE", pageTitle);

            return true;
        },
    },
});

export default store;