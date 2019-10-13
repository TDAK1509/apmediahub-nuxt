<template>
    <div>
        <SearchSelect
            :items="serviceCategoryList"
            :label="$t('search_user.service_category')"
            :value.sync="serviceCategory"
        ></SearchSelect>

        <div v-show="serviceCategory">
            <SearchSelectMultiple
                :items="serviceListByCategory"
                :label="$t('search_user.select_services')"
                :value.sync="services"
            ></SearchSelectMultiple>
        </div>
    </div>
</template>

<script>
import mixinServiceList from "@/mixins/service-list";
import SearchSelectMultiple from "@/components/DashboardSearchSelectMultiple";
import SearchSelect from "@/components/DashboardSearchSelect";

export default {
    name: "ProjectCategory",

    props: {
        rules: Array
    },

    mixins: [mixinServiceList],

    components: {
        SearchSelectMultiple,
        SearchSelect
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