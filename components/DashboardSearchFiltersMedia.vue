<template>
    <div>
        <SearchSelect
            :items="mediaTypeList"
            :label="$t('search_for_journalist.media_type')"
            :value.sync="mediaTypeParent"
        ></SearchSelect>

        <v-scroll-x-reverse-transition>
            <div v-show="mediaTypeParent" class="mt-4">
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
        </v-scroll-x-reverse-transition>
    </div>
</template>

<script>
import mixinMediaList from "~/mixins/media-list";

import SearchSelectMultiple from "@/components/DashboardSearchSelectMultiple";
import SearchSelect from "@/components/DashboardSearchSelect";

export default {
    name: "DashboardSearchFiltersMedia",

    mixins: [mixinMediaList],

    components: {
        SearchSelect,
        SearchSelectMultiple
    },

    data() {
        return {
            media: []
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        }
    },

    watch: {
        media(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>
