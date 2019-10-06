export default {
  computed: {
    projectDurationList() {
      return [
        {
          text: this.$t("project_duration.less_than_a_week"),
          value: "less_than_a_week"
        },

        {
          text: this.$t("project_duration.less_than_a_month"),
          value: "less_than_a_month"
        },

        {
          text: this.$t("project_duration.one_to_three_months"),
          value: "one_to_three_months"
        },

        {
          text: this.$t("project_duration.three_to_six_months"),
          value: "three_to_six_months"
        },

        {
          text: this.$t("project_duration.six_to_twelve_months"),
          value: "six_to_twelve_months"
        },

        {
          text: this.$t("project_duration.more_than_a_year"),
          value: "more_than_a_year"
        }
      ];
    }
  }
};
