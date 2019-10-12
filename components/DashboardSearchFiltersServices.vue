<template>
    <div>
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

    watch: {
        services(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>
