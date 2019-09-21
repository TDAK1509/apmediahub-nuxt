<template>
    <v-app-bar app dark color="black">
        <v-app-bar-nav-icon @click.stop="toggleDrawer"></v-app-bar-nav-icon>

        <v-toolbar-title class="text-uppercase d-flex align-center">
            <v-btn text height="50" nuxt to="/" exact>
                <v-img :src="require('~/assets/images/logo.jpg')" width="50" height="50"></v-img>
                <span class="ml-3">APMediahub</span>
            </v-btn>
        </v-toolbar-title>

        <v-spacer></v-spacer>
    </v-app-bar>
</template>

<script>
export default {
    name: "TheAppBarDashboard",

    methods: {
        toggleDrawer() {
            this.$root.$emit("toggleDrawer");
        }
    }
};
</script>

<style lang="scss" default>
.avatar {
    border-radius: 50%;
    width: 35px;
    height: 35px;
}
</style>