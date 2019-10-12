<template>
    <div>
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
