<template>
    <div>
        <SearchSelect
            :items="serviceCategoryList"
            :label="$t('search_user.service_category')"
            :value.sync="serviceCategory"
        ></SearchSelect>

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

import SearchSelectMultiple from "@/components/DashboardSearchSelectMultiple";
import SearchSelect from "@/components/DashboardSearchSelect";

export default {
    name: "DashboardSearchFiltersServices",

    mixins: [mixinServiceList],

    components: {
        SearchSelect,
        SearchSelectMultiple
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
