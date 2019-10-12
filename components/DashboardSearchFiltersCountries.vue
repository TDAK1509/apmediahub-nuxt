<template>
    <SearchUserSelectMultiple :items="countryList" :label="countryLabel" :value.sync="countries"></SearchUserSelectMultiple>
</template>

<script>
import mixinCountryCityListForSearchUser from "~/mixins/search-user-country-city-list";

import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";

export default {
    name: "DashboardSearchFiltersCountries",

    mixins: [mixinCountryCityListForSearchUser],

    components: {
        SearchUserSelectMultiple
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
