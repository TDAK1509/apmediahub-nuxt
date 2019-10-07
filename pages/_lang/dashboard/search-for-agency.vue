<template>
    <v-form ref="form">
        <div class="search-panel d-flex flex-column justify-center" v-if="showSearchPanel">
            <div class="search-panel-block d-flex justify-start align-center mb-2">
                <SearchFilterItem
                    class="mr-2"
                    v-for="(f, index) in selectedCountries"
                    :key="`countryFilter${index}`"
                    @remove="removeFromSelectedCountries(f)"
                >{{f}}</SearchFilterItem>
            </div>

            <div class="search-panel-block d-flex justify-start mb-2">
                <SearchFilterItem
                    class="mr-2"
                    v-for="(f, index) in selectedCities"
                    :key="`cityFilter${index}`"
                >{{f}}</SearchFilterItem>
            </div>

            <div class="search-panel-block d-flex justify-start mb-2">
                <SearchFilterItem
                    class="mr-2"
                    v-show="selectedServiceLevel"
                >{{selectedServiceLevel}}</SearchFilterItem>
            </div>

            <div class="search-panel-block d-flex justify-start mb-2">
                <SearchFilterItem
                    class="mr-2"
                    v-for="(f, index) in selectedServices"
                    :key="`serviceFilter${index}`"
                >{{f}}</SearchFilterItem>
            </div>
        </div>

        <SelectWithPanel :items="countryList" :label="countryLabel" :value.sync="selectedCountries"></SelectWithPanel>

        <SelectWithPanel :items="cityList" :label="cityLabel" :value.sync="selectedCities"></SelectWithPanel>

        <div class="d-flex justify-start">
            <v-btn
                color="primary"
                class="px-8"
                ref="postButton"
                :loading="searching"
                :disabled="searching"
                @click="searchForAgency"
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
import SearchFilterItem from "@/components/DashboardSearchFilterItem";

export default {
    name: "SearchForAgency",

    mixins: [mixinDashboardTitle, mixinCountryCityListForSearchUser],

    components: {
        SearchFilterItem
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

        search() {
            return {
                countries: this.selectedCountries,
                cities: this.selectedCities,
                serviceLevel: this.selectedServiceLevel,
                services: this.selectedServices
            };
        },

        showSearchPanel() {
            return (
                !!this.selectedCountries.length ||
                !!this.selectedCities.length ||
                !!this.selectedServiceLevel ||
                !!this.selectedServices.length
            );
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

        removeSelectedServiceLevel() {
            this.selectedServiceLevel = "";
        },

        removeFromSelectedServices(service) {
            const index = this.selectedServices.indexOf(service);
            this.selectedServices.splice(index, 1);
        },

        searchForAgency() {
            console.log("search");
        }
    }
};
</script>

<style>
</style>