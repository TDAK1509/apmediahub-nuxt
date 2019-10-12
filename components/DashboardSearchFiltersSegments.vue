<template>
    <div>
        <SearchUserSelect
            :items="segmentCategoryList"
            :label="$t('search_for_journalist.segment_category')"
            :value.sync="segmentCategory"
        ></SearchUserSelect>

        <v-scroll-x-reverse-transition>
            <div v-show="segmentCategory">
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

import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";

export default {
    name: "DashboardSearchFiltersSegments",

    mixins: [mixinSegmentList],

    components: {
        SearchUserSelect,
        SearchUserSelectMultiple
    },
    data() {
        return {
            segments: []
        };
    },

    watch: {
        segments(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>
