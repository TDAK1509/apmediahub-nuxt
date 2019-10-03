export default {
  head() {
    return {
      title: this.title
    };
  },

  mounted() {
    this.$store.commit("setPageTitle", this.title);
  }
};
