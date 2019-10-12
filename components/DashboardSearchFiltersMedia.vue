<template>
    <div>
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
</template>

<script>
import mixinMediaList from "~/mixins/media-list";

import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";

export default {
    name: "DashboardSearchFiltersMedia",

    mixins: [mixinMediaList],

    components: {
        SearchUserSelect,
        SearchUserSelectMultiple
    },
    data() {
        return {
            media: []
        };
    },

    watch: {
        media(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>
