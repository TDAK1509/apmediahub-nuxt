import serviceList from "@/assets/json/service_list.json";

export default {
  data() {
    return {
      serviceList: null,
      serviceCategoryList: [],
      serviceCategory: "" // chosen category
    };
  },

  computed: {
    serviceListByCategory() {
      if (!this.serviceCategory) return [];
      return this.serviceList[this.serviceCategory];
    }
  },

  methods: {
    prepareserviceList(jsonList) {
      const categoryList = [];
      const childList = {};

      for (let key in jsonList) {
        const categoryListItem = {
          text: this.$t(`services.${key}.text`),
          value: key
        };
        categoryList.push(categoryListItem);

        // Map list from "key": [childKey]
        // to "key" : [ { text: i18n text, value: childKey}]
        const childListItem = jsonList[key].map(childKey => {
          return {
            text: this.$t(`services.${key}.child.${childKey}`),
            value: `${key}.${childKey}`
          };
        });

        childList[key] = childListItem;
      }

      this.serviceCategoryList = categoryList;
      this.serviceList = childList;
    }
  },

  created() {
    this.prepareserviceList(serviceList);
  }
};
