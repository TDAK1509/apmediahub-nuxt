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

        <SearchUserSelectMultiple
            :items="countryList"
            :label="countryLabel"
            :value.sync="countries"
        ></SearchUserSelectMultiple>

        <SearchUserSelectMultiple :items="cityList" :label="cityLabel" :value.sync="cities"></SearchUserSelectMultiple>

        <SearchUserSelect
            :items="segmentCategoryList"
            :label="$t('search_for_journalist.segment_category')"
            :value.sync="segmentCategory"
        ></SearchUserSelect>

        <div v-show="segmentCategory">
            <SearchUserSelectMultiple
                :items="segmentChildListByCategory"
                :label="$t('search_for_journalist.select_segments')"
                :value.sync="segments"
            ></SearchUserSelectMultiple>
        </div>

        <SearchUserSelect
            :items="journalistJobTitle"
            :label="$t('my_information.job_title')"
            :value.sync="jobTitle"
        ></SearchUserSelect>

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
import mixinSegmentList from "~/mixins/segment-list";
import mixinJournalistJobTitleList from "~/mixins/journalist-job-title-list";

import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";
import TheSearchForJournalistSearchPanel from "@/components/TheSearchForJournalistSearchPanel";

export default {
    name: "SearchForJournalist",

    mixins: [
        mixinDashboardTitle,
        mixinCountryCityListForSearchUser,
        mixinSegmentList,
        mixinJournalistJobTitleList
    ],

    components: {
        SearchUserSelectMultiple,
        SearchUserSelect,
        TheSearchForJournalistSearchPanel
    },

    data() {
        return {
            searching: false,

            countries: [],
            cities: [],
            segmentCategory: "",
            segments: [],
            jobTitle: "",
            mediaTypeParent: "",
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

        segmentChildListByCategory() {
            return this.segmentChildList[this.segmentCategory];
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
        },

        search() {
            return {
                countries: this.countries,
                cities: this.cities
            };
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

        async doSearchAction() {
            const result = await this.$axios.$get(
                "https://jsonplaceholder.typicode.com/todos/1"
            );
            console.log(result);
        }
    }
};
</script>