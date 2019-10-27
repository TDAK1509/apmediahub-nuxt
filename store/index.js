export const state = () => ({
  dashboardPageTitle: "",
  inputBorderColor: "blue darken-3",
  currentUser: null
});

export const mutations = {
  SET_PAGE_TITLE(state, title) {
    state.dashboardPageTitle = title;
  },

  SET_CURRENT_USER(state, payload) {
    state.currentUser = payload;
  }
};
