import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        isLoading: true,
        pageTitle: "",
        snackbar: false,
        snackbarColor: "success",
        snackbarMessage: "The form has been reset successfully!",
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
        SHOW_SNACKBAR(state) {
            state.snackbar = true;
        },
        CLOSE_SNACKBAR(state) {
            state.snackbar = false;
        },
    },
    actions: {
        startLoading(context) {
            context.commit("START_LOADING");
        },
        endLoading(context) {
            context.commit("END_LOADING");
        },
        changePageTitle(context, pageTitle) {
            context.commit("SET_PAGE_TITLE", pageTitle);
        },
        showSnackbar(context) {
            context.commit("SHOW_SNACKBAR");
        },
        closeSnackbar(context) {
            context.commit("CLOSE_SNACKBAR");
        },
    },
});

export default store;