<template>
    <div>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title class="title">{{$t('dashboard.search')}}</v-list-item-title>
            </v-list-item-content>
        </v-list-item>
    </div>
</template>

<script>
export default {
    name: "DashboardNavigationDrawerSearchForAgency",

    data() {
        return {
            list: [
                {
                    locale_key: "user.agency",
                    icon: "mdi-view-dashboard",
                    path: "search-for-agency"
                },

                {
                    locale_key: "user.journalist",
                    icon: "mdi-view-dashboard",
                    path: "search-for-journalist"
                },

                {
                    locale_key: "user.freelancer",
                    icon: "mdi-view-dashboard",
                    path: "search-for-freelancer"
                },

                {
                    locale_key: "common.media",
                    icon: "mdi-view-dashboard",
                    path: "search-for-media"
                }
            ]
        };
    },

    methods: {
        combineListLabel(locale_key) {
            const prefix = this.$t("dashboard.search");
            const content = this.$t(locale_key);
            return `${prefix} ${content}`;
        }
    }
};
</script>

<style>
</style>