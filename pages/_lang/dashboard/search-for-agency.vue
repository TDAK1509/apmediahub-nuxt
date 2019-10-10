<template>
    <v-form ref="form" class="text-left">
        <TheSearchForAgencySearchPanel
            :countries="countries"
            :cities="cities"
            :services="servicesForSearchFilter"
            @removeCountry="removeFromSelectedCountries"
            @removeCity="removeFromSelectedCities"
            @removeService="removeFromSelectedServices"
        ></TheSearchForAgencySearchPanel>

        <TheSearchForAgencySearchSelector @change="updateSearchValues"></TheSearchForAgencySearchSelector>

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

import TheSearchForAgencySearchPanel from "@/components/TheSearchForAgencySearchPanel";
import TheSearchForAgencySearchSelector from "@/components/TheSearchForAgencySearchSelector";

export default {
    name: "SearchForAgency",

    mixins: [mixinDashboardTitle],

    components: {
        TheSearchForAgencySearchPanel,
        TheSearchForAgencySearchSelector
    },

    data() {
        return {
            searching: false,

            countries: [],
            cities: [],
            serviceLevel: "",
            services: []
        };
    },

    computed: {
        title() {
            return this.$t("common.search") + " " + this.$t("user.role.agency");
        },

        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        },

        servicesForSearchFilter() {
            return this.services.map(key => {
                // Add .child between 2 parts of key
                let arrayKeys = key.split(".");
                arrayKeys.splice(1, 0, "child");

                const localeSuffix = arrayKeys.join(".");

                return {
                    text: this.$t(`services.${localeSuffix}`),
                    value: key
                };
            });
        }
    },

    methods: {
        removeFromSelectedCountries(country) {
            const index = this.countries.indexOf(country);
            this.countries.splice(index, 1);
        },

        removeFromSelectedCities(city) {
            const index = this.cities.indexOf(city);
            this.cities.splice(index, 1);
        },

        removeFromSelectedServices(service) {
            const index = this.services.indexOf(service);
            this.services.splice(index, 1);
        },

        updateSearchValues({ key, value }) {
            this[key] = value;
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