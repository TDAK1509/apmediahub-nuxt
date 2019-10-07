export default {
  computed: {
    serviceLevelList() {
      return [
        { text: this.$t("service_level.basic"), value: "basic" },
        { text: this.$t("service_level.intermediate"), value: "intermediate" },
        { text: this.$t("service_level.expert"), value: "expert" }
      ];
    }
  }
};
