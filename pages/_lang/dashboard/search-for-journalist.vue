<template>
    <v-form ref="form" class="text-left">
        <div class="search-panel d-flex flex-column justify-center">
            <div class="search-panel-block d-flex justify-start align-center flex-wrap">
                <SearchFilterItem
                    class="mr-2 mb-2"
                    v-for="(f, index) in countries"
                    :key="`countryFilter${index}`"
                    @remove="removeFromSelectedCountries(f)"
                >{{f}}</SearchFilterItem>
            </div>

            <div class="search-panel-block d-flex justify-start flex-wrap">
                <SearchFilterItem
                    class="mr-2 mb-2"
                    v-for="(f, index) in cities"
                    :key="`cityFilter${index}`"
                    @remove="removeFromSelectedCities(f)"
                >{{f}}</SearchFilterItem>
            </div>

            <div class="search-panel-block d-flex justify-start flex-wrap">
                <SearchFilterItem
                    class="mr-2 mb-2"
                    v-for="(f, index) in segmentsForSearchFilter"
                    :key="`segmentFilter${index}`"
                    @remove="removeFromSelectedSegments(f.value)"
                >{{f.text}}</SearchFilterItem>
            </div>
        </div>

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

        <SearchUserSelectMultiple :items="segmentChildListByCategory" :value.sync="segments"></SearchUserSelectMultiple>

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
import SearchFilterItem from "@/components/DashboardSearchFilterItem";
import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";

export default {
    name: "SearchForJournalist",

    mixins: [
        mixinDashboardTitle,
        mixinCountryCityListForSearchUser,
        mixinSegmentList
    ],

    components: {
        SearchFilterItem,
        SearchUserSelectMultiple,
        SearchUserSelect
    },

    data() {
        return {
            searching: false,

            countries: [],
            cities: [],
            segmentCategory: "",
            segments: []
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