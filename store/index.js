export const state = () => ({
    locales: ["vn", "en"],
    locale: "vn",
    dashboardPageTitle: "",
    inputBorderColor: "blue darken-3",
    currentUser: null
});

export const mutations = {
    SET_LANG(state, locale) {
        if (state.locales.includes(locale)) {
            state.locale = locale;
        }
    },

    SET_PAGE_TITLE(state, title) {
        state.dashboardPageTitle = title;
    },

    SET_CURRENT_USER(state, payload) {
        state.currentUser = payload;
    }
};
