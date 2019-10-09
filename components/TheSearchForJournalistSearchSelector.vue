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

        <SearchUserSelect
            :items="mediaTypeList"
            :label="$t('search_for_journalist.media_type')"
            :value.sync="mediaTypeParent"
        ></SearchUserSelect>

        <div v-show="mediaTypeParent">
            <SearchUserSelectMultiple
                :items="mediaListByType"
                :label="$t('search_for_journalist.media_type_details')"
                :value.sync="media"
            ></SearchUserSelectMultiple>
        </div>

        <SearchUserSelect
            :items="languageList"
            :label="$t('common.language')"
            :value.sync="language"
        ></SearchUserSelect>
    </div>
</template>

<script>
import mixinCountryCityListForSearchUser from "~/mixins/search-user-country-city-list";
import mixinSegmentList from "~/mixins/segment-list";
import mixinJournalistJobTitleList from "~/mixins/journalist-job-title-list";
import mixinMediaList from "~/mixins/media-list";
import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";

export default {
    name: "TheSearchForJournalistSearchSelector",

    mixins: [
        mixinCountryCityListForSearchUser,
        mixinSegmentList,
        mixinJournalistJobTitleList,
        mixinMediaList
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
            media: [],
            language: "",

            languageList: ["Vietnamese", "English", "Vietnamese/English"]
        };
    },

    computed: {
        segmentChildListByCategory() {
            return this.segmentChildList[this.segmentCategory];
        },

        mediaListByType() {
            return this.mediaList[this.mediaTypeParent];
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

        media(newValue, oldValue) {
            this.$emit("change", { key: "media", value: newValue });
        },

        language(newValue, oldValue) {
            this.$emit("change", { key: "language", value: newValue });
        }
    }
};
</script>