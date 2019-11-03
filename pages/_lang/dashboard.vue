<template>
    <v-app>
        <TheNavigationDrawer />

        <TheAppBarDashboard />

        <v-content>
            <v-container fluid>
                <DashboardContentTitle>{{title}}</DashboardContentTitle>

                <v-row class="mx-1">
                    <v-col justify="center" align="center">
                        <nuxt-child />
                    </v-col>
                </v-row>
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import TheAppBarDashboard from "@/components/TheAppBarDashboard";
import TheNavigationDrawer from "@/components/TheNavigationDrawer";
import DashboardContentTitle from "@/components/DashboardContentTitle";

import mixinApi from "@/mixins/api";

import { mapState } from "vuex";

export default {
    name: "Dashboard",

    components: {
        TheAppBarDashboard,
        TheNavigationDrawer,
        DashboardContentTitle
    },

    mixins: [mixinApi],

    computed: {
        ...mapState(["dashboardPageTitle"]),

        title() {
            return this.dashboardPageTitle;
        }
    },

    methods: {
        async getCurrentUser() {
            const currentUser = await this.$api_getCurrentUser();
            this.$store.commit("SET_CURRENT_USER", currentUser);
        }
    },

    async created() {
        // await this.getCurrentUser();
    }
};
</script>