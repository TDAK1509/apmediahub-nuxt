export default {
  data() {
    return {
      inputRules: {
        required: [v => !!v || this.$t("form.error.empty")]
      }
    };
  }
};
