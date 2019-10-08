import segmentList from "@/assets/json/segment_list.json";

export default {
  data() {
    return {
      segmentChildList: null,
      segmentCategoryList: []
    };
  },

  methods: {
    prepareSegmentList(jsonList) {
      const categoryList = [];
      const childList = {};

      for (let key in jsonList) {
        const categoryListItem = {
          text: this.$t(`segments.${key}.text`),
          value: key
        };
        categoryList.push(categoryListItem);

        // Map list from "key": [childKey]
        // to "key" : [ { text: i18n text, value: childKey}]
        const childListItem = jsonList[key].map(childKey => {
          return {
            text: this.$t(`segments.${key}.child.${childKey}`),
            value: `${key}.${childKey}`
          };
        });

        childList[key] = childListItem;
      }

      this.segmentCategoryList = categoryList;
      this.segmentChildList = childList;
    }
  },

  created() {
    this.prepareSegmentList(segmentList);
  }
};
