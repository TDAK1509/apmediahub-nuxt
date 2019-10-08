<template>
    <v-form ref="form" class="text-left">
        <div class="search-panel d-flex flex-column justify-center">
            <div class="search-panel-block d-flex justify-start align-center flex-wrap">
                <SearchFilterItem
                    class="mr-2 mb-2"
                    v-for="(f, index) in selectedCountries"
                    :key="`countryFilter${index}`"
                    @remove="removeFromSelectedCountries(f)"
                >{{f}}</SearchFilterItem>
            </div>

            <div class="search-panel-block d-flex justify-start flex-wrap">
                <SearchFilterItem
                    class="mr-2 mb-2"
                    v-for="(f, index) in selectedCities"
                    :key="`cityFilter${index}`"
                    @remove="removeFromSelectedCities(f)"
                >{{f}}</SearchFilterItem>
            </div>

            <div class="search-panel-block d-flex justify-start flex-wrap">
                <SearchFilterItem
                    class="mr-2 mb-2"
                    v-for="(f, index) in selectedServicesText"
                    :key="`serviceFilter${index}`"
                    @remove="removeFromSelectedServices(f.value)"
                >{{f.text}}</SearchFilterItem>
            </div>
        </div>

        <SearchUserSelectMultiple
            :items="countryList"
            :label="countryLabel"
            @change="removeFromSelectedCountries"
            :value.sync="selectedCountries"
        ></SearchUserSelectMultiple>

        <SearchUserSelectMultiple
            :items="cityList"
            :label="cityLabel"
            @change="removeFromSelectedCities"
            :value.sync="selectedCities"
        ></SearchUserSelectMultiple>

        <SearchUserSelect
            :items="serviceLevelListWithAllField"
            :label="$t('service_level.service_level')"
            :value.sync="selectedServiceLevel"
        ></SearchUserSelect>

        <SearchUserSelectMultiple
            :items="serviceList"
            :label="$t('search_user.services')"
            @change="removeFromSelectedServices"
            :value.sync="selectedServices"
        ></SearchUserSelectMultiple>

        <div class="d-flex justify-start">
            <v-btn
                color="primary"
                class="px-8"
                ref="postButton"
                :loading="searching"
                :disabled="searching"
                @click="doSearchAction"
            >
                {{$t("common.search")}}
                <v-icon right dark>mdi-magnify</v-icon>
            </v-btn>
        </div>
    </v-form>
</template>

<script>
import mixinDashboardTitle from "~/mixins/dashboard-title";
import mixinCountryCityListForSearchUser from "~/mixins/search-user-country-city-list";
import mixinServiceLevelList from "~/mixins/service-level-list";
import mixinServiceList from "~/mixins/service-list";
import SearchFilterItem from "@/components/DashboardSearchFilterItem";
import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";

export default {
    name: "SearchForAgency",

    mixins: [
        mixinDashboardTitle,
        mixinCountryCityListForSearchUser,
        mixinServiceLevelList,
        mixinServiceList
    ],

    components: {
        SearchFilterItem,
        SearchUserSelectMultiple,
        SearchUserSelect
    },

    data() {
        return {
            searching: false,

            selectedCountries: [],
            selectedCities: [],
            selectedServiceLevel: "",
            selectedServices: []
        };
    },

    computed: {
        title() {
            return this.$t("common.search") + " " + this.$t("user.role.agency");
        },

        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        },

        serviceLevelListWithAllField() {
            const all = {
                text: this.$t("common.all"),
                value: ""
            };

            return [all, ...this.serviceLevelList];
        },

        selectedServicesText() {
            return this.selectedServices.map(serviceKey => {
                return {
                    text: this.$t(`services.${serviceKey}`),
                    value: serviceKey
                };
            });
        },

        search() {
            return {
                countries: this.selectedCountries,
                cities: this.selectedCities,
                serviceLevel: this.selectedServiceLevel,
                services: this.selectedServices
            };
        }
    },

    methods: {
        removeFromSelectedCountries(country) {
            const index = this.selectedCountries.indexOf(country);
            this.selectedCountries.splice(index, 1);
        },

        removeFromSelectedCities(city) {
            const index = this.selectedCities.indexOf(city);
            this.selectedCities.splice(index, 1);
        },

        removeFromSelectedServices(service) {
            const index = this.selectedServices.indexOf(service);
            this.selectedServices.splice(index, 1);
        },

        async doSearchAction() {
            const result = await this.$axios.$get(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            console.log(result);
        }
    }
};
</script>

<style>
</style>