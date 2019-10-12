<template>
    <SearchUserSelectMultiple :items="cityList" :label="cityLabel" :value.sync="cities"></SearchUserSelectMultiple>
</template>

<script>
import mixinCountryCityListForSearchUser from "~/mixins/search-user-country-city-list";

import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";

export default {
    name: "DashboardSearchFiltersCities",

    mixins: [mixinCountryCityListForSearchUser],

    components: {
        SearchUserSelectMultiple
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
