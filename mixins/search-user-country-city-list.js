import countryCityList from "@/assets/json/country_city_list.json";
export default {
  computed: {
    countryList() {
      return Object.keys(countryCityList).sort();
    },

    countryLabel() {
      return this.$t("common.country");
    },

    cityList() {
      if (!this.countries || !this.countries.length) return [];

      let result = [];

      this.countries.forEach(country => {
        const cities = countryCityList[country].city.sort();
        result = [...result, ...cities];
      });

      return result.sort();
    },

    cityLabel() {
      return this.$t("common.city");
    }
  }
};
