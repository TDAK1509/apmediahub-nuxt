import mediaList from "@/assets/json/media_list.json";

export default {
  data() {
    return {
      mediaList: null,
      mediaTypeList: []
    };
  },

  methods: {
    prepareMediaList(jsonList) {
      const mediaTypeList = [];
      const childList = {};

      for (let key in jsonList) {
        const mediaTypeListItem = {
          text: this.$t(`media.${key}.text`),
          value: key
        };
        mediaTypeList.push(mediaTypeListItem);

        // Map list from "key": [childKey]
        // to "key" : [ { text: i18n text, value: childKey}]
        const childListItem = jsonList[key].map(childKey => {
          return {
            text: this.$t(`media.${key}.child.${childKey}`),
            value: `${key}.${childKey}`
          };
        });

        childList[key] = childListItem;
      }

      this.mediaTypeList = mediaTypeList;
      this.mediaList = childList;
    }
  },

  created() {
    this.prepareMediaList(mediaList);
  }
};
