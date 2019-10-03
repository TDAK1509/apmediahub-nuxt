export default {
  data() {
    return {
      rules: {
        required: [v => !!v || this.$t("form.error.empty")]
      }
    };
  }
};
