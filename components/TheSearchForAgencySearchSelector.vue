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

        <div>
            <h4 class="subhead mb-2">{{$t('service_level.service_level')}}</h4>

            <v-checkbox
                v-for="s in serviceLevelList"
                v-model="serviceLevel"
                class="mt-2 pt-0"
                :key="s.value"
                :color="inputBorderColor"
                :label="s.text"
                :value="s.value"
                hide-details
            ></v-checkbox>
        </div>
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

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        }
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
