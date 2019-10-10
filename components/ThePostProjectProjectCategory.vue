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
import mixinServiceList from "@/mixins/service-list";
import SearchUserSelectMultiple from "@/components/DashboardSearchUserSelectMultiple";
import SearchUserSelect from "@/components/DashboardSearchUserSelect";

export default {
    name: "ProjectCategory",

    props: {
        rules: Array
    },

    mixins: [mixinServiceList],

    components: {
        SearchUserSelectMultiple,
        SearchUserSelect
    },

    data() {
        return {
            services: [],
            serviceCategory: ""
        };
    },

    computed: {
        label() {
            return this.$t("post_project.project_category");
        }
    },

    watch: {
        services(newValue, oldValue) {
            this.$emit("update:value", newValue);
        }
    }
};
</script>

<style>
</style>