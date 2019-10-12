import journalistJobTitleKey from "@/assets/json/journalist_job_title_key_list.json";

export default {
  data() {
    return {
      journalistJobTitleList: []
    };
  },

  methods: {
    prepareJournalistJobTitle() {
      const list = journalistJobTitleKey.map(key => {
        return {
          text: this.$t(`journalist_job_title.${key}`),
          value: key
        };
      });

      this.journalistJobTitleList = [...list];
    }
  },

  created() {
    this.prepareJournalistJobTitle();
  }
};
