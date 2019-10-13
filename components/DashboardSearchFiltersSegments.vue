<template>
    <div>
        <SearchSelect
            :items="segmentCategoryList"
            :label="$t('search_for_journalist.segment_category')"
            :value.sync="segmentCategory"
        ></SearchSelect>

        <v-scroll-x-reverse-transition>
            <div v-show="segmentCategory" class="mt-4">
                <v-checkbox
                    v-for="s in segmentChildListByCategory"
                    v-model="segments"
                    class="mt-0 mb-3 pt-0"
                    :key="s.value"
                    :color="inputBorderColor"
                    :label="s.text"
                    :value="s.value"
                    hide-details
                ></v-checkbox>
            </div>
        </v-scroll-x-reverse-transition>
    </div>
</template>

<script>
import mixinSegmentList from "~/mixins/segment-list";

import SearchSelectMultiple from "@/components/DashboardSearchSelectMultiple";
import SearchSelect from "@/components/DashboardSearchSelect";

export default {
    name: "DashboardSearchFiltersSegments",

    mixins: [mixinSegmentList],

    components: {
        SearchSelect,
        SearchSelectMultiple
    },

    data() {
        return {
            segments: []
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        }
    },

    watch: {
        segments(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>
