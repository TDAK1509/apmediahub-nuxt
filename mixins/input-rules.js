export default {
  data() {
    return {
      inputRules: {
        required: v => !!v || this.$t("form.error.empty"),
        numberOnly: v => /^[0-9]*$/.test(v) || this.$t("form.error.not_number")
      }
    };
  }
};
