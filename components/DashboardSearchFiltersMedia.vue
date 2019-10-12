<template>
    <div>
        <SearchUserSelect
            :items="mediaTypeList"
            :label="$t('search_for_journalist.media_type')"
            :value.sync="mediaTypeParent"
        ></SearchUserSelect>

        <div v-show="mediaTypeParent">
            <v-checkbox
                v-for="m in mediaListByType"
                v-model="media"
                class="mt-0 mb-3 pt-0"
                :key="m.value"
                :color="inputBorderColor"
                :label="m.text"
                :value="m.value"
                hide-details
            ></v-checkbox>
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
