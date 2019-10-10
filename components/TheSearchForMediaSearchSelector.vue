<template>
    <div>
        <SearchUserSelectMultiple
            :items="countryList"
            :label="countryLabel"
            :value.sync="countries"
        ></SearchUserSelectMultiple>

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
import mixinMediaList from "~/mixins/media-list";

import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";

export default {
    name: "TheSearchForMediaSearchSelector",

    mixins: [
        mixinCountryCityListForSearchUser,
        mixinSegmentList,
        mixinMediaList
    ],

    components: {
        SearchUserSelectMultiple,
        SearchUserSelect
    },

    data() {
        return {
            countries: [],
            segmentCategory: "",
            segments: [],
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

        segments(newValue, oldValue) {
            this.$emit("change", { key: "segments", value: newValue });
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
