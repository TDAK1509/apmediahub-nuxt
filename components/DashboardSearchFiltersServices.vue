<template>
    <div>
        <SearchUserSelect
            :items="serviceCategoryList"
            :label="$t('search_user.service_category')"
            :value.sync="serviceCategory"
        ></SearchUserSelect>

        <v-scroll-x-reverse-transition>
            <div v-show="serviceCategory" class="mt-4">
                <v-checkbox
                    v-for="s in serviceListByCategory"
                    v-model="services"
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
import mixinServiceList from "~/mixins/service-list";

import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";

export default {
    name: "DashboardSearchFiltersServices",

    mixins: [mixinServiceList],

    components: {
        SearchUserSelect,
        SearchUserSelectMultiple
    },
    data() {
        return {
            services: []
        };
    },

    computed: {
        inputBorderColor() {
            return this.$store.state.inputBorderColor;
        }
    },

    watch: {
        services(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>
