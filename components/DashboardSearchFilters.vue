<template>
    <div>
        <div class="countries-container" v-if="showCountries">
            <SearchUserSelectMultiple
                :items="countryList"
                :label="countryLabel"
                :value.sync="countries"
            ></SearchUserSelectMultiple>
        </div>

        <div class="cities-container" v-if="showCities">
            <SearchUserSelectMultiple :items="cityList" :label="cityLabel" :value.sync="cities"></SearchUserSelectMultiple>
        </div>

        <div class="services-container" v-if="showServices">
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
        </div>

        <div class="service-levels-container" v-if="showServiceLevels">
            <h4 class="subhead mb-2">{{$t('service_level.service_level')}}</h4>

            <v-checkbox
                v-for="s in serviceLevelList"
                v-model="serviceLevels"
                class="mt-2 pt-0"
                :key="s.value"
                :color="inputBorderColor"
                :label="s.text"
                :value="s.value"
                hide-details
            ></v-checkbox>
        </div>

        <div class="segments-container" v-if="showSegments">
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
        </div>

        <div class="media-container" v-if="showMedia">
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
        </div>

        <div class="job-title-container" v-if="showJobTitle">
            <h4 class="subhead mb-2">{{$t('service_level.service_level')}}</h4>

            <v-checkbox
                v-for="s in journalistJobTitle"
                v-model="serviceLevel"
                class="mt-2 pt-0"
                :key="s.value"
                :color="inputBorderColor"
                :label="s.text"
                :value="s.value"
                hide-details
            ></v-checkbox>
        </div>

        <div class="language-container" v-if="showLanguage"></div>
    </div>
</template>

<script>
import mixinCountryCityListForSearchUser from "~/mixins/search-user-country-city-list";
import mixinServiceList from "~/mixins/service-list";
import mixinServiceLevelList from "~/mixins/service-level-list";
import mixinSegmentList from "~/mixins/segment-list";
import mixinJournalistJobTitleList from "~/mixins/journalist-job-title-list";
import mixinMediaList from "~/mixins/media-list";

import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";

export default {
    name: "DashboardSearchFilters",

    mixins: [
        mixinCountryCityListForSearchUser,
        mixinServiceList,
        mixinServiceLevelList,
        mixinSegmentList,
        mixinJournalistJobTitleList,
        mixinMediaList
    ],

    components: {
        SearchUserSelectMultiple,
        SearchUserSelect
    },

    props: {
        showCountries: Boolean,
        showCities: Boolean,
        showServices: Boolean,
        showServiceLevels: Boolean,
        showSegments: Boolean,
        showMedia: Boolean,
        showJobTitle: Boolean,
        showLanguage: Boolean
    },

    data() {
        return {
            countries: [],
            cities: [],
            services: [],
            serviceLevels: [],
            segments: [],
            media: [],
            jobTitles: [],
            languages: [],

            segmentCategory: "",
            mediaTypeParent: "",

            languageList: ["Vietnamese", "English", "Vietnamese/English"]
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

        serviceLevels(newValue, oldValue) {
            this.$emit("change", { key: "serviceLevels", value: newValue });
        },

        segments(newValue, oldValue) {
            this.$emit("change", { key: "segments", value: newValue });
        },

        media(newValue, oldValue) {
            this.$emit("change", { key: "media", value: newValue });
        },

        jobTitles(newValue, oldValue) {
            this.$emit("change", { key: "jobTitles", value: newValue });
        },

        languages(newValue, oldValue) {
            this.$emit("change", { key: "languages", value: newValue });
        }
    }
};
</script>
