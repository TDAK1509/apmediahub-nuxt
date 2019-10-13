<template>
    <SearchSelectMultiple :items="countryList" :label="countryLabel" :value.sync="countries"></SearchSelectMultiple>
</template>

<script>
import mixinCountryCityListForSearch from "~/mixins/search-user-country-city-list";

import SearchSelectMultiple from "@/components/DashboardSearchSelectMultiple";

export default {
    name: "DashboardSearchFiltersCountries",

    mixins: [mixinCountryCityListForSearch],

    components: {
        SearchSelectMultiple
    },
    data() {
        return {
            countries: []
        };
    },

    watch: {
        countries(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>
