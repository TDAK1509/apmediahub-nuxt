export const state = () => ({
  locales: ["vn", "en"],
  locale: "vn",
  dashboardPageTitle: ""
});

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale;
    }
  },

  setPageTitle(state, title) {
    state.dashboardPageTitle = title;
  }
};
