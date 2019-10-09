import journalistJobTitleKey from "@/assets/json/journalist_job_title_key_list.json";

export default {
  data() {
    return {
      journalistJobTitle: []
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

      this.journalistJobTitle = list;
    }
  },

  created() {
    this.prepareJournalistJobTitle();
  }
};
