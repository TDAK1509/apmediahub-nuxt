<template>
    <div>
        <SearchUserSelectMultiple
            :items="countryList"
            :label="countryLabel"
            :value.sync="countries"
        ></SearchUserSelectMultiple>

        <SearchUserSelectMultiple :items="cityList" :label="cityLabel" :value.sync="cities"></SearchUserSelectMultiple>

        <SearchUserSelect
            :items="serviceCategoryList"
            :label="$t('search_user.service_category')"
            :value.sync="serviceCategory"
        ></SearchUserSelect>

        <div v-show="serviceCategory">
            <SearchUserSelectMultiple
                :items="serviceListByCategory"
                :label="$t('search_user.select_services')"
                :value.sync="services"
            ></SearchUserSelectMultiple>
        </div>

        <SearchUserSelect
            :items="serviceLevelList"
            :label="$t('service_level.service_level')"
            :value.sync="serviceLevel"
        ></SearchUserSelect>
    </div>
</template>

<script>
import mixinCountryCityListForSearchUser from "~/mixins/search-user-country-city-list";
import mixinServiceList from "~/mixins/service-list";
import mixinServiceLevelList from "~/mixins/service-level-list";

import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";

export default {
    name: "TheSearchForAgencySearchSelector",

    mixins: [
        mixinCountryCityListForSearchUser,
        mixinServiceList,
        mixinServiceLevelList
    ],

    components: {
        SearchUserSelectMultiple,
        SearchUserSelect
    },

    data() {
        return {
            countries: [],
            cities: [],
            services: [],
            serviceLevel: ""
        };
    },

    watch: {
        countries(newValue, oldValue) {
            this.$emit("change", { key: "countries", value: newValue });
        },

        cities(newValue, oldValue) {
            this.$emit("change", { key: "cities", value: newValue });
        },

        services(newValue, oldValue) {
            this.$emit("change", { key: "services", value: newValue });
        },

        serviceLevel(newValue, oldValue) {
            this.$emit("change", { key: "serviceLevel", value: newValue });
        }
    }
};
</script>
