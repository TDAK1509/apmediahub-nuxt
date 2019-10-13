<template>
    <SearchSelectMultiple :items="cityList" :label="cityLabel" :value.sync="cities"></SearchSelectMultiple>
</template>

<script>
import mixinCountryCityListForSearch from "~/mixins/search-user-country-city-list";

import SearchSelectMultiple from "@/components/DashboardSearchSelectMultiple";

export default {
    name: "DashboardSearchFiltersCities",

    mixins: [mixinCountryCityListForSearch],

    components: {
        SearchSelectMultiple
    },

    props: {
        countries: Array
    },

    data() {
        return {
            cities: []
        };
    },

    watch: {
        cities(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>
