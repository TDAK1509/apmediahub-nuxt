<template>
    <v-form ref="form" class="text-left">
        <TheSearchForJournalistSearchPanel
            :countries="countries"
            :cities="cities"
            :segments="segmentsForSearchFilter"
            @removeCountry="removeFromSelectedCountries"
            @removeCity="removeFromSelectedCities"
            @removeSegment="removeFromSelectedSegments"
        ></TheSearchForJournalistSearchPanel>

        <TheSearchForJournalistSearchSelector @change="updateSearchValues"></TheSearchForJournalistSearchSelector>

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

import TheSearchForJournalistSearchPanel from "@/components/TheSearchForJournalistSearchPanel";
import TheSearchForJournalistSearchSelector from "@/components/TheSearchForJournalistSearchSelector";

export default {
    name: "SearchForJournalist",

    mixins: [mixinDashboardTitle],

    components: {
        TheSearchForJournalistSearchPanel,
        TheSearchForJournalistSearchSelector
    },

    data() {
        return {
            searching: false,

            countries: [],
            cities: [],
            segments: [],
            jobTitle: "",
            mediaTypes: [],
            language: ""
        };
    },

    computed: {
        title() {
            return (
                this.$t("common.search") + " " + this.$t("user.role.journalist")
            );
        },

        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        },

        segmentsForSearchFilter() {
            return this.segments.map(key => {
                // Add .child between 2 parts of key
                let arrayKeys = key.split(".");
                arrayKeys.splice(1, 0, "child");

                const localeSuffix = arrayKeys.join(".");

                return {
                    text: this.$t(`segments.${localeSuffix}`),
                    value: key
                };
            });
        }
    },

    methods: {
        removeFromSelectedCountries(country) {
            console.log(country);
            const index = this.countries.indexOf(country);
            this.countries.splice(index, 1);
        },

        removeFromSelectedCities(city) {
            const index = this.cities.indexOf(city);
            this.cities.splice(index, 1);
        },

        removeFromSelectedSegments(city) {
            const index = this.segments.indexOf(city);
            this.segments.splice(index, 1);
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