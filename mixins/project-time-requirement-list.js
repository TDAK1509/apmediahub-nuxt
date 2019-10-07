export default {
  computed: {
    projectTimeRequirementList() {
      return [
        {
          text: this.$t("project_time_requirement.less_than_ten_hours_week"),
          value: "less_than_ten_hours_week"
        },

        {
          text: this.$t("project_time_requirement.ten_to_twenty_hours_week"),
          value: "ten_to_twenty_hours_week"
        },

        {
          text: this.$t("project_time_requirement.twenty_to_thirty_hours_week"),
          value: "twenty_to_thirty_hours_week"
        },

        {
          text: this.$t("project_time_requirement.thirty_to_forty_hours_week"),
          value: "thirty_to_forty_hours_week"
        },

        {
          text: this.$t("project_time_requirement.more_than_forty_hours_week"),
          value: "more_than_forty_hours_week"
        },

        {
          text: this.$t("project_time_requirement.flexible"),
          value: "flexible"
        }
      ];
    }
  }
};
