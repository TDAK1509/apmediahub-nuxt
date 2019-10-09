<template>
    <div>
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
    </div>
</template>

<script>
import mixinCountryCityListForSearchUser from "~/mixins/search-user-country-city-list";
import mixinSegmentList from "~/mixins/segment-list";
import mixinJournalistJobTitleList from "~/mixins/journalist-job-title-list";
import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";

export default {
    name: "TheSearchForJournalistSearchSelector",

    mixins: [
        mixinCountryCityListForSearchUser,
        mixinSegmentList,
        mixinJournalistJobTitleList
    ],

    components: {
        SearchUserSelectMultiple,
        SearchUserSelect
    },

    data() {
        return {
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
        segmentChildListByCategory() {
            return this.segmentChildList[this.segmentCategory];
        }
    },

    watch: {
        countries(newValue, oldValue) {
            this.$emit("change", { key: "countries", value: newValue });
        },

        cities(newValue, oldValue) {
            this.$emit("change", { key: "cities", value: newValue });
        },

        segments(newValue, oldValue) {
            this.$emit("change", { key: "segments", value: newValue });
        },

        jobTitle(newValue, oldValue) {
            this.$emit("change", { key: "jobTitle", value: newValue });
        },

        mediaTypes(newValue, oldValue) {
            this.$emit("change", { key: "mediaTypes", value: newValue });
        },

        language(newValue, oldValue) {
            this.$emit("change", { key: "language", value: newValue });
        }
    }
};
</script>