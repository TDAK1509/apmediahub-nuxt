<template>
    <v-app>
        <DashboardNavigationDrawer />

        <DashboardAppBar />

        <v-content>
            <v-container fluid>
                <nuxt-child />
            </v-container>
        </v-content>
    </v-app>
</template>

<script>
import DashboardAppBar from "@/components/DashboardAppBar";
import DashboardNavigationDrawer from "@/components/DashboardNavigationDrawer";

export default {
    name: "Dashboard",

    components: {
        DashboardAppBar,
        DashboardNavigationDrawer
    }
};
</script>

<style>
</style>